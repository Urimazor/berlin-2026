#!/usr/bin/env bash
# Downloads binary assets, manifest and the live admin data from the production site into the repo root
set -e
cd "$(dirname "$0")/.."
B=https://berlin-2026-chi.vercel.app
mkdir -p assets
for f in favicon.png apple-touch-icon.png icon-192.png icon-512.png cover.jpg logo-uog.png logo-2.png; do curl -fsSL "$B/assets/$f" -o "assets/$f" || echo "skip $f"; done
curl -fsSL "$B/manifest.webmanifest" -o manifest.webmanifest
curl -fsSL "$B/api/data" -o data/live-data.json
echo "done"
