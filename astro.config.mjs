import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import XMLLoader from "./xml-loader";
import nodejs from "@astrojs/node";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), compress()],
  output: "hybrid",
  server: {
    host: "0.0.0.0",
  },
  adapter: nodejs({
    mode: "standalone",
  }),
  vite: {
    plugins: [
      XMLLoader({
        ignoreAttributes: false,
      }),
    ],
  },
});
