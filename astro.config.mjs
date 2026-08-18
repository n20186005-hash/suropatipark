/**
 * Taman Suropati build configuration.
 * The production URL is intentionally configured only through Astro's `site` field.
 */
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Set the final production domain only here, for example: new URL("https://taman-suropati.id").
// Keep this undefined while the domain is not yet assigned; the site will still build without placeholders.
const site = undefined;

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
