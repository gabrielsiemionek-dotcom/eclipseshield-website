// Mobile Lighthouse check against a running `npm run preview` (http://localhost:4321).
// Usage: npm run lh -- home quote   (page paths without slashes; "home" is the home page)
import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync } from 'node:fs';

const names = process.argv.slice(2);
if (names.length === 0) names.push('home');
mkdirSync('lighthouse', { recursive: true });

for (const raw of names) {
  const name = raw.replace(/^\/+|\/+$/g, '') || 'home';
  const path = name === 'home' ? '/' : `/${name}/`;
  const out = `lighthouse/${name.replace(/\//g, '_')}.json`;
  execSync(
    `npx -y lighthouse@13.5.0 "http://localhost:4321${path}" --quiet --chrome-flags="--headless=new" --output=json --output-path="${out}"`,
    { stdio: 'ignore' },
  );
  const r = JSON.parse(readFileSync(out, 'utf8'));
  const scores = Object.values(r.categories).map((c) => `${c.title}: ${Math.round(c.score * 100)}`);
  console.log(`${path}  ${scores.join(' | ')}`);
}
