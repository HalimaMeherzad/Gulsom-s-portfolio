import {
  Bookmark,
  FileText,
  Image,
  PenTool,
  Share2,
  Sparkles,
} from "lucide-react";

export const services = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    description: "Logos, visual identity systems and brand guidelines that make brands unforgettable.",
    deliverables: ["Logo suite", "Brand guidelines", "Color & type system", "Asset kit"],
    icon: Sparkles,
    accent: "bg-coral text-cream",
    iconWrap: "bg-cream/25 text-cream",
  },
  {
    id: "logo-design",
    title: "Logo Design",
    description: "Distinctive marks built on strategy — refined across every size and surface.",
    deliverables: ["Concept directions", "Master lockups", "Responsive marks", "File package"],
    icon: PenTool,
    accent: "bg-sunny text-ink",
    iconWrap: "bg-white/60 text-ink",
  },
  {
    id: "social-media",
    title: "Social Media Design",
    description: "Engaging visuals and campaign kits for Instagram, LinkedIn and beyond.",
    deliverables: ["Feed templates", "Story sets", "Highlight covers", "Campaign art"],
    icon: Share2,
    accent: "bg-teal text-cream",
    iconWrap: "bg-cream/25 text-cream",
  },
  {
    id: "packaging",
    title: "Packaging Design",
    description: "Product packaging that attracts, informs and communicates at the shelf.",
    deliverables: ["Dielines & structure", "Label artwork", "3D mockups", "Print-ready files"],
    icon: Bookmark,
    accent: "bg-ink text-cream",
    iconWrap: "bg-cream/15 text-sunny",
  },
  {
    id: "poster",
    title: "Poster Design",
    description: "Bold editorial posters and event campaigns with expressive typography.",
    deliverables: ["Key visuals", "Type compositions", "Print series", "Digital formats"],
    icon: Image,
    accent: "bg-coral-deep text-cream",
    iconWrap: "bg-cream/25 text-cream",
  },
  {
    id: "editorial",
    title: "Editorial Design",
    description: "Magazines, lookbooks and reports with grids that let content breathe.",
    deliverables: ["Grid systems", "Cover design", "Spread layouts", "InDesign package"],
    icon: FileText,
    accent: "bg-white text-ink border-2 border-ink/10",
    iconWrap: "bg-teal/15 text-teal-deep",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We talk — goals, audience, references and the feeling the brand should leave behind.",
    dot: "bg-coral",
  },
  {
    number: "02",
    title: "Plan",
    description: "Strategy, moodboards and creative territories that give the design a clear direction.",
    dot: "bg-sunny",
  },
  {
    number: "03",
    title: "Design",
    description: "Iterative craft rounds with honest reviews — type, color, composition, application.",
    dot: "bg-teal",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Polished files, guidelines and mockups, ready for print, screen and everything between.",
    dot: "bg-ink",
  },
];

export const tools = [
  { name: "Photoshop", short: "Ps", className: "bg-[#31A8FF] text-[#001E36]" },
  { name: "Illustrator", short: "Ai", className: "bg-[#FF9A00] text-[#300000]" },
  { name: "Figma", short: "Fg", className: "bg-[#FF3366] text-[#49021F]" },
  { name: "Canva", short: "Cv", className: "bg-[#9999FF] text-[#1C0834]" },
  // { name: "Figma", short: "Fi", className: "bg-white text-ink" },
  // { name: "Blender", short: "Bl", className: "bg-[#EA7C0C] text-[#26170A]" },
];
