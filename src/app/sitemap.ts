import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pdf-side-by-side-merger.vercel.app';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/compare-pdfs-side-by-side`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}

