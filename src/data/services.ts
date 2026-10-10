// Services offered. `slug` matches the service page path planned for /services/<slug>/.
export const services = [
  {
    slug: 'privacy-window-film',
    icon: 'eye-off',
    title: 'Privacy and one-way mirror film',
    short:
      'Stop people seeing in while keeping your light. Choose a mirrored daytime film, frosted film, or a mix of both.',
  },
  {
    slug: 'solar-control-window-film',
    icon: 'sun',
    title: 'Solar and heat control film',
    short:
      'Cut heat build-up and glare in sunny rooms, glass extensions, conservatories and offices with south-facing glass.',
  },
  {
    slug: 'frosted-decorative-window-film',
    icon: 'frost',
    title: 'Frosted and decorative film',
    short:
      'Frosted glass looks for bathrooms, front doors, office partitions and meeting rooms, plus manifestation strips and patterns.',
  },
  {
    slug: 'uv-protection-window-film',
    icon: 'uv',
    title: 'UV and fade protection',
    short:
      'Help protect floors, furniture, artwork and shop stock from fading caused by ultraviolet light through the glass.',
  },
  {
    slug: 'safety-security-window-film',
    icon: 'shield',
    title: 'Safety and security film',
    short:
      'Holds broken glass together if a pane is smashed, helping reduce injury risk and slowing down break-in attempts.',
  },
  {
    slug: 'anti-graffiti-film',
    icon: 'spray',
    title: 'Anti-graffiti film',
    short:
      'A clear sacrificial layer for shopfronts and public-facing glass. If it gets scratched or tagged, the film is replaced, not the glass.',
  },
] as const;

export type Service = (typeof services)[number];
