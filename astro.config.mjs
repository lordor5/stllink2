import { defineConfig, envField } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare(),
  experimental: {
    env: {
      schema: {
        PUBLIC_API_URL: envField.string({
          context: "client",
          access: "public",
          startsWith: "http",
          optional: false,
        }),
      },
    },
  },
});
