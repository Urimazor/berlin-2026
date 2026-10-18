// Rebuild site/index.html from source/Berlin Map.html (run: node scripts/build-site.mjs)
import fs from 'node:fs';
const src=fs.readFileSync(new URL('../source/Berlin Map.html',import.meta.url),'utf8');
const HEAD='<link rel="icon" href="/assets/favicon.png"><link rel="apple-touch-icon" href="/assets/apple-touch-icon.png"><link rel="manifest" href="/manifest.webmanifest"><meta name="apple-mobile-web-app-title" content="ברלין 2026"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes"><meta name="theme-color" content="#f3f2f2"><meta property="og:image" content="/assets/cover.jpg"><title>';
let d=src.replace(/_ds\/modernist-[^"']*\/styles\.css/g,'styles.css').replace(/<template id="__bundler_thumbnail">[\s\S]*?<\/template>\n?/,'');
if(!d.includes('apple-touch-icon'))d=d.replace('<title>',HEAD);
fs.writeFileSync(new URL('../site/index.html',import.meta.url),d);
console.log('site/index.html written');
