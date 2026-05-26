import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { SITE_URL } from "@/data/widia-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const cityUrls = cities.map((city) => ({
    url: `${SITE_URL}/widia-${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: city.isCapoluogo ? 0.9 : 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...cityUrls,
  ];
}
