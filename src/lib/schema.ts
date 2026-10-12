// Helpers that build schema.org JSON-LD objects for BaseLayout's `schema` prop.
import { site } from '../config/site';
import type { Faq, ServiceContent } from '../data/services';

const abs = (path: string) => new URL(path, site.url).href;
const businessRef = { '@id': `${site.url}/#business` };

export const breadcrumbSchema = (items: { href: string; label: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.label,
    item: abs(item.href),
  })),
});

export const faqSchema = (faqs: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const serviceSchema = (s: ServiceContent) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.title,
  serviceType: s.title,
  description: s.metaDescription,
  url: abs(`/services/${s.slug}/`),
  provider: businessRef,
  areaServed: site.areasServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
});
