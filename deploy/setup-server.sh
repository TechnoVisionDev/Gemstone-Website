#!/usr/bin/env bash
# One-time setup of the Gemstone website on a Debian/Ubuntu server (e.g. a Contabo VPS).
# Installs Caddy (web server with automatic HTTPS) and a private Node.js used only for builds,
# clones the repo, builds the site, and starts serving it. Safe to re-run.
#
# Run on the server as root:
#   curl -fsSL https://raw.githubusercontent.com/TechnoVisionDev/Gemstone-Website/main/deploy/setup-server.sh | bash
set -euo pipefail

REPO_URL=https://github.com/TechnoVisionDev/Gemstone-Website.git
REPO_DIR=/opt/gemstone-website
NODE_DIR=/opt/gemstone-node
NODE_MAJOR=24

[ "$(id -u)" -eq 0 ] || { echo "Please run as root (or with sudo)." >&2; exit 1; }
command -v apt-get >/dev/null || { echo "This script supports Debian/Ubuntu only." >&2; exit 1; }

echo "==> Checking that ports 80/443 are free (or already used by Caddy)"
if command -v ss >/dev/null; then
  others=$(ss -ltnpH '( sport = :80 or sport = :443 )' | grep -v '"caddy"' || true)
  if [ -n "$others" ]; then
    echo "Something other than Caddy is already listening on port 80/443:" >&2
    echo "$others" >&2
    echo "Stop it (or ask for an nginx-based setup instead) and re-run." >&2
    exit 1
  fi
fi

echo "==> Installing base packages"
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y -qq git curl rsync xz-utils ca-certificates gnupg debian-keyring debian-archive-keyring apt-transport-https >/dev/null

if ! command -v caddy >/dev/null; then
  echo "==> Installing Caddy"
  curl -1sLf https://dl.cloudsmith.io/public/caddy/stable/gpg.key | gpg --dearmor --yes -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
  curl -1sLf https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt > /etc/apt/sources.list.d/caddy-stable.list
  apt-get update -qq
  apt-get install -y -qq caddy >/dev/null
fi

if [ ! -x "$NODE_DIR/bin/node" ]; then
  echo "==> Installing private Node.js $NODE_MAJOR into $NODE_DIR (does not affect any system Node)"
  case "$(uname -m)" in
    x86_64) arch=x64 ;;
    aarch64) arch=arm64 ;;
    *) echo "Unsupported CPU $(uname -m)" >&2; exit 1 ;;
  esac
  base=https://nodejs.org/dist/latest-v$NODE_MAJOR.x
  tmp=$(mktemp -d)
  curl -fsSL "$base/SHASUMS256.txt" -o "$tmp/SHASUMS256.txt"
  file=$(grep -o "node-v[0-9.]*-linux-$arch.tar.xz" "$tmp/SHASUMS256.txt" | head -1)
  curl -fsSL "$base/$file" -o "$tmp/$file"
  (cd "$tmp" && grep " $file\$" SHASUMS256.txt | sha256sum -c --quiet -)
  mkdir -p "$NODE_DIR"
  tar -xJf "$tmp/$file" -C "$NODE_DIR" --strip-components=1
  rm -rf "$tmp"
  PATH="$NODE_DIR/bin:$PATH" npm install -g --silent pnpm@10
fi

if [ ! -d "$REPO_DIR/.git" ]; then
  echo "==> Cloning website repo"
  git clone --quiet "$REPO_URL" "$REPO_DIR"
fi
chmod +x "$REPO_DIR/deploy/deploy.sh"

"$REPO_DIR/deploy/deploy.sh"

echo "==> Configuring Caddy"
if [ -f /etc/caddy/Caddyfile ] && ! grep -q "managed by deploy/setup-server.sh" /etc/caddy/Caddyfile; then
  cp /etc/caddy/Caddyfile "/etc/caddy/Caddyfile.bak.$(date +%Y%m%d%H%M%S)"
fi
cp "$REPO_DIR/deploy/Caddyfile" /etc/caddy/Caddyfile
caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile >/dev/null 2>&1 \
  || caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile
systemctl enable --now caddy >/dev/null
systemctl reload caddy

if command -v ufw >/dev/null && ufw status | grep -q "Status: active"; then
  echo "==> Opening ports 80/443 in ufw"
  ufw allow 80/tcp >/dev/null
  ufw allow 443/tcp >/dev/null
fi

echo
echo "All set. Once DNS for gemstonebot.net and gemmabot.io points at this server,"
echo "Caddy will fetch HTTPS certificates automatically (watch: journalctl -u caddy -f)."
echo "To publish future changes:  sudo $REPO_DIR/deploy/deploy.sh"
