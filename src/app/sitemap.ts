import type { MetadataRoute } from "next";

const base = "https://bnkatelier.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/inquiry`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];
}
