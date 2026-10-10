// Single source of truth for business details used across the site.
// Anything set to null is hidden until it is filled in.

export const site = {
  name: 'Eclipse Shield',
  legalName: 'Eclipse Shield Ltd',
  url: 'https://eclipseshield.co.uk',
  email: 'contact@eclipseshield.co.uk',
  // TODO: add the business phone number, e.g. '07123 456789'. Call links stay hidden while null.
  phone: null as string | null,
  // WhatsApp is switched off for now. Set to an international number without '+' (e.g. '447123456789') to enable.
  whatsapp: null as string | null,
  base: 'Bromborough',
  region: 'Wirral, Merseyside',
  serviceAreaLine:
    'Based in Bromborough, covering Cheshire, Merseyside and Flintshire, and further afield for larger projects',
  areasServed: ['Cheshire', 'Merseyside', 'Flintshire'],
  hours: 'Open 7 days a week',
  filmBrand: '3M',
  freeSurveyRadiusMiles: 20,
} as const;

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '').replace(/^0/, '+44')}`;

// Points at home page sections for now; switches to the dedicated pages as they are built.
export const nav = [
  { href: '/#services', label: 'Services' },
  { href: '/#who', label: 'Homes and businesses' },
  { href: '/#how', label: 'How it works' },
  { href: '/#areas', label: 'Areas' },
  { href: '/#faq', label: 'FAQ' },
];
