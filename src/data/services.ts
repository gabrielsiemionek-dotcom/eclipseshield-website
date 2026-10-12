// Services offered. Each entry drives a card on the home and services pages
// and a full page at /services/<slug>/.
//
// Copy rule: only say what is true for every job. No invented stats, claims or reviews.

export type Faq = { q: string; a: string };

export type ServiceContent = {
  slug: string;
  icon: 'eye-off' | 'sun' | 'frost' | 'uv' | 'shield' | 'spray';
  visual: 'privacy' | 'solar' | 'frosted' | 'uv' | 'safety' | 'graffiti';
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** Alt text for the hero photo dropped in at src/assets/photos/services/<slug>.jpg (see IMAGES.md). */
  photoAlt: string;
  benefits: { title: string; text: string }[];
  homes: string[];
  businesses: string[];
  options: { title: string; text: string }[];
  goodToKnow: string[];
  faqs: Faq[];
  related: string[];
};

export const services: ServiceContent[] = [
  {
    slug: 'privacy-window-film',
    icon: 'eye-off',
    visual: 'privacy',
    title: 'Privacy and one-way mirror film',
    short:
      'Stop people seeing in while keeping your light. Choose a mirrored daytime film, frosted film, or a mix of both.',
    metaTitle: 'Privacy and One-Way Mirror Window Film',
    metaDescription:
      'Privacy window film and one-way mirror film for homes and businesses in Cheshire, Merseyside and Flintshire. Stop people seeing in without losing your light. Free quotes.',
    h1: 'Privacy window film and one-way mirror film',
    intro:
      'Overlooked by neighbours, a busy street or the office opposite? Privacy film stops people seeing in while still letting daylight through, without blinds or net curtains.',
    photoAlt: 'A ground floor window with one-way mirror film, reflecting the street outside during the day',
    benefits: [
      {
        title: 'Privacy without losing light',
        text: 'Film keeps rooms bright, unlike blinds that have to be closed to give you privacy.',
      },
      {
        title: 'Keep your view out',
        text: 'Mirror films let you see out during the day while people outside see a reflection.',
      },
      {
        title: 'Day and night options',
        text: 'Frosted and opaque films give privacy around the clock, whatever the lighting.',
      },
      {
        title: 'Neat and removable',
        text: 'Film sits flat on the glass, needs no fixings and can be removed professionally later.',
      },
    ],
    homes: [
      'Bathrooms, en suites and toilets',
      'Front doors, side panels and porches',
      'Ground floor rooms facing the street',
      'Glass rooms, conservatories and bi-fold doors overlooked by neighbours',
    ],
    businesses: [
      'Ground floor offices and treatment rooms',
      'Meeting rooms and private offices',
      'Shop back rooms and staff areas',
      'Glass partitions and doors',
    ],
    options: [
      {
        title: 'One-way mirror (reflective) film',
        text: 'Gives daytime privacy and a clear view out, and also reduces heat and glare. Works when it is brighter outside than in.',
      },
      {
        title: 'Frosted film',
        text: 'Privacy day and night with a soft, even light. You lose the view through that part of the glass.',
      },
      {
        title: 'Part-frosted or graduated designs',
        text: 'Frost only the lower part of a window, or use a fade or band, so you keep a view above eye level.',
      },
      {
        title: 'Blackout and whiteout film',
        text: 'Fully opaque film for total privacy or for blocking out light completely.',
      },
    ],
    goodToKnow: [
      'Mirror film is not private at night. When it is darker outside and your lights are on, the effect reverses and people can see in. If you need privacy after dark, choose frosted film, a combination of films, or use blinds at night.',
      'Mirror film looks reflective from outside. Check whether you live in a conservation area or have a lease or management company that controls the look of your windows.',
      'Some films are not suitable for every type of glass. We check your glass first and recommend a compatible film.',
    ],
    faqs: [
      {
        q: 'Can I see out through privacy film?',
        a: 'With one-way mirror film, yes: during the day you see out and people outside see a reflection. With frosted film you get light but no clear view through the frosted area.',
      },
      {
        q: 'Which privacy film is best for a bathroom?',
        a: 'Frosted film is usually best for bathrooms because it gives privacy day and night. Mirror film is not suitable because the effect reverses when the light is on in the evening.',
      },
      {
        q: 'Can privacy film be fitted on a rented property?',
        a: 'Yes. Film can be removed professionally when you move out. Check with your landlord first, especially for mirror films that change how the windows look from outside.',
      },
    ],
    related: ['frosted-decorative-window-film', 'solar-control-window-film', 'safety-security-window-film'],
  },
  {
    slug: 'solar-control-window-film',
    icon: 'sun',
    visual: 'solar',
    title: 'Solar and heat control film',
    short:
      'Cut heat build-up and glare in sunny rooms, glass extensions, conservatories and offices with south-facing glass.',
    metaTitle: 'Solar Control and Heat Reduction Window Film',
    metaDescription:
      'Solar control window film to cut heat and glare in conservatories, glass rooms, homes and offices. 3M film fitted across Cheshire, Merseyside and Flintshire. Free quotes.',
    h1: 'Solar control window film for heat and glare',
    intro:
      'Rooms with a lot of glass can get uncomfortably hot and bright on sunny days. Solar control film reduces the heat and glare coming through the glass, so the room is more comfortable to use.',
    photoAlt: 'A bright glass extension with solar control film on the windows and roof glass',
    benefits: [
      {
        title: 'Cooler rooms',
        text: 'Film rejects part of the sun’s heat before it builds up in the room.',
      },
      {
        title: 'Less glare',
        text: 'Easier on the eyes and better for TVs, computer screens and working at a desk.',
      },
      {
        title: 'Less fading',
        text: 'Solar films also block most UV, which helps slow fading of floors and furniture.',
      },
      {
        title: 'Keep your view',
        text: 'Many solar films are light enough that the view out stays clear.',
      },
    ],
    homes: [
      'Conservatories and glass garden rooms',
      'South and west-facing living rooms',
      'Loft rooms, roof lights and skylights',
      'Bi-fold and sliding doors',
    ],
    businesses: [
      'Offices with large or south-facing windows',
      'Shopfronts and window displays',
      'Reception areas and atriums',
      'Glass roofs and walkways',
    ],
    options: [
      {
        title: 'Reflective solar film',
        text: 'Rejects the most heat and gives daytime privacy, with a mirrored look from outside.',
      },
      {
        title: 'Neutral or low-reflective film',
        text: 'Less mirrored, so the glass looks closer to normal while still cutting heat and glare.',
      },
      {
        title: 'Clear spectrally selective film',
        text: 'Designed to cut heat with very little change to the look of the glass or the light in the room.',
      },
      {
        title: 'Roof and skylight film',
        text: 'For glass roofs and roof lights, where most of the heat comes in.',
      },
    ],
    goodToKnow: [
      'How much cooler a room gets depends on the film, the glass and how the room faces the sun. We explain the realistic difference for your room rather than promising a number.',
      'Darker and more reflective films reject more heat, but also reduce more daylight. We help you balance comfort, light and looks.',
      'Some films can increase heat stress in certain glass, particularly some double-glazed and laminated units. We check the glass first and recommend a film that is compatible with it.',
      'Glass roofs and skylights can be hard to reach. Tell us about access when you ask for a quote so we can plan for it.',
    ],
    faqs: [
      {
        q: 'Does solar film make rooms darker?',
        a: 'Some do more than others. Light, neutral and clear films keep rooms bright, while darker and reflective films cut more heat but also more light. Ask us about seeing samples before you decide.',
      },
      {
        q: 'Will solar film help in winter?',
        a: 'Solar film is mainly for reducing heat and glare in sunny weather. It will not make a big difference to heat loss in winter, so we would not sell it to you as insulation.',
      },
      {
        q: 'Can solar film go on a conservatory roof?',
        a: 'Often, yes. It depends on the roof material. Film is for glass, not polycarbonate sheets, so we check what your roof is made of first.',
      },
    ],
    related: ['uv-protection-window-film', 'privacy-window-film', 'frosted-decorative-window-film'],
  },
  {
    slug: 'frosted-decorative-window-film',
    icon: 'frost',
    visual: 'frosted',
    title: 'Frosted and decorative film',
    short:
      'Frosted glass looks for bathrooms, front doors, office partitions and meeting rooms, plus manifestation strips and patterns.',
    metaTitle: 'Frosted and Decorative Window Film for Homes and Offices',
    metaDescription:
      'Frosted window film, decorative patterns and office manifestation for glass doors and partitions. Fitted across Cheshire, Merseyside and Flintshire. Free quotes.',
    h1: 'Frosted and decorative window film',
    intro:
      'Frosted film gives you the look of etched or sandblasted glass for a fraction of the cost of replacing it. It adds privacy, lets light through, and can be cut into bands, patterns and designs.',
    photoAlt: 'An office meeting room with frosted film bands on its glass walls',
    benefits: [
      {
        title: 'Privacy day and night',
        text: 'Unlike mirror film, frosted film works whatever the lighting inside and out.',
      },
      {
        title: 'Light stays in',
        text: 'Diffuses daylight evenly, so rooms stay bright.',
      },
      {
        title: 'Cheaper than new glass',
        text: 'Gets an etched glass look without replacing the panes.',
      },
      {
        title: 'Easy to change',
        text: 'Can be removed later if your layout or tenants change.',
      },
    ],
    homes: [
      'Bathroom and en suite windows',
      'Front doors, side panels and glazed internal doors',
      'Landing and staircase windows',
      'Shower screens and glass balustrades',
    ],
    businesses: [
      'Meeting rooms and private offices',
      'Glass partitions and doors',
      'Reception and waiting areas',
      'Clinics, salons and treatment rooms',
    ],
    options: [
      {
        title: 'Full frost',
        text: 'Covers the whole pane for maximum privacy.',
      },
      {
        title: 'Bands and part frosting',
        text: 'Frost the lower part or a band at eye level, so people can still see whether a room is in use.',
      },
      {
        title: 'Manifestation',
        text: 'Strips, dots or patterns on glass doors and partitions so people notice the glass and don’t walk into it.',
      },
      {
        title: 'Patterns, gradients and custom designs',
        text: 'Decorative patterns, fades and cut-out designs. Tell us what you have in mind and we will tell you what is possible.',
      },
    ],
    goodToKnow: [
      'Building regulations and workplace rules expect large areas of glass in doors and partitions to be clearly marked so people can see it. Manifestation is usually placed in two bands, roughly at waist height and at eye level.',
      'Frosted film blocks the view through the frosted area. Part frosting is a good compromise if you want to keep some view.',
      'Frosted film is usually fitted on the inside of the glass. Textured or patterned glass may need a different approach, so let us know what you have.',
    ],
    faqs: [
      {
        q: 'Is frosted film private at night?',
        a: 'Yes. Frosted film gives privacy day and night, though people may see shapes and shadows when a room is lit and they are close to the glass.',
      },
      {
        q: 'Can you put our logo on the glass?',
        a: 'Tell us about your design and send us the artwork. We will let you know what is possible and include it in your quote.',
      },
      {
        q: 'Do glass partitions need manifestation?',
        a: 'Large glass doors and partitions where people could walk into the glass should be made clearly visible. Manifestation film is a simple way to do this, and frosted bands can add privacy at the same time.',
      },
    ],
    related: ['privacy-window-film', 'safety-security-window-film', 'solar-control-window-film'],
  },
  {
    slug: 'uv-protection-window-film',
    icon: 'uv',
    visual: 'uv',
    title: 'UV and fade protection',
    short:
      'Help protect floors, furniture, artwork and shop stock from fading caused by ultraviolet light through the glass.',
    metaTitle: 'UV Protection Window Film to Reduce Fading',
    metaDescription:
      'UV window film to help protect floors, furniture, artwork and shop displays from fading. Clear 3M films fitted across Cheshire, Merseyside and Flintshire. Free quotes.',
    h1: 'UV window film to help reduce fading',
    intro:
      'Sunlight through windows fades wooden floors, fabrics, artwork and products on display. UV film blocks almost all of the ultraviolet light that comes through the glass, usually with little or no change to how the window looks.',
    photoAlt: 'A sunlit room with wooden floor and sofa next to large windows fitted with clear UV film',
    benefits: [
      {
        title: 'Blocks most UV',
        text: 'Quality window films block the large majority of UV light coming through the glass.',
      },
      {
        title: 'Clear options',
        text: 'Clear UV films barely change the look of the glass or the light in the room.',
      },
      {
        title: 'Protects what’s inside',
        text: 'Helps slow fading of floors, furniture, curtains, artwork and stock.',
      },
      {
        title: 'Can combine with other films',
        text: 'Solar, privacy and safety films also block UV, so one film can do more than one job.',
      },
    ],
    homes: [
      'Rooms with wooden or laminate floors',
      'Living rooms with sofas, rugs and curtains in the sun',
      'Conservatories and glass rooms',
      'Rooms with artwork and photographs',
    ],
    businesses: [
      'Shop windows and displays',
      'Galleries, framers and showrooms',
      'Furniture, fabric and clothing stores',
      'Offices with sun-facing reception areas',
    ],
    options: [
      {
        title: 'Clear UV film',
        text: 'For when you want protection with no visible change to the glass.',
      },
      {
        title: 'Solar control film',
        text: 'Blocks UV and also reduces heat and glare, which also play a part in fading.',
      },
    ],
    goodToKnow: [
      'UV is a major cause of fading, but not the only one. Visible light and heat also contribute, so film reduces fading rather than stopping it completely.',
      'Film blocks UV coming through the glass, so it helps protect what is inside. It does not change the glass itself.',
    ],
    faqs: [
      {
        q: 'Will I notice UV film on my windows?',
        a: 'Clear UV films are designed to be very hard to notice once fitted. Ask us about seeing a sample before you decide.',
      },
      {
        q: 'Does UV film stop fading completely?',
        a: 'No film can stop fading completely, because visible light and heat also cause it. Blocking UV removes one of the biggest causes, so fading slows down.',
      },
    ],
    related: ['solar-control-window-film', 'privacy-window-film', 'safety-security-window-film'],
  },
  {
    slug: 'safety-security-window-film',
    icon: 'shield',
    visual: 'safety',
    title: 'Safety and security film',
    short:
      'Holds broken glass together if a pane is smashed, helping reduce injury risk and slowing down break-in attempts.',
    metaTitle: 'Safety and Security Window Film',
    metaDescription:
      'Safety and security window film that holds broken glass together, for homes, shops and offices across Cheshire, Merseyside and Flintshire. Free quotes.',
    h1: 'Safety and security window film',
    intro:
      'If glass breaks, safety film helps hold the pieces together instead of letting sharp shards fall or fly out. Thicker security films also make it harder and slower to get through a smashed window.',
    photoAlt: 'A cracked glass pane held together in one piece by safety film',
    benefits: [
      {
        title: 'Holds broken glass together',
        text: 'Helps reduce the risk of injury from falling or flying glass.',
      },
      {
        title: 'Slows down break-ins',
        text: 'Thicker films make it harder to clear a hole in smashed glass.',
      },
      {
        title: 'Upgrade existing glass',
        text: 'Can be a cost-effective option compared with replacing glass, where film is suitable.',
      },
      {
        title: 'Clear or combined',
        text: 'Available clear, or combined with solar control or privacy.',
      },
    ],
    homes: [
      'Glass doors and large low-level panes',
      'Rooms where children play',
      'Ground floor windows and back doors',
      'Glass balustrades and older glazing',
    ],
    businesses: [
      'Shopfronts and ground floor windows',
      'Offices, schools and public buildings',
      'Glass doors and partitions in busy areas',
      'Areas where staff or visitors could be hurt by breaking glass',
    ],
    options: [
      {
        title: 'Safety film',
        text: 'Clear film that helps hold glass together if it breaks.',
      },
      {
        title: 'Security film',
        text: 'Thicker film designed to slow down attempts to break through the glass.',
      },
      {
        title: 'Combined films',
        text: 'Safety film with solar control or privacy in one layer.',
      },
    ],
    goodToKnow: [
      'Security film makes glass harder to get through, but no film makes glass unbreakable.',
      'Whether film can bring existing glass up to a particular safety standard depends on the glass, the frame and how the film is fitted. We will tell you honestly what film can and can’t do for your windows.',
      'For the best performance on some jobs, films are fitted with an edge attachment system that fixes the film to the frame. We will tell you if your job would benefit from it.',
    ],
    faqs: [
      {
        q: 'Does security film stop burglars?',
        a: 'It does not make glass unbreakable, but it holds broken glass together and makes it much slower and noisier to get through a smashed window, which can put intruders off.',
      },
      {
        q: 'Can I see through safety film?',
        a: 'Yes. Most safety and security films are clear, so the window looks the same as before.',
      },
    ],
    related: ['anti-graffiti-film', 'privacy-window-film', 'solar-control-window-film'],
  },
  {
    slug: 'anti-graffiti-film',
    icon: 'spray',
    visual: 'graffiti',
    title: 'Anti-graffiti film',
    short:
      'A clear sacrificial layer for shopfronts and public-facing glass. If it gets scratched or tagged, the film is replaced, not the glass.',
    metaTitle: 'Anti-Graffiti Window Film for Shopfronts',
    metaDescription:
      'Clear anti-graffiti film protects shopfronts and public glass from scratching, etching and paint. Replace the film, not the glass. Cheshire, Merseyside and Flintshire.',
    h1: 'Anti-graffiti window film',
    intro:
      'Scratched or etched graffiti on glass is hard to remove and often means replacing the pane. Anti-graffiti film is a clear protective layer: if it gets damaged, we replace the film instead of the glass.',
    photoAlt: 'A shopfront window protected with clear anti-graffiti film',
    benefits: [
      {
        title: 'Protects the glass',
        text: 'Takes the scratches, etching and paint instead of the glass underneath.',
      },
      {
        title: 'Replace film, not glass',
        text: 'Damaged film is peeled off and replaced, usually far cheaper than new glass.',
      },
      {
        title: 'Clear finish',
        text: 'Your windows look the same, so displays and signage stay visible.',
      },
      {
        title: 'Quick to replace',
        text: 'Getting the shopfront looking right again is a quick job.',
      },
    ],
    homes: ['Glass front doors and panels facing the street', 'Glass balustrades and screens in shared areas'],
    businesses: [
      'Shopfronts and display windows',
      'Entrances and other public-facing glass',
      'Glass lifts, stairwells and lobbies',
      'Mirrors and glass in public toilets',
    ],
    options: [
      {
        title: 'Clear anti-graffiti film',
        text: 'A tough clear film fitted on the side of the glass that gets vandalised, usually the outside.',
      },
      {
        title: 'Combined with other films',
        text: 'Use with privacy, solar or safety film on the inside of the same glass.',
      },
    ],
    goodToKnow: [
      'Anti-graffiti film is sacrificial: it is designed to be replaced when it is damaged. Factor occasional replacement into your plans.',
      'Paint and marker can usually be cleaned off the film. Deep scratches and etching mean replacing that piece of film.',
    ],
    faqs: [
      {
        q: 'How is anti-graffiti film different from security film?',
        a: 'Anti-graffiti film protects the surface of the glass from scratching, etching and paint. Security film is about holding glass together if it is broken. Some sites use both.',
      },
      {
        q: 'Can you replace damaged film quickly?',
        a: 'Replacing film is a much quicker job than replacing glass. Get in touch with photos of the damage and we will arrange it.',
      },
    ],
    related: ['safety-security-window-film', 'uv-protection-window-film', 'privacy-window-film'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const serviceHref = (slug: string) => `/services/${slug}/`;
