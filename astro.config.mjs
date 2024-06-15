import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://miketpac.github.io/momo-landing/",
  output: "server",
  adapter: netlify()
});