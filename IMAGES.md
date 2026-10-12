# Image brief

The pages that still show a drawing of the film effect are ready for real images. Save an image with the exact file name below into the folder shown, open a pull request (or send it to Claude), and the page uses it automatically. The site converts every photo to fast AVIF and WebP in several sizes, so you only need one good original.

## General rules

- **Size:** at least **1600 px wide**. JPG at about 80 to 85% quality, under 3 MB, colour profile sRGB (Canva's default).
- **Shape:** landscape **4:3** (1600 × 1200) unless the list says otherwise.
- **Honest:** only label a photo as "our work" if it really is. AI or stock images are fine as illustrations, but don't add captions or text that suggest they show an Eclipse Shield job. Replace them with real job photos as soon as you have them.
- **Privacy for real job photos:** get the customer's OK. Avoid faces, house numbers, car number plates and anything personal inside the home.
- **Location data:** phone photos contain hidden GPS location, and the code repository is public. Export real photos through Canva (which removes it), or send them to Claude to clean up before they go in the repo.
- **No text in images:** headings and buttons are added by the website, so text baked into an image is hard to read on a phone and is invisible to Google.

## Images to make

| # | Save as | Shape and size | Subject |
|---|---|---|---|
| 1 | `src/assets/photos/services/privacy-window-film.jpg` | 4:3, 1600 × 1200 | Outside view of a ground floor window of a UK home in daylight. The glass is mirror-like and reflects the street and trees, and you can't see in. |
| 2 | `src/assets/photos/services/frosted-decorative-window-film.jpg` | 4:3, 1600 × 1200 | A modern office meeting room with glass walls and a frosted band at eye level. Any people behind it are blurred shapes. |
| 3 | `src/assets/photos/services/uv-protection-window-film.jpg` | 4:3, 1600 × 1200 | A sunlit living room with a wooden floor and a sofa next to large clear windows, with warm afternoon light. |
| 4 | `src/assets/photos/services/safety-security-window-film.jpg` | 4:3, 1600 × 1200 | Close-up of a glass pane with an impact crack (a star shape) where the glass stays in one piece. Clean and calm, with no blood and no break-in scene. |
| 5 | `src/assets/photos/services/anti-graffiti-film.jpg` | 4:3, 1600 × 1200 | A clean, generic high-street shopfront window (no real brand names), shot straight on in daylight. |
| 6 | `src/assets/photos/pages/businesses.jpg` | 4:3, 1600 × 1200 | A bright modern office with glass meeting rooms and frosted film strips on the glass walls. |
| 7 | `src/assets/photos/services/solar-control-window-film.jpg` | 4:3, 1600 × 1200 | *Optional:* this page already uses your glass room photo. Replace it only with a better real photo of a conservatory, glass extension or roof glass with film fitted. |
| 8 | `public/og-default.jpg` | **1200 × 630** exactly | The image shown when the site is shared on WhatsApp, Facebook and similar. Black background, your logo on the left, and on the right in gold and white: "Window film for homes and businesses" and "Cheshire · Merseyside · Flintshire". Keep important content away from the edges. |
| 9 | `src/assets/logo/` (new) | SVG, or transparent PNG 2000 px wide | A **vector (SVG)** or high-resolution transparent version of your final logo, for print, signs and future pages. The website header uses a hand-drawn SVG copy for now. |

### Ready-made AI prompts (for items 1 to 6)

Add this ending to every prompt: *"photorealistic, natural daylight, shot on a full-frame camera, 4:3 landscape, no text, no logos, no watermarks, British setting"*.

1. *"Exterior of a ground floor living room window on a red-brick UK semi-detached house, the glass has one-way mirror window film and reflects the street, trees and sky, you cannot see inside"*
2. *"Modern UK office meeting room with glass walls, a frosted window film band across the glass at eye level, blurred silhouettes of people behind the frosting, clean minimal interior"*
3. *"Sunlit living room in a modern UK home, light oak wooden floor, grey sofa, large floor-to-ceiling windows, warm afternoon sunlight, calm and inviting"*
4. *"Close-up of a large glass door pane with a single impact crack radiating outwards, the glass is still held together in one piece by clear safety film, clean, neutral background"*
5. *"Clean modern independent shopfront on a UK high street, large display window, neutral signage without readable text, shot straight on, overcast daylight"*
6. *"Bright modern open-plan office in the UK, glass-walled meeting rooms with frosted window film strips, plants, desks, no people's faces visible"*

In **Canva**, you can also search the stock library for: "one way mirror window", "frosted glass office", "sunny living room wooden floor", "cracked safety glass", "shop front window", "glass meeting room".

## Real photos worth collecting (most valuable)

Real photos of your own work persuade customers far more than stock or AI images. On every job, try to take:

- **Before and after pairs** from the same spot and angle, in daylight, landscape.
- **A close-up of the fitting,** such as the squeegee on the glass (hands only is fine).
- **The finished result from outside,** showing the privacy or mirror effect, and **from inside,** showing the view and light.
- **Your van or branded workwear,** once you have them.

Send these to Claude and they can go into the service pages, a "Recent work" section, or before-and-after sliders.

## Images already in use

| Where | File | Notes |
|---|---|---|
| Home hero | `src/assets/photos/fitting-glass-room.jpg` | Real job photo (fitter at work). |
| Home "Why us" and Homes hero | `src/assets/photos/glass-room-sea-view.jpg` | Real job photo. |
| Solar control page | `src/assets/photos/glass-room-terrace.jpg` | Real job photo. |
| Touch icon and social image | `public/apple-touch-icon.png`, `public/og-default.jpg` | Made from your logo. Item 8 above improves the social image. |
