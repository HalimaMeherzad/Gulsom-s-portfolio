import React from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { ArrowBadge } from "@/components/ui/decorations";
import { Badge } from "@/components/ui/badge";
import { ImagePreview } from "@/components/ui/image-preview";
import { thumbFor } from "@/lib/images";
import { cn } from "@/lib/utils";

/**
 * ProjectCard — links to /projects/:slug.
 * props: project (see src/data/projects.js), size: "normal" | "tall",
 *   galleryPreview: when true the media frame cycles through the project's
 *   own gallery images in data order (never coverImage) and a transparent
 *   hit-area opens them full-screen; navigation stays on the title row.
 *   Left off, the card renders exactly as before.
 */
export const ProjectCard = React.memo(function ProjectCard({
  project,
  className,
  size = "normal",
  galleryPreview = false,
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [previewIndex, setPreviewIndex] = React.useState(null);

  const gallery = galleryPreview && project.gallery?.length ? project.gallery : [];
  const active = gallery.length > 0 ? gallery[index % gallery.length] : null;

  React.useEffect(() => {
    if (reduce || gallery.length < 2 || previewIndex !== null) return undefined;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % gallery.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [reduce, gallery.length, previewIndex]);

  const imageSrc = active ? active.src : project.coverImage;
  const imageAlt = active ? active.alt : project.heroAlt;

  const media = (
    <div
      className={cn(
        "relative overflow-hidden rounded-4xl bg-cream-deep shadow-soft transition-shadow duration-500 group-hover:shadow-lift",
        size === "tall" ? "aspect-[4/5]" : "aspect-[4/3.2]",
      )}
    >
      <img
        src={thumbFor(imageSrc)}
        alt={imageAlt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />
      <span className="absolute left-4 top-4">
        <Badge variant="sunny" className="bg-cream/90 backdrop-blur">
          {project.category}
        </Badge>
      </span>
      <span className="absolute inset-x-4 bottom-4 flex translate-y-3 items-end justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="max-w-[70%] rounded-2xl bg-ink/85 px-4 py-2 text-xs leading-relaxed text-cream backdrop-blur">
          {project.description}
        </span>
      </span>
      {active && (
        <button
          type="button"
          onClick={() => setPreviewIndex(index % gallery.length)}
          aria-label={`View full image: ${active.alt}`}
          className="absolute inset-0 z-10 cursor-zoom-in rounded-4xl focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-0"
        />
      )}
    </div>
  );

  const summary = (
    <div className="mt-4 flex items-center justify-between gap-4 px-1">
      <div>
        <h3 className="font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-coral-deep">
          {project.title}
        </h3>
        <p className="mt-0.5 text-sm text-ink-soft">{project.category}</p>
      </div>
      <ArrowBadge />
    </div>
  );

  if (!active) {
    return (
      <Link
        to={`/projects/${project.slug}`}
        className={cn("group block focus-visible:rounded-4xl", className)}
        aria-label={`View project: ${project.title}`}
      >
        {media}
        {summary}
      </Link>
    );
  }

  return (
    <>
      <div className={cn("group block focus-visible:rounded-4xl", className)}>
        {media}
        <Link
          to={`/projects/${project.slug}`}
          className="block focus-visible:rounded-4xl"
          aria-label={`View project: ${project.title}`}
        >
          {summary}
        </Link>
      </div>
      <ImagePreview
        item={previewIndex === null ? null : gallery[previewIndex]}
        open={previewIndex !== null}
        onClose={() => setPreviewIndex(null)}
      />
    </>
  );
});
