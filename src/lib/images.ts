// Drop-in photos: save an image as src/assets/photos/<folder>/<name>.jpg (or .png/.webp) and the page
// picks it up automatically on the next build. See IMAGES.md for the list of names and sizes.
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/{services,pages}/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

export const dropInPhoto = (folder: 'services' | 'pages', name: string): ImageMetadata | undefined => {
  const wanted = `${folder}/${name}`.toLowerCase();
  const hit = Object.entries(files).find(([path]) => {
    const rel = path.split('/assets/photos/')[1] ?? '';
    return rel.replace(/\.[^.]+$/, '').toLowerCase() === wanted;
  });
  return hit?.[1].default;
};
