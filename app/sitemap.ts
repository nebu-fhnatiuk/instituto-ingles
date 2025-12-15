// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.bootup.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#cursos`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#planes`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/#faq`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];
}
