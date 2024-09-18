// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";



import icon from "astro-icon";



import vue from "@astrojs/vue";



import vercel from "@astrojs/vercel/serverless";



// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), react(), icon(), vue()],
  output: "server",
  adapter: vercel(),
});