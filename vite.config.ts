// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // No Nitro: this is a static site, so there is no deploy target to adapt to.
  // Plain Vite output (dist/client + dist/server) is also what the prerenderer
  // expects, and what any static host can serve as-is.
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender every route to plain HTML at build time. The site is one
    // presentational route with no server functions, so the CDN serves finished
    // HTML and the server bundle is never hit on a normal page view.
    prerender: { enabled: true, crawlLinks: true },
  },
});
