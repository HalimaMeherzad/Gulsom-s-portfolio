import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowBadge, Blob, LeafAccent, Squiggle } from "@/components/ui/decorations";
import { ImagePreview } from "@/components/ui/image-preview";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { getAdjacentProjects, getProjectBySlug } from "@/data/projects";
import { thumbFor } from "@/lib/images";
import NotFound from "@/pages/not-found";
import { cn } from "@/lib/utils";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [previewItem, setPreviewItem] = React.useState(null);
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <NotFound />;

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <article className="overflow-hidden">
      {/* A — Project header */}
      <header className="relative pt-12 md:pt-16">
        {/* <Blob className="pointer-events-none absolute -right-16 top-10 h-56 w-56 text-sunny/40" aria-hidden /> */}
        <div className="container">
          <Reveal>
            <p className="eyebrow">
              <span className="text-coral">/ {project.number}</span>
              {project.category}
            </p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
              <h1 className="max-w-3xl text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[1.05] tracking-tight">
                {project.title}
              </h1>
              {/* Concept project — no live URL exists, so the CTA anchors to the case study */}
              <a href="#case-study" className={buttonVariants({ variant: "default", size: "lg" })}>
                Explore Case Study
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cream/25">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>
            <p className="mt-4 max-w-xl text-lg text-ink-soft">{project.description}</p>
          </Reveal>

          <Reveal delay={0.1} className="relative mt-10 md:mt-14">
            <div className="relative overflow-hidden rounded-5xl rounded-tr-[1.5rem] shadow-lift">
              <img
                src={project.heroImage}
                alt={project.heroAlt}
                fetchpriority="high"
                decoding="async"
                className="aspect-[16/9] w-full object-cover md:aspect-[2.2/1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
            </div>
            {/* <Squiggle className="absolute -left-6 bottom-6 hidden h-8 text-teal md:block" aria-hidden /> */}
            <LeafAccent className="absolute -right-4 -top-6 hidden h-24 -rotate-12 text-coral md:block" aria-hidden />
          </Reveal>
        </div>
      </header>

      {/* B — Overview */}
      <section id="case-study" className="container scroll-mt-28 py-16 md:py-24">
        <RevealGroup className="grid gap-10 md:grid-cols-2 md:gap-14">
          <RevealItem>
            <h2 className="font-display text-2xl font-extrabold">The Challenge</h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-coral" aria-hidden />
            <p className="mt-4 leading-relaxed text-ink-soft">{project.challenge}</p>
            <p className="mt-6 text-sm text-ink/50 italic">
              This is a concept project created for this portfolio — not client work.
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="font-display text-2xl font-extrabold">My Role</h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-teal" aria-hidden />
            <p className="mt-4 leading-relaxed text-ink-soft">{project.role}</p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-white/70 p-4 shadow-soft">
                <dt className="text-xs font-bold uppercase tracking-widest text-ink/50">Type</dt>
                <dd className="mt-1 font-semibold">{project.projectType}</dd>
              </div>
              <div className="rounded-2xl bg-white/70 p-4 shadow-soft">
                <dt className="text-xs font-bold uppercase tracking-widest text-ink/50">Duration</dt>
                <dd className="mt-1 font-semibold">{project.duration}</dd>
              </div>
            </dl>
          </RevealItem>
        </RevealGroup>

        <Reveal className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-sm font-bold uppercase tracking-widest text-ink/50">Tools</span>
          {project.tools.map((tool) => (
            <Badge key={tool} variant="default" className="bg-white shadow-soft">
              {tool}
            </Badge>
          ))}
        </Reveal>
      </section>

      {/* C — Design process timeline */}
      <section className="bg-cream-deep/60 py-16 md:py-24">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Design <span className="text-coral">Process</span>
            </h2>
          </Reveal>

          {/* horizontal on lg+, vertical on smaller screens */}
          <RevealGroup
            className="relative mt-12 grid gap-8 lg:grid-cols-5 lg:gap-6"
            stagger={0.1}
          >
            <div
              className="absolute left-7 top-2 bottom-2 w-0.5 border-l-2 border-dashed border-ink/15 lg:left-[10%] lg:right-[10%] lg:top-7 lg:bottom-auto lg:h-0.5 lg:border-l-0 lg:border-t-2"
              aria-hidden
            />
            {project.process.map((stage, i) => (
              <RevealItem key={stage.title} className="relative flex gap-5 lg:block">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink font-display text-lg font-extrabold text-cream shadow-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="lg:mt-5">
                  <h3 className="font-display text-lg font-bold">{stage.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {stage.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* D — Visual identity system */}
      {/* {(project.colors.length > 0 || project.typography) && (
        <section className="container py-16 md:py-24">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Identity <span className="text-teal">System</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {project.colors.length > 0 && (
              <Reveal className="rounded-4xl bg-white/70 p-8 shadow-soft">
                <h3 className="font-display text-lg font-bold">Colors & Typography</h3>
                <ul className="mt-5 flex flex-wrap gap-4">
                  {project.colors.map((color) => (
                    <li key={color.hex} className="text-center">
                      <span
                        className="mx-auto block h-14 w-14 rounded-full shadow-inner ring-2 ring-white"
                        style={{ backgroundColor: color.hex }}
                        aria-hidden
                      />
                      <span className="mt-2 block text-xs font-semibold">{color.name}</span>
                      <span className="block text-[10px] uppercase tracking-wider text-ink/45">
                        {color.hex}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            {project.typography && (
              <Reveal delay={0.08} className="rounded-4xl bg-ink p-8 text-cream shadow-soft">
                <h3 className="font-display text-lg font-bold !text-sunny">Typeface</h3>
                <p className="mt-4 font-serif text-6xl font-bold leading-none">Aa</p>
                <p className="mt-4 text-sm font-semibold">{project.typography.heading}</p>
                <p className="text-xs text-cream/60">
                  Body — {project.typography.body}
                </p>
                <p className="mt-5 text-lg italic text-coral">{project.typography.specimen}</p>
                <p className="mt-2 text-[11px] tracking-widest text-cream/50">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
                </p>
              </Reveal>
            )}
          </div>
        </section>
      )} */}

      {/* E — Final results gallery */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Final <span className="text-coral">Result</span>
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid auto-rows-[minmax(0,1fr)] gap-6 md:grid-cols-3">
            {project.gallery.map((item) => (
              <RevealItem
                key={item.src + item.caption}
                className={cn(
                  "group relative overflow-hidden rounded-4xl bg-cream-deep shadow-soft transition-shadow hover:shadow-lift",
                  item.span === "wide" && "md:col-span-2",
                  item.span === "tall" && "md:row-span-2",
                )}
              >
                <img
                  src={thumbFor(item.src)}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]",
                    item.span === "tall" ? "aspect-[4/5] md:aspect-auto" : "aspect-[4/3]",
                  )}
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/70 to-transparent p-5 pt-14">
                  <span className="text-sm font-bold text-cream">{item.caption}</span>
                  <ArrowBadge className="!border-cream/40 !text-cream" />
                </figcaption>
                {/* gallery images enlarge on click — see ImagePreview below */}
                <button
                  type="button"
                  onClick={() => setPreviewItem(item)}
                  aria-label={`View full image: ${item.caption}`}
                  className="absolute inset-0 z-10 cursor-zoom-in rounded-4xl focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-0"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* F — Project navigation */}
      <nav
        aria-label="Project navigation"
        className="border-t border-ink/5 bg-cream-deep/50 py-12 md:py-16"
      >
        <div className="container grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <Link
            to={`/projects/${previous.slug}`}
            className="group flex items-center gap-4 rounded-3xl bg-white/70 p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink/5 transition-colors group-hover:bg-coral group-hover:text-cream">
              <ArrowLeft className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-widest text-ink/45">
                Previous
              </span>
              <span className="font-display font-bold">{previous.title}</span>
            </span>
          </Link>

          <Link
            to="/projects"
            className={buttonVariants({ variant: "outline", className: "justify-center" })}
          >
            <ArrowUpRight className="h-4 w-4 rotate-180" />
            Back to All Projects
          </Link>

          <Link
            to={`/projects/${next.slug}`}
            className="group flex items-center justify-end gap-4 rounded-3xl bg-ink p-5 text-cream shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            <span className="text-right">
              <span className="block text-xs font-bold uppercase tracking-widest text-cream/50">
                Next
              </span>
              <span className="font-display font-bold">{next.title}</span>
            </span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/10 transition-colors group-hover:bg-coral">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
        <div className="container mt-10 text-center">
          <Link to="/contact" className={buttonVariants({ variant: "default", size: "lg" })}>
            Want something like this for your brand?
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </nav>

      <ImagePreview
        item={previewItem}
        open={previewItem !== null}
        onClose={() => setPreviewItem(null)}
      />
    </article>
  );
}
