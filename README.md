
# LocalGirls — Clean Build (Daily.co)

This project is ready to upload to GitHub and deploy on Vercel.

## Deploy (browser-only)
1) Create a GitHub repo and upload all files at the repo root (you should see `/app`, `/public`, `package.json`, `next.config.js`).
2) In Vercel → Add New → Project → import the repo.
3) Add Environment Variables:
```
DAILY_API_KEY=YOUR_DAILY_API_KEY
DAILY_SUBDOMAIN=localgirls
NEXT_PUBLIC_DAILY_SUBDOMAIN=localgirls
MODEL_SLUG=Taylored2U
NEXT_PUBLIC_MODEL_SLUG=Taylored2U
```
4) Deploy → open `/login` → `/members` → click **Taylored2U**.

Notes:
- Presence uses a heartbeat from `/model` (keep that tab open while live).
- CSP is in `next.config.js`.
- The placeholder image is in `/public/taylored2u.png`.
