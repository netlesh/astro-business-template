import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: "https://cemkaan.com",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap({}),
  ],
});
