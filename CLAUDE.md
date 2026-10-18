# Berlin 2026 office tour map — standing rules (Claude Code)

Live site: https://berlin-2026-chi.vercel.app — Vercel project `berlin-2026` (prj_x4iaiagV2PFiIz93EWgM5skWuErn, team uri-mazor / team_kIPAaoLo6uziz986s3fy83o6).
Do NOT use berlin-2026-uri-mazor.vercel.app (behind Vercel login). berlin-2026.vercel.app belongs to someone else. The old Higgsfield site is retired.

## Files
- `source/Berlin Map.html` — the single source file (HTML + inline CSS/JS, Leaflet). Edit here.
- Repo root = what gets deployed: index.html (built from source), styles.css (Modernist design system), api/*.js (Vercel serverless), package.json (@vercel/blob), vercel.json, assets/, manifest.webmanifest. `.vercelignore` keeps source/, scripts/, data/ and *.md out of the deployment.
- `data/live-data.json` — snapshot of live admin data (currently empty `{}`; live data lives in Vercel Blob and is not touched by deploys).
- Icons `assets/favicon.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` and `manifest.webmanifest` were missing from the handoff and were recreated on 2026-10-18; replace them with the originals from the live site if wanted.

## Workflow for every change
1. `scripts/pull-live.sh` — GET /api/data. If it returns data, it is the MASTER copy (admin edits made in the app). Copy its `points` into `const P=[…]` and `days` into `const DAYS=[…]` (and `trip` into TRIP) in source/Berlin Map.html before editing.
2. Edit source/Berlin Map.html.
3. `node scripts/build-site.mjs`, then commit and push to `main` on GitHub. Vercel deploys automatically (project Root Directory must stay empty = repo root). `scripts/deploy.sh` is the manual fallback. Check a deploy via the GitHub commit status (context "Vercel").
4. Verify the live URL serves the change and /api/config responds.
5. If a change touches points/days, the live data still overrides the HTML. Apply the same change to live data only if the user asks: back up current JSON to Blob `backups/<ts>.json`, then PUT https://blob.vercel-storage.com/data.json (headers: authorization Bearer $BLOB_READ_WRITE_TOKEN, x-api-version 7, x-add-random-suffix 0, x-allow-overwrite 1, x-content-type application/json). Token: `vercel env pull`.

## Data shapes
- Point: [layer, name(original), he, desc, area, lat, lng, url(user's Google Maps link or ''), id, placeId]
- Layers: sites, arch, museums, galleries, food, shops, stations, hoods (hoods/river = text labels, not pins)
- Day: {id:'d0'..'d3', d:'26.11', w:'חמישי', title, info(HTML), stops:[point ids], fromHotel?}
- Live data: {v, points, days, trip:{out,back,hotel,addr}, savedBy, savedAt}

## Admin
Google Sign-In (desktop only). Env vars: GOOGLE_CLIENT_ID (72413425968-ou8f3a5kfolk6m62e7l2vqnnq9qpml95.apps.googleusercontent.com, origin https://berlin-2026-chi.vercel.app), ADMIN_EMAILS (uri@mazorfirst.com), BLOB_READ_WRITE_TOKEN (Blob store store_3tkkjabjnypwrQOi "berlin-2026-data"). Env changes need a redeploy. Saves go live immediately + backup to backups/.

## Content rules
- Restaurants layer: only places the user supplies.
- Google Maps links: when the user gives a link, resolve it (follow redirect, coords from !3d/!4d), store the user's link in p[7], set the pin to Google's coords unless the user positioned it by sketch. Other points open their Google place page via place id p[9] (resolve via google.com/search?tbm=map&q=…, first ChIJ… id near the pin).
- Hotel: Casa Camper Berlin, Weinmeisterstraße 1, 10178 Berlin-Mitte (pin placed by user sketch).
- Design: Modernist design system (styles.css): Archivo, #f3f2f2 ground, #201e1d ink, single red accent #ec3013, 0 radius, 2px rules, minimal line icons (Lucide-style). UI language Hebrew, RTL.
- Mobile (≤820px): top date row hidden, collapsible sections, "הסתר כלים" toggle, map gets max area. Desktop: day buttons in header select routes.
- Text the user provides goes in verbatim. Be concise in replies.
