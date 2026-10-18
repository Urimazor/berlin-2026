# Project history — Berlin 2026 office tour map

Office tour of Berlin for the whole Mazor First team, 26–29.11.2026 (arrival Thursday noon).

1. Built an interactive Berlin map (Leaflet) modeled on an earlier Israel map: neighborhoods, river, main stations, landmarks; layers for sites, architecture/planning, museums, galleries, restaurants, shops; day routes.
2. Fixed the map background tiles; dates extended to start Thursday 26.11.
3. Base-map switcher: light map, Berlin TrueDOP 2024 orthophoto (20 cm, Geoportal Berlin WMS, Esri imagery underneath as fallback), optional street names. Later Esri aerial removed and a dark (reversed-contrast) map added; label "אורתופוטו / 2024 · 20 ס״מ".
4. Google Maps links fixed (open real place pages; Google Maps / walking directions / Street View in each card).
5. Hotel Casa Camper Berlin added with a dedicated marker; position corrected twice from user sketches.
6. Hosting: first Higgsfield (retired), then Vercel project berlin-2026 with auto-publish after every change → https://berlin-2026-chi.vercel.app. App icon "ברלין 2026", manifest, PWA tags; "Made in Higgsfield" badge removed.
7. Restaurants cleared — only user-supplied places (Borchardt, Thursday 19:00 dinner; Vietnamese restaurant on Saturday route).
8. Layer colors unified; select-all / clear-all layer buttons.
9. Header day buttons select routes; mobile: collapsible sections, hide-tools toggle, compact header; blur on mobile header fixed.
10. Logos in header center: Mazor / First and ניהול / פרויקטים; sizes tuned for desktop and mobile.
11. Routes: Thursday = arrival, rest, 19:00 dinner at Borchardt. Friday = East Berlin walk (Holzmarkt → East Side Gallery → Boxhagener Kiez). Saturday = parks (Gleisdreieck → Viktoriapark → lunch/dinner → Bergmannstraße). Sunday route removed ("טרם נקבע מסלול").
12. All points link to their Google Maps place pages; user-supplied links stored verbatim.
13. Admin interface (desktop): Google Sign-In, edit texts/routes/stops, drag points, add/delete points, Google link per point; saves publish immediately to Vercel Blob with backups.
14. "פרטי טיסות ומלון" section (flights out/back — still to be filled — hotel and address); on desktop routes are reached from header dates, on mobile via "מסלולי סיור".
15. Layer letters replaced with minimal line icons (camera, set square, columns, picture frame, fork & knife, bag, train, waves).
16. 2026-10-18: Code moved to GitHub (Urimazor/berlin-2026); Vercel deploys automatically on every push to main.

Open items: flight details; Sunday route; more points per user lists.
