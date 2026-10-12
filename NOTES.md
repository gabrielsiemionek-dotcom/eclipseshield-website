# Eclipse Shield website: notes

A short dated entry for every change, newest first. Open issues are at the bottom.

## 2026-10-12: Service pages, Homes and Businesses

- Six service pages from one template (`src/pages/services/[slug].astro`, content in `src/data/services.ts`): privacy and one-way mirror, solar and heat control, frosted and decorative, UV and fade protection, safety and security, anti-graffiti. Each has benefits, where it is used, film options, an honest "Good to know" box, FAQs, related services and a quote call to action.
- Services overview page (`/services/`) with a "start with the problem" guide.
- Homes (`/homes/`) and Businesses (`/businesses/`) landing pages: room-by-room and workplace-by-workplace uses linking to the right services, why film, what happens at the survey, FAQs.
- Service, BreadcrumbList and FAQPage structured data; visible breadcrumbs on inner pages.
- Services without a real photo use a simple illustration of the film effect (`FilmVisual`) until photos are ready. Solar control uses the glass room terrace photo.
- Navigation now links to Services, Homes and Businesses. Areas and FAQ still point at home page sections.
- Fixed the header phone icon size and number wrapping.
- Copy avoids promises not yet confirmed (for example, bringing film samples to surveys).
- Lighthouse (mobile): home, services, four service pages, homes and businesses all 100 / 100 / 100 / 100 (one run of frosted was 99 performance). Internal link and JSON-LD check: 14 pages, no problems.

## 2026-10-12: Cloudflare Pages connected

- Repo connected to Cloudflare Pages (production branch `main`, preset Astro, build `npm run build`, output `dist`). Pull requests get preview URLs.
- Fixed the first Cloudflare build: `npm ci` failed because the lock file was written by npm 11 (local Node 24) and Cloudflare uses npm 10 (Node 22), which also wants `@emnapi/core` and `@emnapi/runtime` listed. Lock file regenerated with npm 10; checked with both npm 10 and 11. If dependencies change, run `npx npm@10 install --package-lock-only` before committing.

## 2026-10-11: Phone number and company details

- Added the phone number (07592 196929). Call links now show in the header (wide screens), mobile quote bar, call-to-action band and quote page.
- Footer and privacy notice show "Registered in England and Wales, company number 17381324". Company number also added to the LocalBusiness structured data.
- Owner confirmed permission to use the glass room job photos.
- `npm run lh -- home quote` runs a mobile Lighthouse check. Result: home 99 / 100 / 100 / 100, quote 100 / 100 / 100 / 100.

## 2026-10-10: Scaffold, home page and first preview

- New Astro 7 static site (plain components and CSS, no UI framework), deployed with Cloudflare Pages.
- Branding uses the business colours from the logo: black, gold and silver. Font is Manrope (self-hosted, one variable font file).
- Header logo is an SVG redraw of the logo mark (arc, sun flare, shield) with the "Eclipse Shield" wordmark in text. The original PNG logo is used for the social sharing image and the touch icon.
- Home page: hero, services overview (6 films), homes and businesses, how it works, why us, service area, FAQ, quote call to action. The navigation points to home page sections until the dedicated pages exist.
- Real job photos from the glass room fit are used, resized and with phone location (EXIF/GPS) data removed, because the repo is public.
- Temporary quote page (email link with a pre-filled template) until the multi-step form is built.
- Interim privacy notice and terms (drafts, must be reviewed before launch).
- 404 page, sitemap (`/sitemap-index.xml`), `robots.txt`, canonical and Open Graph tags, LocalBusiness and FAQPage JSON-LD.
- Security headers and long caching for hashed assets in `public/_headers`. Preview and `*.pages.dev` URLs send `X-Robots-Tag: noindex`.
- Lighthouse (mobile, local production build): home 100 / 100 / 100 / 100, quote 100 / 100 / 100 / 100 (performance / accessibility / best practices / SEO).

## Open issues

- **WhatsApp** is switched off for now (set `whatsapp` in `src/config/site.ts` to enable it later).
- **Registered office address.** Company number is shown; UK limited companies must also show their registered office address on the website (a registered office service address is fine). Set `registeredOffice` in `src/config/site.ts` before launch.
- **ICO data protection fee.** Most businesses that handle customer details need to pay this. Should be done before the quote form goes live; the privacy policy will reference the registration.
- **Insurance.** None yet, so the site makes no insurance claims. Add it to "Why us" once it is in place (public liability is worth having for fitting work).
- **3M film warranty.** Unknown, so not mentioned yet.
- **Opening hours.** Shown as "Open 7 days a week"; the structured data currently says open 24 hours, 7 days. Confirm what hours customers can actually call.
- **Photo captions.** Permission confirmed. Tell us which film was fitted on the glass room job so captions can be more specific.
- **AI-edited images** in `Web Images` (privacy glass outside, exterior privacy glass) are not used. If they are used later, they must be labelled as illustrations, not real jobs.
- **Logo files.** A vector (SVG) or high-resolution transparent PNG of the final logo would help for print and future pages.
- **Domain and email.** The domain is registered through Squarespace. The email provider for `contact@eclipseshield.co.uk` needs confirming before DNS changes (Resend records, custom domain).
- **Film samples.** If you carry 3M sample swatches to surveys, tell us and the copy can say so (it currently only says "ask us about samples").
- **Service copy review.** Please read the service pages for anything you don't offer or would describe differently (for example edge attachment for security film, custom logos, fitting on conservatory roofs).
- **Legal pages** are interim drafts. Full UK GDPR privacy policy and terms come with the form and analytics work.
