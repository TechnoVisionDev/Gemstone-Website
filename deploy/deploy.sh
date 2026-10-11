#!/usr/bin/env bash
# Pull the latest website code from GitHub, build it, and publish it to the folder Caddy serves.
# Run on the server as root:  sudo /opt/gemstone-website/deploy/deploy.sh
set -euo pipefail

REPO_DIR=/opt/gemstone-website
WEB_ROOT=/var/www/gemstone-website
NODE_DIR=/opt/gemstone-node          # private Node.js used only for building; the bot's Node (if any) is untouched
BRANCH=${BRANCH:-main}

export PATH="$NODE_DIR/bin:$PATH"
export CI=true

cd "$REPO_DIR"
echo "==> Updating code ($BRANCH)"
git fetch --quiet origin "$BRANCH"
git reset --hard --quiet "origin/$BRANCH"
echo "    now at $(git log -1 --format='%h %s')"

echo "==> Installing dependencies"
pnpm install --frozen-lockfile --filter "@workspace/gemstone-website..."

echo "==> Building"
# vite.config.ts requires PORT and BASE_PATH even for a production build.
PORT=3000 BASE_PATH=/ NODE_ENV=production pnpm --filter @workspace/gemstone-website run build

BUILD_DIR="$REPO_DIR/artifacts/gemstone-website/dist/public"
test -f "$BUILD_DIR/index.html" || { echo "Build produced no index.html" >&2; exit 1; }

echo "==> Publishing to $WEB_ROOT"
mkdir -p "$WEB_ROOT"
rsync -a --delete "$BUILD_DIR/" "$WEB_ROOT/"
chmod -R a+rX "$WEB_ROOT"

echo "==> Done. Live at https://gemstonebot.net"
