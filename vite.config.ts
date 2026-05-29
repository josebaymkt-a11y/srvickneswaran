// @lovable.dev/vite-tanstack-config already includes TanStack Start, React,
// Tailwind, path aliases, error logging, and sandbox-safe dev server defaults.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

// Netlify needs its TanStack Start adapter so deployed routes are served by the
// generated server handler instead of Netlify's generic 404 page.
export default defineConfig({
  cloudflare: false,
  plugins: [netlify()],
  tanstackStart: {
    server: { entry: "server" },
  },
});
