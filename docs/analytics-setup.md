# Setting up Google Analytics (GA4) and Google Tag Manager

The website is already prepared. Until a GTM ID is added, no Google code loads, no cookie banner shows and the privacy policy says no analytics is used. Adding the ID switches all three on together.

How it works on the site:

- Google Consent Mode v2 defaults are set to "denied" on every page.
- The cookie banner offers **Accept all**, **Reject all** and **Manage**. "Cookie settings" in the footer reopens it.
- GTM is only loaded after someone allows analytics ("basic" consent mode). If they later withdraw, GA cookies are deleted.
- The site pushes these events to the `dataLayer` (no personal data):
  - `quote_start`, with `form_name: "quote"`, when someone first interacts with the quote form
  - `generate_lead`, with `form_name`, `property_type`, `interests` and `photo_count`, when a quote request is sent
  - `consent_update`, with `analytics_consent: "granted"` or `"denied"`

## 1. Create the GA4 property

1. Go to **analytics.google.com** and sign in with the business Google account.
2. Go to **Admin** → **Create** → **Property**. Name it `Eclipse Shield website`, set the time zone to **United Kingdom** and the currency to **GBP**.
3. Under **Data streams**, choose **Web**, enter `https://eclipseshield.co.uk` and name it `Website`.
4. Copy the **Measurement ID** (`G-XXXXXXXXXX`).
5. In the stream's **Enhanced measurement** settings, turn **Form interactions** off. The site sends its own quote events, and this setting would count them twice.
6. Go to **Admin** → **Data collection and modification** → **Data retention**, and set **14 months**.
7. Go to **Admin** → **Data collection**, and leave **Google signals** off. The site doesn't ask for advertising consent.

## 2. Create the GTM container

1. Go to **tagmanager.google.com** → **Create account**. Account: `Eclipse Shield`. Container: `eclipseshield.co.uk`. Target platform: **Web**.
2. Copy the container ID (`GTM-XXXXXXX`). Close the install snippet window, because the site loads GTM itself.

## 3. Add the tags in GTM

1. **Google tag (GA4):** go to **Tags** → **New** → **Google Tag**.
   - Tag ID: your `G-XXXXXXXXXX`
   - Trigger: **Initialization - All Pages**
2. **Quote started:** go to **Tags** → **New** → **Google Analytics: GA4 Event**.
   - Measurement ID: your `G-` ID. Event name: `quote_start`.
   - Trigger: **New** → **Custom Event**, event name `quote_start`.
3. **Lead:** go to **Tags** → **New** → **Google Analytics: GA4 Event**.
   - Event name: `generate_lead`.
   - Event parameters: `property_type` = `{{DLV - property_type}}`, `interests` = `{{DLV - interests}}`, `photo_count` = `{{DLV - photo_count}}`.
   - To create those three variables: **Variables** → **New** → **Data Layer Variable**, with the names `property_type`, `interests` and `photo_count`.
   - Trigger: **Custom Event**, event name `generate_lead`.
4. Click **Submit** → **Publish**.

## 4. Add the GTM ID to the website

Use either option:

- **In the code** (preferred, since the ID is public): set `gtmId: 'GTM-XXXXXXX'` in `src/config/site.ts` and merge a pull request.
- **In Cloudflare:** go to **Workers & Pages** → **eclipseshield** → **Settings** → **Variables and secrets**, and add a **Text** variable `PUBLIC_GTM_ID` for Production and Preview. Then redeploy.

## 5. Check it works

1. Open the preview URL in a private window. The cookie banner should appear.
2. In GTM, click **Preview** and enter the preview URL. Accept cookies in the banner, start the quote form and send a test request.
3. Tag Assistant should show `quote_start` and `generate_lead` firing.
4. In GA4, check **Reports** → **Realtime** for your visit.
5. In GA4, go to **Admin** → **Events**, wait for `generate_lead` to appear (this can take up to a day), then mark it as a **key event**.

## Testing the banner without GTM

Add `?cookie-demo` to any page URL to show the banner. Nothing is loaded in demo mode.
