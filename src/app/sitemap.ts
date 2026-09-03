import type { MetadataRoute } from "next";
import { appearances } from "@/lib/data/appearances";

const siteUrl = "https://dyutiparruck.example.com";

const staticRoutes = [
  "",
  "/about",
  "/expertise",
  "/career-journey",
  "/public-figure",
  "/media-coverage",
  "/insights",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const appearanceRoutes = appearances.map((a) => ({
    url: `${siteUrl}/public-figure/${a.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...appearanceRoutes];
}
