// Quote form options. Shared by the form (src/components/QuoteForm.astro)
// and the Pages Function that emails the lead (functions/api/quote.ts).

export const propertyTypes = [
  { value: 'home', label: 'Home' },
  { value: 'retail', label: 'Shop or retail' },
  { value: 'office', label: 'Office' },
  { value: 'other-commercial', label: 'Other commercial' },
] as const;

export const interests = [
  { value: 'privacy', label: 'Privacy' },
  { value: 'heat-glare', label: 'Heat and glare reduction' },
  { value: 'frosted-decorative', label: 'Frosted or decorative' },
  { value: 'uv', label: 'UV / fade protection' },
  { value: 'safety-security', label: 'Security / safety film' },
  { value: 'anti-graffiti', label: 'Anti-graffiti' },
  { value: 'not-sure', label: 'Not sure yet' },
] as const;

// Lets service pages link to /quote/?service=<slug> with the right box pre-ticked.
export const interestForService: Record<string, string> = {
  'privacy-window-film': 'privacy',
  'solar-control-window-film': 'heat-glare',
  'frosted-decorative-window-film': 'frosted-decorative',
  'uv-protection-window-film': 'uv',
  'safety-security-window-film': 'safety-security',
  'anti-graffiti-film': 'anti-graffiti',
};

export const windowCounts = ['1', '2 to 3', '4 to 6', '7 to 10', '11 to 20', 'More than 20', 'Not sure'] as const;

export const windowTypes = [
  { value: 'standard', label: 'Standard windows' },
  { value: 'large', label: 'Large panes' },
  { value: 'shopfront', label: 'Shopfront' },
  { value: 'doors', label: 'Glass doors' },
  { value: 'roof', label: 'Skylights or roof glass' },
  { value: 'conservatory', label: 'Conservatory' },
  { value: 'partitions', label: 'Internal partitions' },
] as const;

export const positions = [
  { value: 'ground', label: 'Ground floor' },
  { value: 'upper', label: 'Upper floor (needs a ladder)' },
  { value: 'internal', label: 'Internal glass' },
] as const;

export const contactMethods = [
  { value: 'phone', label: 'Phone call' },
  { value: 'text', label: 'Text message' },
  { value: 'email', label: 'Email' },
] as const;

export const photoLimits = {
  maxFiles: 5,
  // After in-browser resizing photos are usually 200 to 600 KB.
  maxBytesEach: 8 * 1024 * 1024,
  maxBytesTotal: 20 * 1024 * 1024,
  resizeTo: 1600,
} as const;

export const labelFor = (list: readonly { value: string; label: string }[], value: string) =>
  list.find((o) => o.value === value)?.label ?? value;
