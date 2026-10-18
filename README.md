# ברלין 2026 · מפת סיור משרד — חבילת המשך עבודה

## מה יש כאן
- `source/Berlin Map.html` — קובץ המקור של המפה.
- `site/` — האתר כפי שמפורסם ב-Vercel (כולל ממשק הניהול ב-`api/`).
- `CLAUDE.md` — כללי העבודה הקבועים (Claude Code קורא אותו אוטומטית).
- `HISTORY.md` — סיכום כל מה שנעשה עד כה.
- `scripts/` — משיכת נתונים ונכסים מהאתר החי, בנייה ופרסום.

## פרסום אוטומטי דרך GitHub
כל push ל-`main` מתפרסם אוטומטית ב-Vercel (פרויקט `berlin-2026`, Root Directory = `site`). אחרי עריכה של `source/Berlin Map.html` מריצים `node scripts/build-site.mjs` ודוחפים.

## Claude Code (מומלץ — יכול גם לפרסם)
1. פרקו את התיקייה, והיכנסו אליה בטרמינל.
2. פעם אחת: `npm i -g vercel` ואז `vercel login`.
3. `bash scripts/pull-live.sh` — מוריד אייקונים, לוגואים והנתונים העדכניים מהאתר.
4. הריצו `claude` בתיקייה ובקשו שינויים כרגיל. אחרי כל שינוי: `node scripts/build-site.mjs && bash scripts/deploy.sh`.

## Claude Projects (באפליקציית Desktop)
צרו Project חדש והעלו ל-Project Knowledge את: `CLAUDE.md`, `HISTORY.md`, `source/Berlin Map.html`, `data/live-data.json`. הדביקו את תוכן CLAUDE.md גם ב-Project Instructions. שם אפשר לערוך ולקבל קובץ מעודכן, אבל הפרסום ל-Vercel נעשה דרך Claude Code או ידנית (`scripts/deploy.sh`).
