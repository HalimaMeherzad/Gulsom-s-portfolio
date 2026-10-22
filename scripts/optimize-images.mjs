/*
 * Image thumbnail generator — run once per added image.
 *
 *   npm install --save-dev sharp
 *   node scripts/optimize-images.mjs
 *
 * Creates <name>.thumb.webp (max 800px wide, quality 80, alpha preserved)
 * next to every .png/.jpg/.jpeg under src/assets. Originals are never
 * modified. src/lib/images.js picks the thumbnails up automatically.
 */
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.error("sharp is not installed. Run: npm install --save-dev sharp");
  process.exit(1);
}

const assetsDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/assets",
);
const THUMB_WIDTH = 800;
const QUALITY = 80;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(png|jpe?g)$/i.test(entry.name) && !entry.name.includes(".thumb.")) {
      yield full;
    }
  }
}

let totalBefore = 0;
let totalAfter = 0;
let count = 0;

for await (const file of walk(assetsDir)) {
  const thumbFile = file.replace(/\.(png|jpe?g)$/i, ".thumb.webp");
  const [original, existing] = await Promise.all([stat(file), stat(thumbFile).catch(() => null)]);
  if (existing && existing.mtimeMs > original.mtimeMs) {
    console.log(`skip (fresh)  ${path.relative(assetsDir, thumbFile)}`);
    continue;
  }
  await sharp(file)
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(thumbFile);
  const thumb = await stat(thumbFile);
  totalBefore += original.size;
  totalAfter += thumb.size;
  count += 1;
  console.log(
    `${(original.size / 1024 / 1024).toFixed(2)} MB → ${(thumb.size / 1024).toFixed(0)} KB  ${path.relative(assetsDir, file)}`,
  );
}

console.log(
  `\nDone: ${count} thumbnail(s). ${totalBefore ? (totalBefore / 1024 / 1024).toFixed(1) : "0"} MB → ${(totalAfter / 1024 / 1024).toFixed(1)} MB total thumb weight.`,
);
