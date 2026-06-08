import type { MetadataRoute } from "next";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const baseUrl = "https://facedownrecoveryrentals.com";

const staticRoutes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/prices", priority: 0.9, changeFrequency: "weekly" },
  { path: "/equipment", priority: 0.9, changeFrequency: "weekly" },
  { path: "/vitrectomy-recovery", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.75, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
  { path: "/recovery-guides", priority: 0.7, changeFrequency: "weekly" },
  { path: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" },
];

function getRecoveryGuideArticleRoutes() {
  const guidesDir = join(process.cwd(), "app", "recovery-guides");

  return readdirSync(guidesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => `/recovery-guides/${entry.name}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const articleRoutes = getRecoveryGuideArticleRoutes().map((path) => ({
    path,
    priority: 0.65,
    changeFrequency: "monthly" as const,
  }));
  const routes = [...staticRoutes, ...articleRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
