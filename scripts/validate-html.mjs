import { readFileSync } from 'node:fs';

const html = readFileSync('index.html', 'utf8');
const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
if (!scripts.length) throw new Error('No inline JavaScript found.');
for (const [i, source] of scripts.entries()) {
  try { new Function(source); }
  catch (error) { throw new Error(`Inline script ${i + 1} has a syntax error: ${error.message}`); }
}
const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map(m => m[1]);
const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
if (duplicates.length) throw new Error(`Duplicate HTML ids: ${[...new Set(duplicates)].join(', ')}`);
for (const id of ['home','design','quotes','projects','profile','kind','qty','sizes','sizeBreakdown','fabric','color','cut','sleeve','neckline','weight','finish','printMethod','logoPlacement','logoText','details','fabricCost','sewCost','finishCost','marginPct','estimateResult','saveMessage','quoteList','projectList','mockupSide','cutStyle','garmentSvg','garmentShape','garmentShade','neckDetail','seamDetail','hemDetail','garmentZoom','garmentZoomValue']) {
  if (!ids.includes(id)) throw new Error(`Required element missing: #${id}`);
}
console.log(`MAKILA LAB check passed: ${scripts.length} script(s), ${ids.length} unique IDs.`);
