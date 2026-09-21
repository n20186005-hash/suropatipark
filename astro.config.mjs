/**
 * Taman Suropati build configuration.
 * The production URL is intentionally configured only through Astro's `site` field.
 */
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Production domain. Set here so Astro emits canonical URLs, absolute Open Graph URLs,
// hreflang basis, and the XML sitemap (verified against Google Search Console: suropatipark.com).
const site = "https://suropatipark.com";

export default defineConfig({
  site,
  output: "static",
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true
    }
  }
});
