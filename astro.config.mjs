import { defineConfig, envField } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  experimental: {
    env: {
      schema: {
        PUBLIC_KEY: envField.string({
          context: "client",
          access: "public",
          startsWith: "http",
          optional: true,
        }),
        SECRET_KEY: envField.string({
          context: "server",
          access: "secret",
          startsWith: "http",
          optional: true,
        }),
      },
    },
  },
});
