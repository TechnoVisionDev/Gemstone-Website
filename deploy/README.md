# Hosting on the Contabo server

The website is a static React/Vite site. On the server, [Caddy](https://caddyserver.com) serves the built files and
handles HTTPS certificates automatically. The site is built with a private copy of Node.js in `/opt/gemstone-node`,
so whatever the Discord bot runs on is not touched.

- **Primary domain:** `https://gemstonebot.net`
- **Redirects there:** `www.gemstonebot.net`, `gemmabot.io`, `www.gemmabot.io`

## 1. Point DNS at the server (Namecheap)

Find the server's **public IP** in the Contabo panel under *VPS → IP address*, or run `curl -4 ifconfig.me` on the
server. Don't use the VNC address: that is Contabo's host machine, not your VPS.

For **each** domain (`gemstonebot.net` and `gemmabot.io`), go to Namecheap → *Domain List → Manage → Advanced DNS*:

1. Delete the default `CNAME www → parkingpage.namecheap.com` and the `URL Redirect @` records.
2. Add:

| Type     | Host  | Value                | TTL       |
|----------|-------|----------------------|-----------|
| A Record | `@`   | `<server public IP>` | Automatic |
| A Record | `www` | `<server public IP>` | Automatic |

DNS usually updates within a few minutes but can take up to an hour. Check it with `dig +short gemstonebot.net`.

## 2. One-time server setup

SSH into the server as root and run:

```bash
curl -fsSL https://raw.githubusercontent.com/TechnoVisionDev/Gemstone-Website/main/deploy/setup-server.sh | bash
```

This installs Caddy, clones this repo to `/opt/gemstone-website`, builds the site into `/var/www/gemstone-website`,
and opens ports 80/443 if `ufw` is enabled. If something else (e.g. nginx or Apache) is already using ports 80/443,
the script stops without changing anything.

If you use Contabo's firewall in the customer panel, allow TCP 80 and 443 there too.

## 3. Publishing updates

After pushing changes to `main` on GitHub (including from Replit):

```bash
sudo /opt/gemstone-website/deploy/deploy.sh
```

## Troubleshooting

- Certificates and requests: `journalctl -u caddy -f`
- Caddy status: `systemctl status caddy`
- To change domains or redirects, edit `deploy/Caddyfile`, push it, then run
  `cp /opt/gemstone-website/deploy/Caddyfile /etc/caddy/Caddyfile && systemctl reload caddy`
