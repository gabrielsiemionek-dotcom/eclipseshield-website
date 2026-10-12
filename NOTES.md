# Eclipse Shield website: notes

A short dated entry for every change, newest first. Open issues are at the bottom.

## 2026-10-12: Quote form spam check fixes (after phone testing)

- Real-phone tests failed the Turnstile check. Two causes: the token (valid 5 minutes, single use) could expire while filling in the form, and when Cloudflare asked for a "Verify you are human" tick it appeared late (only on the last step) and sending didn't continue after ticking.
- The check now starts quietly on the first interaction with the form, so a token is normally ready by the last step. The box sits above the Next/Send buttons, and if Cloudflare wants a tick a hint appears straight away.
- Pressing Send waits for the token. If a tick is needed it says "Nearly there…" and sends automatically once ticked. Expired tokens refresh automatically, and a failed check is retried once with a fresh token.
- The server now logs and returns Cloudflare's Turnstile error codes (no personal data), and the form shows the code if a check ever fails. A fake-token test against the preview returned `invalid-input-response`, which confirms the secret key is valid.
- Tested locally: normal pass (token ready on step 1, send in about 0.1 s), forced "always needs a tick" key (hint on step 1, waiting message on Send), and a simulated expired token (automatic retry, success). Lighthouse `/quote/`: 100 / 100 / 100 / 100.

## 2026-10-13: Quote form, contact page and privacy policy

- **Delivery choice:** Cloudflare Pages Function (`functions/api/quote.ts`) plus Resend. Chosen over a form service because it is free at our volume (Resend: 3,000 emails a month), supports photo attachments, keeps the email layout ours, and adds no extra third party beyond Resend. Nothing is stored: the email is the only copy.
- **Spam protection:** hidden honeypot field plus Cloudflare Turnstile in "interaction-only" mode (invisible for most people). Turnstile only loads when someone starts the form, so it does not slow the page down. The server verifies the token before sending.
- **Multi-step form on `/quote/`** (7 steps, mobile-first): property type, what they want (multiple), windows (count, size or "not sure", glass type, position), photos, postcode and town, timing (flexible or a date), contact details. Only name, email and privacy consent are required (phone is required if they choose call or text). Progress bar, back/next, focus moves to each step's question, inline errors, thank-you state.
- **Photos:** up to 5, resized in the browser to 1600 px JPEG before upload (also strips location data). Server limits: 8 MB each, 20 MB total, images only.
- **Analytics events (no personal data):** `quote_start` on first interaction; `generate_lead` on success with `property_type`, `interests` and `photo_count`.
- **Pre-filled links:** service pages link to `/quote/?service=<slug>` (pre-ticks the matching option); Homes links to `/quote/?property=home`.
- **Email to contact@:** subject "Quote request: Name, Town (Property type)", a table of answers, photos attached, and Reply-To set to the customer.
- **Contact page** (`/contact/`) with quote, phone and email options, service area and company details. Menu: "FAQ" replaced by "Contact" (FAQs remain on the home and service pages).
- **Privacy policy** rewritten for UK GDPR: quote form data and lawful basis, Turnstile, hosting, processors (Cloudflare, Resend, Google Workspace), retention, rights, ICO. Cookies and analytics section to be completed with the consent banner.
- **Mobile bar** on the quote page offers "Call" instead of a link back to the form.
- **Turnstile keys:** the real site key is the default; local builds use the test key from `.env.local`. Local testing: `npm run dev:functions` (see README).
- **Tested locally with Cloudflare's runtime (wrangler):** validation errors (name, email, consent, phone when call or text is chosen), missing Turnstile token rejected, honeypot silently accepted, valid submission with photos (dry run), GET rejected. In the browser: pre-fill, step navigation, `quote_start` once, photo resize (a non-image was rejected), inline errors with focus, successful submit, thank-you state and `generate_lead`.
- **Lighthouse (mobile):** `/quote/`, `/contact/`, `/privacy/` and a service page all 100 / 100 / 100 / 100; home 99 to 100.

## 2026-10-12: Area pages

- Area pages for Merseyside, Cheshire and Flintshire from one template (`src/pages/areas/[slug].astro`, content in `src/data/areas.ts`), plus an `/areas/` overview.
- Each page has: towns covered (grouped), what the free 20-mile survey area means there, common local window problems linked to the right services, local "good to know" notes (conservation areas and listed buildings, flats, rural access, Welsh building regulations, business sites), a short how-it-works, local FAQs, links to the other areas and a quote call to action.
- Copy describes the area and the jobs film suits. It does not claim past jobs or customers in any area.
- Navigation "Areas" now goes to `/areas/`; the home page area list links to each area page.
- BreadcrumbList and FAQPage structured data on area pages. Sitemap now lists 17 pages.
- Lighthouse (mobile): `/areas/`, all three area pages and home 100 / 100 / 100 / 100. Link and JSON-LD check: 18 pages, no problems.

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
- **Area copy review.** Check the town lists and local notes on the area pages, and tell us about any towns you would rather not list or want to add.
- **Quote form go-live checklist:** Resend domain verified; `RESEND_API_KEY` and `TURNSTILE_SECRET_KEY` added in Cloudflare Pages for Production and Preview; send a real test from the preview URL and check it arrives (and isn't in spam).
- **Privacy policy:** draft. Confirm the retention periods (12 months for enquiries that don't go ahead, 6 years for customers) and add the ICO registration number once registered. Cookies and analytics section to be completed with the consent banner.
- **Terms** are still the interim version. Full website and quote terms to follow.
- **Google Workspace email authentication:** the domain has no SPF or DKIM record for Google, so emails you send from contact@ are more likely to go to spam. Add an SPF TXT record (`v=spf1 include:_spf.google.com ~all`) and turn on DKIM in Google Admin.
- **Optional:** automatic confirmation email to the customer after they submit the form.
