// Area pages at /areas/<slug>/.
// Copy rule: describe the area and the jobs film suits there. Never claim past jobs, customers or numbers we can't back up.
import type { Faq } from './services';

export type Area = {
  slug: string;
  name: string;
  /** Short list of places for cards. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  towns: { group: string; places: string[] }[];
  jobs: { title: string; text: string; services: string[] }[];
  surveyNote: string;
  localNotes: { title: string; text: string }[];
  faqs: Faq[];
};

export const areas: Area[] = [
  {
    slug: 'merseyside',
    name: 'Merseyside',
    summary: 'The Wirral, Liverpool, Sefton, Knowsley and St Helens',
    metaTitle: 'Window Film and Tinting in Merseyside and the Wirral',
    metaDescription:
      'Window film fitters based in Bromborough on the Wirral. Privacy, solar, frosted, UV, safety and anti-graffiti film for homes and businesses across Merseyside and Liverpool.',
    h1: 'Window film in Merseyside and the Wirral',
    intro:
      'We’re based in Bromborough on the Wirral, so Merseyside is home turf. We fit window film for homes, shops and offices across the Wirral, Liverpool, Sefton, Knowsley and St Helens.',
    towns: [
      {
        group: 'Wirral',
        places: ['Bromborough', 'Bebington', 'Port Sunlight', 'Birkenhead', 'Wallasey', 'Moreton', 'Heswall', 'West Kirby', 'Hoylake', 'Eastham'],
      },
      { group: 'Liverpool', places: ['City centre', 'South Liverpool', 'North Liverpool', 'Liverpool suburbs'] },
      { group: 'Sefton', places: ['Southport', 'Formby', 'Crosby', 'Bootle', 'Maghull'] },
      { group: 'Knowsley and St Helens', places: ['Huyton', 'Prescot', 'Kirkby', 'St Helens'] },
    ],
    jobs: [
      {
        title: 'Sea-facing homes and glass rooms',
        text: 'Homes along the Wirral and Sefton coasts often have big windows facing the water. Low sun and glare off the sea can make rooms bright and hot. Solar control film cuts heat and glare while keeping the view.',
        services: ['solar-control-window-film', 'uv-protection-window-film'],
      },
      {
        title: 'Terraced streets and front rooms',
        text: 'Many Merseyside homes have front windows right on the pavement. Frosted or mirror privacy film stops passers-by looking in without blocking out the daylight.',
        services: ['privacy-window-film', 'frosted-decorative-window-film'],
      },
      {
        title: 'City centre apartments and offices',
        text: 'Glass-fronted apartments and offices in Liverpool can be overlooked by neighbouring buildings and get hot in the afternoon sun. Film adds privacy and cuts heat and screen glare.',
        services: ['privacy-window-film', 'solar-control-window-film', 'frosted-decorative-window-film'],
      },
      {
        title: 'Shopfronts and high streets',
        text: 'Safety, security and anti-graffiti film help protect shop glass, and UV film helps stop window displays fading.',
        services: ['safety-security-window-film', 'anti-graffiti-film', 'uv-protection-window-film'],
      },
    ],
    surveyNote:
      'Bromborough is our base, so most of the Wirral and Liverpool falls within our free 20-mile survey area. If you’re further out, we may ask for photos and rough measurements first so we can quote.',
    localNotes: [
      {
        title: 'Conservation areas and listed buildings',
        text: 'Merseyside has many conservation areas, from Port Sunlight village to parts of Liverpool city centre. If your property is listed or in a conservation area, check with your council before fitting reflective film that changes how the windows look from outside. Frosted and clear films are usually less noticeable.',
      },
      {
        title: 'Flats and managed buildings',
        text: 'Leaseholders and tenants in apartment blocks may need permission from the landlord or management company, especially for mirror film. We can send you the film details to help with that.',
      },
    ],
    faqs: [
      {
        q: 'Do you cover the whole of the Wirral?',
        a: 'Yes. We are based in Bromborough, and the whole of the Wirral is within our free survey area.',
      },
      {
        q: 'Do you work in Liverpool city centre?',
        a: 'Yes. We fit film for apartments, offices and shops in Liverpool. For city centre jobs, let us know about parking and access when you ask for a quote.',
      },
      {
        q: 'How quickly can you get to me?',
        a: 'We reply to enquiries the same day and work seven days a week. Send your details and photos through the quote form and we will suggest the earliest survey or fitting date.',
      },
    ],
  },
  {
    slug: 'cheshire',
    name: 'Cheshire',
    summary: 'Chester, Ellesmere Port, Neston, Frodsham, Runcorn, Widnes, Warrington, Northwich and beyond',
    metaTitle: 'Window Film and Tinting in Cheshire and Chester',
    metaDescription:
      'Window film for homes and businesses in Chester, Ellesmere Port, Neston, Warrington and across Cheshire. Privacy, solar, frosted, UV, safety and anti-graffiti film. Free quotes.',
    h1: 'Window film in Cheshire',
    intro:
      'From Chester and Ellesmere Port to Warrington and mid Cheshire, we fit window film for homes and businesses across the county. West Cheshire is only a short drive from our base in Bromborough.',
    towns: [
      { group: 'West Cheshire', places: ['Chester', 'Ellesmere Port', 'Neston', 'Parkgate', 'Little Sutton', 'Frodsham', 'Helsby', 'Tarporley'] },
      { group: 'Halton and Warrington', places: ['Runcorn', 'Widnes', 'Warrington'] },
      { group: 'Mid and East Cheshire', places: ['Northwich', 'Winsford', 'Middlewich', 'Knutsford', 'Crewe', 'Nantwich'] },
    ],
    jobs: [
      {
        title: 'Glass extensions and garden rooms',
        text: 'Kitchen extensions, orangeries and garden rooms with large glazed roofs and doors can overheat in summer. Solar film makes them usable on sunny days without losing the light.',
        services: ['solar-control-window-film', 'uv-protection-window-film'],
      },
      {
        title: 'Period homes and front doors',
        text: 'Decorative and frosted film gives older front doors, side panels and bathroom windows privacy and a traditional etched look, without replacing original glass.',
        services: ['frosted-decorative-window-film', 'privacy-window-film'],
      },
      {
        title: 'Offices and business parks',
        text: 'Office buildings with large glazed elevations can get bright and hot. Solar and frosted films reduce glare on screens and add privacy to meeting rooms and partitions.',
        services: ['solar-control-window-film', 'frosted-decorative-window-film'],
      },
      {
        title: 'Shops and town centres',
        text: 'UV film helps protect window displays from fading, and safety, security and anti-graffiti film help protect shop glass.',
        services: ['uv-protection-window-film', 'safety-security-window-film', 'anti-graffiti-film'],
      },
    ],
    surveyNote:
      'Chester, Ellesmere Port and Neston are close to our base and within our free 20-mile survey area. For towns further into Cheshire, we may ask for photos and measurements first, and larger projects can be quoted anywhere in the county.',
    localNotes: [
      {
        title: 'Chester’s historic centre',
        text: 'Much of central Chester is a conservation area with many listed buildings. If your home or shop is listed or in a conservation area, check with Cheshire West and Chester Council before fitting reflective film that changes how windows look from outside. Clear UV, safety and anti-graffiti films are much less visible.',
      },
      {
        title: 'Rural properties',
        text: 'For barn conversions, farmhouses and rural businesses, tell us about access, glass heights and any roof glazing when you ask for a quote so we can plan the right equipment.',
      },
    ],
    faqs: [
      {
        q: 'Do you cover Chester?',
        a: 'Yes. Chester is a short drive from our base in Bromborough and within our free survey area.',
      },
      {
        q: 'Do you cover East Cheshire, such as Crewe or Macclesfield?',
        a: 'For towns further from our base we may quote from photos and measurements first. Larger projects (around £1,000 and up) we can take on anywhere. Get in touch and we will confirm.',
      },
      {
        q: 'Can I fit film on a listed building?',
        a: 'Possibly, but check with your council first, as changes to the look of windows on listed buildings can need consent. Clear films are usually less of an issue than reflective ones.',
      },
    ],
  },
  {
    slug: 'flintshire',
    name: 'Flintshire',
    summary: 'Deeside, Connah’s Quay, Flint, Mold, Buckley, Holywell and surrounding areas',
    metaTitle: 'Window Film and Tinting in Flintshire and Deeside',
    metaDescription:
      'Window film for homes and businesses in Deeside, Flint, Mold, Buckley, Holywell and across Flintshire. Privacy, solar, frosted, UV, safety and anti-graffiti film. Free quotes.',
    h1: 'Window film in Flintshire and Deeside',
    intro:
      'Just over the border from Chester, we fit window film for homes, offices, shops and industrial units across Flintshire, from Deeside and Flint to Mold, Buckley and Holywell.',
    towns: [
      { group: 'Deeside', places: ['Connah’s Quay', 'Shotton', 'Queensferry', 'Sandycroft', 'Hawarden', 'Broughton', 'Saltney'] },
      { group: 'Flintshire towns', places: ['Flint', 'Mold', 'Buckley', 'Holywell', 'Bagillt', 'Northop', 'Caergwrle'] },
    ],
    jobs: [
      {
        title: 'Offices and industrial units',
        text: 'Offices, reception areas and units on Deeside’s business and industrial parks often have large glazed frontages. Solar film cuts heat and glare, frosted film adds privacy to offices and meeting rooms, and safety film helps make glass safer.',
        services: ['solar-control-window-film', 'frosted-decorative-window-film', 'safety-security-window-film'],
      },
      {
        title: 'New-build homes',
        text: 'Newer homes often have bi-fold doors, Juliet balconies and large windows that let in a lot of sun. Solar and privacy films make them more comfortable and less overlooked.',
        services: ['solar-control-window-film', 'privacy-window-film'],
      },
      {
        title: 'Bathrooms, doors and hallways',
        text: 'Frosted and decorative films for bathroom windows, front doors and glazed internal doors.',
        services: ['frosted-decorative-window-film'],
      },
      {
        title: 'Town centre shops',
        text: 'UV film for window displays and anti-graffiti or security film for shopfronts.',
        services: ['uv-protection-window-film', 'anti-graffiti-film', 'safety-security-window-film'],
      },
    ],
    surveyNote:
      'Deeside, Saltney, Hawarden and Broughton are within easy reach of our base in Bromborough. For the rest of Flintshire, we may ask for photos and measurements first, and larger projects can be quoted anywhere in the county.',
    localNotes: [
      {
        title: 'Wales has its own building regulations',
        text: 'If you need glass in doors or partitions marked or made safer for building regulations, the Welsh rules apply in Flintshire. We can talk you through how film fits in, and your building control body can confirm what is required.',
      },
      {
        title: 'Business sites',
        text: 'For industrial and business park sites, let us know about site access, inductions and working hours when you ask for a quote. We work seven days a week, so fitting can often be arranged around your shifts.',
      },
    ],
    faqs: [
      {
        q: 'Do you cover Deeside?',
        a: 'Yes. Deeside is close to our base in Bromborough and we cover homes and businesses across the area.',
      },
      {
        q: 'Do you cover Mold and Holywell?',
        a: 'Yes. For towns further from our base we may ask for photos and measurements first. Send your details through the quote form and we will let you know.',
      },
      {
        q: 'Can you fit film at our business outside working hours?',
        a: 'We work seven days a week, so we can often fit around shifts and opening hours. Tell us what suits you when you ask for a quote.',
      },
    ],
  },
];

export const areaHref = (slug: string) => `/areas/${slug}/`;
