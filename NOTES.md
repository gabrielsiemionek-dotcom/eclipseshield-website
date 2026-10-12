# Eclipse Shield website: notes

A short dated entry for every change, newest first. Open issues are at the bottom.

## 2026-10-12: Cloudflare Pages connected

- Repo connected to Cloudflare Pages (production branch `main`, preset Astro, build `npm run build`, output `dist`). Pull requests get preview URLs.

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
- **Legal pages** are interim drafts. Full UK GDPR privacy policy and terms come with the form and analytics work.
