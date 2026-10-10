# eclipseshield-website

Website for [Eclipse Shield](https://eclipseshield.co.uk): window film for homes and businesses in Cheshire, Merseyside and Flintshire.

Built with [Astro](https://astro.build) as a static site and hosted on Cloudflare Pages.

## Run it locally

Needs Node.js 22.12 or newer.

```bash
npm install
npm run dev        # http://localhost:4321 with live reload
npm run build      # production build into dist/
npm run preview    # serve the production build
npm run lh -- / /quote/   # mobile Lighthouse against the running preview
```

## Where things live

- `src/config/site.ts`: business details (phone, email, service area). Change them here, not in pages.
- `src/data/`: services and FAQ content.
- `src/pages/`: one file per page.
- `src/components/`, `src/layouts/`: shared header, footer, layout and SEO tags.
- `src/assets/photos/`: photos (converted to responsive AVIF and WebP at build time).
- `public/`: files served as-is (favicon, social image, `_headers`).
- `NOTES.md`: change log and open issues.

## Cloudflare Pages settings

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main` (every pull request gets its own preview URL)
