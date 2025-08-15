
# LocalGirls — Clean Build (Daily.co)

This repo is ready to deploy on Vercel. No extra code changes required.

## Deploy (browser-only)
1) Create a GitHub repo and upload all these files **at the repo root**.
2) In Vercel → Add New → Project → import the repo.
3) Set Environment Variables (Project → Settings → Environment Variables):
```
DAILY_API_KEY=YOUR_DAILY_API_KEY
DAILY_SUBDOMAIN=localgirls
NEXT_PUBLIC_DAILY_SUBDOMAIN=localgirls
MODEL_SLUG=Taylored2U
NEXT_PUBLIC_MODEL_SLUG=Taylored2U
```
4) Deploy. Open `/login` → `/members` → click **Taylored2U**.

Notes:
- Presence uses a heartbeat from `/model` (keep that tab open while live).
- CSP for Daily is baked into `next.config.js`.
- The room page embeds the call on the left with chat on the right.
