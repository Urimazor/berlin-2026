#!/usr/bin/env bash
# Deploy the repo root to the Vercel project berlin-2026 (production). Requires: npm i -g vercel ; vercel login
set -e
cd "$(dirname "$0")/.."
[ -d .vercel ] || vercel link --yes --project berlin-2026 --scope uri-mazor
vercel deploy --prod --yes
curl -fsS https://berlin-2026-chi.vercel.app/api/config && echo && echo "live OK"
