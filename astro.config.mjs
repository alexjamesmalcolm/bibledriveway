import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import XMLLoader from "./xml-loader";

import nodejs from "@astrojs/node";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  output: "hybrid",
  // adapter: nodejs({ mode: "standalone" }),
  adapter: cloudflare(),
  vite: { plugins: [XMLLoader({ ignoreAttributes: false })] },
});
