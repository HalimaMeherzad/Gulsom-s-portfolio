
import rayyanCover from "../assets/RAYYYAN/rayyanCover.png";
import rayyanPackaging from "../assets/RAYYYAN/rayyanPackaging.png";
import rayyanColoring from "../assets/RAYYYAN/color and rype.png";
import rayyanVitual from "../assets/RAYYYAN/rayyan Key.png";
import pizzaposter from "../assets/Posters/pizza poster copy.png";
import cocaPoster from "../assets/Posters/Coca Cola copy.png";
import drinkPoster from "../assets/Posters/drink poster copy3.png";
import posterFoods from "../assets/Posters/foods.png";
import bestPlayerPoster from "../assets/Posters/Best player copy.png";
import airPodsPoster from "../assets/Posters/air pods max poster copy1.png";
import nikePoster from "../assets/Posters/nike copy.png";
import adidasPoster from "../assets/Posters/adidas copy.png";
import darkPoster from "../assets/Posters/DARK poster copy.png";
import filmPoster from "../assets/Posters/FILM copy.png";
import crestaianoPoster from '../assets/Posters/beush usage copy.png';
import sportposter from "../assets/Posters/sport poster.png";
import productposter from "../assets/Posters/product poster.png";
import moviePoster from "../assets/Posters/movie poster.png";
import dogIllustration from "../assets/illustration/dog.png";
import forestIllustration from "../assets/illustration/forest.png";
import backgroundIllustration from "../assets/illustration/background.png";
import illustratorCover from "../assets/illustration/illustrators.jpeg"

/* Verified Unsplash photography used as supporting mood imagery. */
const unsplash = {
  shapes:
    "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=70",
  perfumePink:
    "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=70",
  perfumeStone:
    "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=70",
  galleryWall:
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=70",
  books:
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=70",
};

const standardProcess = [
  {
    title: "Research",
    description:
      "Auditing the market, gathering references and defining the creative brief.",
  },
  {
    title: "Concept",
    description: "Mapping territories, moodboards and one strong guiding idea.",
  },
  {
    title: "Sketching",
    description:
      "Rapid thumbnails and composition studies before any pixel work.",
  },
  {
    title: "Design",
    description: "Crafting the system — type, color, form and application.",
  },
  {
    title: "Finalization",
    description: "Mockups, brand guidelines and print-ready delivery.",
  },
];

/**
 * All projects below are clearly-labeled concept projects created for this
 * portfolio — they are not client work. Copy is editable in one place.
 *
 * Project shape:
 * { id, slug, number, title, category, description, coverImage, heroImage,
 *   heroAlt, challenge, role, projectType, tools[], duration, process[],
 *   colors[{name,hex}], typography{heading,body,specimen},
 *   gallery[{src,alt,caption,span}], featured }
 */
export const projects = [
  {
    id: "p-01",
    slug: "blume-brand-identity",
    number: "01",
    title: "RAYYAN — Brand Identity",
    category: "Branding",
    description: "A premium modest fashion brand created for women.",
    coverImage: rayyanCover,
    heroImage: rayyanCover,
    heroAlt: "RAYYAN luxury fashion branding with burgundy and gold.",
    challenge: "Creat an elegant and timeless.",
    role: "Brand Strategy, Logo Design, Visual Identity, Packaging Design",
    projectType: "Luxury Modest Fashion Brand Identity",
    tools: ["Illustrator", "Photoshop"],
    duration: "2 weeks",
    process: standardProcess,
    colors: [
      { name: "Burgundy Red", hex: "#7D0A0A" },
      { name: "Deep Burgundy", hex: "#3A0A0A" },
      { name: "Champange Beige", hex: "#EAD196" },
      { name: "Muted Gold", hex: "#C99A5A" },
    ],
    typography: {
      heading: "Elegent Serif Typography",
      body: "Minimal Snas-Serif ",
      specimen: "Aa Bb Cc — Nature in balance",
    },
    gallery: [
      {
        src: rayyanVitual,
        alt: "RAYYAN key visual poster",
        caption: "Key Visual",
        span: "tall",
      },
      {
        src: rayyanPackaging,
        alt: "RAYYAN carrier bag application",
        caption: "Packaging",
      },
      {
        src: rayyanColoring,
        alt: "RAYYAN color system and typeface specimen",
        caption: "Color & Type",
      },
      // {
      //   src: unsplash.perfumePink,
      //   alt: "Soft pink cosmetic bottle photography",
      //   caption: "Mood Reference",
      // },
      // {
      //   src: unsplash.perfumeStone,
      //   alt: "Perfume bottle on stone photography",
      //   caption: "Mood Reference",
      //   span: "wide",
      // },
    ],
    featured: true,
  },
  {
    id: "p-02",
    slug: "food & Beverage-design",
    number: "02",
    title: "Food & Beverage — Poster Designs",
    category: "Poster",
    description:
      "Creative food posters with bold colors and appetizing visuals.",
    coverImage:posterFoods,
    heroImage: posterFoods,
    heroAlt:
      "Flora festival poster with oversized geometric flower and stacked serif type",
    challenge:
      "Design an eye-catching poster series that blends expressive typography with geometric botanical shapes for a city flower festival.",
    role: "Poster Design, Illustration, Typography",
    projectType: "Concept Editorial Poster",
    tools: ["Illustrator", "Photoshop"],
    duration: "2 weeks",
    process: standardProcess,
    colors: [
      { name: "Festival Coral", hex: "#FF6B6B" },
      { name: "Pollen Yellow", hex: "#FFD166" },
      { name: "Stem Teal", hex: "#06B6A0" },
      { name: "Paper Cream", hex: "#FFF8E8" },
    ],
    typography: {
      heading: "Grotesque Display",
      body: "Manrope",
      specimen: "FLORA — bloom with us",
    },
    gallery: [
      {
        src: cocaPoster,
        alt: "Flora main festival poster",
        caption: "Coca Cola",
        span: "tall",
      },
      {
        src: drinkPoster,
        alt: "Flora poster series on a gallery wall",
        caption: "Origin Juice",
      },
      {
        src: pizzaposter,
        alt: "Bright gallery interior with framed prints",
        caption: "Hoot Pizza",
      },
    ],
    featured: true,
  },
  // {
  //   id: "p-03",
  //   slug: "aura-social-media",
  //   number: "03",
  //   title: "Aura — Social Media",
  //   category: "Social Media",
  //   description: "A playful social campaign kit for a wellness app launch.",
  //   coverImage: auraSocial,
  //   heroImage: auraSocial,
  //   heroAlt:
  //     "Aura social campaign grid of colorful tiles on a yellow background",
  //   challenge:
  //     "Build a scroll-stopping campaign system — feed tiles, stories and phone mockups — that makes a wellness app feel warm and human.",
  //   role: "Social Design, Art Direction, Motion Notes",
  //   projectType: "Concept Social Campaign",
  //   tools: ["Figma", "Photoshop", "After Effects"],
  //   duration: "3 weeks",
  //   process: standardProcess,
  //   colors: [
  //     { name: "Aura Yellow", hex: "#FFD166" },
  //     { name: "Glow Coral", hex: "#FF6B6B" },
  //     { name: "Calm Teal", hex: "#06B6A0" },
  //     { name: "Deep Ink", hex: "#34344A" },
  //   ],
  //   typography: {
  //     heading: "Aura Rounded",
  //     body: "Manrope",
  //     specimen: "feel the glow",
  //   },
  //   gallery: [
  //     {
  //       src: auraSocial,
  //       alt: "Aura nine-tile campaign grid",
  //       caption: "Feed Grid",
  //       span: "tall",
  //     },
  //     {
  //       src: auraPhone,
  //       alt: "Aura app screen shown on a phone mockup",
  //       caption: "Story Mockup",
  //     },
  //     {
  //       src: unsplash.shapes,
  //       alt: "Colorful abstract 3D shapes",
  //       caption: "Color Study",
  //     },
  //   ],
  //   featured: true,
  // },
  // {
  //   id: "p-04",
  //   slug: "nord-packaging",
  //   number: "04",
  //   title: "Nord — Packaging",
  //   category: "Packaging",
  //   description:
  //     "A Scandinavian oat-drink packaging range with a geometric mountain mark.",
  //   coverImage: nordPackaging,
  //   heroImage: nordPackaging,
  //   heroAlt: "Nord oat drink carton packaging on a teal background",
  //   challenge:
  //     "Create a shelf-ready carton system where one simple mountain mark scales across flavors while keeping the range calm and premium.",
  //   role: "Packaging Design, Structural Mockups, Label System",
  //   projectType: "Concept Packaging System",
  //   tools: ["Illustrator", "Dimension", "Figma"],
  //   duration: "5 weeks",
  //   process: standardProcess,
  //   colors: [
  //     { name: "Fjord Teal", hex: "#06B6A0" },
  //     { name: "Snow Cream", hex: "#FFF8E8" },
  //     { name: "Berry Coral", hex: "#FF6B6B" },
  //     { name: "Midnight Ink", hex: "#34344A" },
  //   ],
  //   typography: {
  //     heading: "Nord Grotesk",
  //     body: "Nord Grotesk Light",
  //     specimen: "NORD — barista edition",
  //   },
  //   gallery: [
  //     {
  //       src: nordPackaging,
  //       alt: "Nord carton hero composition",
  //       caption: "Hero Carton",
  //       span: "tall",
  //     },
  //     {
  //       src: nordRange,
  //       alt: "Full Nord carton range in three flavors",
  //       caption: "The Range",
  //     },
  //     {
  //       src: unsplash.shapes,
  //       alt: "Abstract geometric shapes as color study",
  //       caption: "Form Study",
  //     },
  //   ],
  //   featured: true,
  // },
  // {
  //   id: "p-05",
  //   slug: "lumiere-editorial",
  //   number: "05",
  //   title: "Lumière — Editorial",
  //   category: "Editorial",
  //   description:
  //     "Art direction and layout for an independent art & design magazine.",
  //   coverImage: lumiereEditorial,
  //   heroImage: lumiereEditorial,
  //   heroAlt: "Lumiere magazine cover with elegant serif typography on navy",
  //   challenge:
  //     "Give an indie art revue a timeless editorial voice — a strict grid, generous whitespace and one confident serif.",
  //   role: "Editorial Design, Art Direction, Layout System",
  //   projectType: "Concept Magazine Issue",
  //   tools: ["InDesign", "Illustrator", "Photoshop"],
  //   duration: "6 weeks",
  //   process: standardProcess,
  //   colors: [
  //     { name: "Midnight Ink", hex: "#34344A" },
  //     { name: "Moon Yellow", hex: "#FFD166" },
  //     { name: "Signal Coral", hex: "#FF6B6B" },
  //     { name: "Page Cream", hex: "#FFF8E8" },
  //   ],
  //   typography: {
  //     heading: "Lumière Serif",
  //     body: "Atlas Grotesk",
  //     specimen: "LUMIÈRE — the craft of light",
  //   },
  //   gallery: [
  //     {
  //       src: lumiereEditorial,
  //       alt: "Lumiere cover design",
  //       caption: "Cover",
  //       span: "tall",
  //     },
  //     {
  //       src: lumiereSpread,
  //       alt: "Lumiere open magazine spread",
  //       caption: "Spread",
  //     },
  //     {
  //       src: unsplash.books,
  //       alt: "Stacked art books photography",
  //       caption: "Print Mood",
  //     },
  //   ],
  //   featured: true,
  // },
  {
    id: "p-06",
    slug: "creative-illustrations",
    number: "06",
    title: "Creative — Illustrations",
    category: "Illustration",
    description:
      "A collection of originsal illustrations combining creativity, color, and artistic expression.",
    coverImage: illustratorCover,
    heroImage: illustratorCover,
    heroAlt:
      "Soleil visual identity with radiant sun mark and stationery cards",
    challenge:
      "Distill a creative studio's energy into a single radiant mark and a stationery system that feels warm, direct and confident.",
    role: "Logo Design, Visual Identity, Stationery",
    projectType: "Concept Visual Identity",
    tools: ["Illustrator", "Figma"],
    duration: "3 weeks",
    process: standardProcess,
    colors: [
      { name: "Sun Yellow", hex: "#FFD166" },
      { name: "Ray Coral", hex: "#FF6B6B" },
      { name: "Shadow Ink", hex: "#34344A" },
      { name: "Horizon Teal", hex: "#06B6A0" },
    ],
    typography: {
      heading: "Soleil Bold",
      body: "Manrope",
      specimen: "SOLEIL — made in daylight",
    },
    gallery: [
      {
        src: backgroundIllustration,
        alt: "Soleil sun mark key visual",
        caption: "Sun",
        span: "tall",
      },
      {
        src: dogIllustration,
        alt: "Soleil business card stationery",
        caption: "Dog",
      },
      {
        src: forestIllustration,
        alt: "Pencil logo sketches and grid studies",
        caption: "Forest",
      },
    ],
    featured: true,
  },
 {
    id: "p-07",
    slug: "sport-poster-design",
    number: "07",
    title: "Sport — Poster Design",
    category: "Poster",
    description:
      "Dynamic sport designs with bold visuals and energetic colors.",
    coverImage: sportposter,
    heroImage: sportposter,
    heroAlt:
      "Flora festival poster with oversized geometric flower and stacked serif type",
    challenge:
      "Design an eye-catching poster series that blends expressive typography with geometric botanical shapes for a city flower festival.",
    role: "Poster Design, Illustration, Typography",
    projectType: "Concept Editorial Poster",
    tools: ["Illustrator", "Photoshop"],
    duration: "2 weeks",
    process: standardProcess,
    colors: [
      { name: "Festival Coral", hex: "#FF6B6B" },
      { name: "Pollen Yellow", hex: "#FFD166" },
      { name: "Stem Teal", hex: "#06B6A0" },
      { name: "Paper Cream", hex: "#FFF8E8" },
    ],
    typography: {
      heading: "Grotesque Display",
      body: "Manrope",
      specimen: "FLORA — bloom with us",
    },
    gallery: [
      {
        src: bestPlayerPoster,
        alt: "Flora main festival poster",
        caption: "Best Player",
        span: "tall",
      },
      {
        src: crestaianoPoster,
        alt: "Flora poster series on a gallery wall",
        caption: "Cristiano Ronaldo",
      },
      // {
      //   src: unsplash.galleryWall,
      //   alt: "Bright gallery interior with framed prints",
      //   caption: "Print Context",
      // },
    ],
    featured: true,
  },
   {
    id: "p-08",
    slug: "movie-poster-design",
    number: "08",
    title: "Movie — Poster Design",
    category: "Poster",
    description:
      "Creative movie posters with captivating visuals and cinematic.",
    coverImage: moviePoster,
    heroImage: moviePoster,
    heroAlt:
      "Flora festival poster with oversized geometric flower and stacked serif type",
    challenge:
      "Design an eye-catching poster series that blends expressive typography with geometric botanical shapes for a city flower festival.",
    role: "Poster Design, Illustration, Typography",
    projectType: "Concept Editorial Poster",
    tools: ["Illustrator", "Photoshop"],
    duration: "2 weeks",
    process: standardProcess,
    colors: [
      { name: "Festival Coral", hex: "#FF6B6B" },
      { name: "Pollen Yellow", hex: "#FFD166" },
      { name: "Stem Teal", hex: "#06B6A0" },
      { name: "Paper Cream", hex: "#FFF8E8" },
    ],
    typography: {
      heading: "Grotesque Display",
      body: "Manrope",
      specimen: "FLORA — bloom with us",
    },
    gallery: [
      {
        src: filmPoster,
        alt: "Flora main festival poster",
        caption: "Horor Movie",
        span: "tall",
      },
      {
        src: darkPoster,
        alt: "Flora poster series on a gallery wall",
        caption: "Dark",
      },
      // {
      //   src: unsplash.galleryWall,
      //   alt: "Bright gallery interior with framed prints",
      //   caption: "Print Context",
      // },
    ],
    featured: true,
  },
   {
    id: "p-09",
    slug: "Product — Poster Design",
    number: "09",
    title: "Product — Poster Design",
    category: "Poster",
    description:
      "Creative product designs with a modern and elwgant visual style.",
    coverImage: productposter,
    heroImage: productposter,
    heroAlt:
      "Flora festival poster with oversized geometric flower and stacked serif type",
    challenge:
      "Design an eye-catching poster series that blends expressive typography with geometric botanical shapes for a city flower festival.",
    role: "Poster Design, Illustration, Typography",
    projectType: "Concept Editorial Poster",
    tools: ["Illustrator", "Photoshop"],
    duration: "2 weeks",
    process: standardProcess,
    colors: [
      { name: "Festival Coral", hex: "#FF6B6B" },
      { name: "Pollen Yellow", hex: "#FFD166" },
      { name: "Stem Teal", hex: "#06B6A0" },
      { name: "Paper Cream", hex: "#FFF8E8" },
    ],
    typography: {
      heading: "Grotesque Display",
      body: "Manrope",
      specimen: "FLORA — bloom with us",
    },
    gallery: [
      {
        src: airPodsPoster,
        alt: "Flora main festival poster",
        caption: "Air Pods Max",
        span: "tall",
      },
      {
        src: nikePoster,
        alt: "Flora poster series on a gallery wall",
        caption: "NIKE",
      },
      {
        src: adidasPoster,
        alt: "Bright gallery interior with framed prints",
        caption: "Adidas",
      },
    ],
    featured: true,
  },
  
];

/* Unique gallery image sources for the Projects stream hero.
 * Deduped so the same poster isn't fetched twice; consumers should pass
 * these through thumbFor() (src/lib/images.js) to use WebP thumbnails. */
export const projectStreamImages = [
  ...new Set([
    ...projects.flatMap((p) => (p.gallery ?? []).map((image) => image.src)),
    rayyanPackaging,
    cocaPoster,
    drinkPoster,
    pizzaposter,
    dogIllustration,
    forestIllustration,
  ]),
];

export const projectCategories = [
  "All",
  "Branding",
  "Poster",
  // "Packaging",
  // "Social Media",
  // "Editorial",
  "Illustration"
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug) {
  const index = projects.findIndex((p) => p.slug === slug);
  const safeIndex = index < 0 ? 0 : index;
  const previous =
    projects[(safeIndex - 1 + projects.length) % projects.length];
  const next = projects[(safeIndex + 1) % projects.length];
  return { previous, next };
}

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);
