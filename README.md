# Gulsom Meherzad — Graphic Designer Portfolio (JavaScript)

The same premium portfolio built with **plain JavaScript (JSX)** — no
TypeScript. Warm cream canvas, deep navy type, coral / sunny / teal
accents, an immersive 3D image-stream corridor on the Projects page, and
full case-study pages per project.

## Stack

- React 18 (JavaScript + JSX) + Vite 5
- Tailwind CSS 3 (design tokens in `tailwind.config.js` + `src/index.css`)
- Motion (Framer Motion) — page transitions, scroll reveals, hover systems
- React Router 6 — Home / Projects / Project Detail / Services / About / Contact
- lucide-react icons
- shadcn/ui-style conventions (`cn` in `src/lib/utils.js`, `cva` variants,
  `src/components/ui/`)

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build
npm run preview
```

## Structure

```
src/
  assets/artworks/     handcrafted SVG design artwork (concept projects)
  components/
    ui/                button, card, badge, field, reveal, decorations,
                       custom-cursor, image-stream-hero
    layout/            navbar, footer, root-layout
    sections/          hero, featured-projects, about-preview,
                       services-preview, process-band, cta-band, project-card
  data/
    projects.js        project dataset + stream images + helpers
    services.js        services, process steps, tools
    site.js            name, email, socials, nav — EDIT THESE before launch
  pages/               home, projects, project-detail, about, services,
                       contact, not-found
```

## Where to edit content

| What | File |
|---|---|
| Projects, case studies, colors, galleries | `src/data/projects.js` |
| Services & process copy | `src/data/services.js` |
| Email, location, social profile URLs | `src/data/site.js` |
| Palette, fonts, shadows | `tailwind.config.js` |

All projects are clearly-labeled **concept projects**; no client work,
employment history or pricing is claimed.

## Notes

- **Contact form** is frontend-only: validation, loading and success states
  work, but nothing is emailed. Connect it to Formspree/Basin or your own
  API route to go live (marked in `src/pages/contact.jsx`).
- **Social links** currently point to platform homepages — replace with real
  profiles in `src/data/site.js`.
- **Reduced motion**: the image-stream corridor freezes into a scrollable
  strip, page transitions and reveals collapse, and the custom cursor is
  disabled.
- **Images**: 14 local SVG artworks + a small set of verified Unsplash
  photography URLs (HTTP 200-checked when added).
