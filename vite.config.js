import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/*
 * Platform-aware base path so BOTH hosts work from one repo:
 * - Vercel injects VERCEL=1 and BASE_URL ("" on the production alias,
 *   "/preview-branch" on previews) during its build, so assets load from
 *   the domain root — https://gulsom-s-portfolio.vercel.app/assets/...
 * - GitHub Pages serves the site under the repo-name subpath, so a plain
 *   local `npm run build` (used by `npm run deploy` / gh-pages) keeps
 *   /Gulsom-s-portfolio/.
 */
export default defineConfig(() => {
  const isVercel = Boolean(process.env.VERCEL);
  const base = isVercel
    ? `${process.env.BASE_URL ?? ""}/`
    : "/Gulsom-s-portfolio/";

  return {
    plugins: [react()],
    base,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: 5173,
    },
  };
});
