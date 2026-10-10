// Mobile Lighthouse check against a running `npm run preview` (http://localhost:4321).
// Usage: npm run lh -- / /quote/
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync } from 'node:fs';

const pages = process.argv.slice(2);
if (pages.length === 0) pages.push('/');
mkdirSync('lighthouse', { recursive: true });

for (const p of pages) {
  const name = p.replace(/^\/|\/$/g, '').replace(/\//g, '_') || 'home';
  const out = `lighthouse/${name}.json`;
  execFileSync(
    'npx',
    ['-y', 'lighthouse@13.5.0', `http://localhost:4321${p}`, '--quiet', '--chrome-flags=--headless=new', '--output=json', `--output-path=${out}`],
    { stdio: 'ignore', shell: true },
  );
  const r = JSON.parse(readFileSync(out, 'utf8'));
  const scores = Object.values(r.categories).map((c) => `${c.title}: ${Math.round(c.score * 100)}`);
  console.log(`${p}  ${scores.join(' | ')}`);
}
