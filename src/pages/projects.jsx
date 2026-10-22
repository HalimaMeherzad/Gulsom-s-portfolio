import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ImageStreamHero from "@/components/ui/image-stream-hero";
import { ProjectCard } from "@/components/sections/project-card";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";
import {
  projectCategories,
  projectStreamImages,
  projects,
} from "@/data/projects";
import { cn } from "@/lib/utils";
import React from "react";

export default function Projects() {
  const [active, setActive] = React.useState("All");
  const reduce = useReducedMotion();

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Immersive 3D image-stream corridor hero */}
      <div className="relative">
        <ImageStreamHero
          images={projectStreamImages}
          cards={5}
          speed={1}
          axis="x"
          path="in"
        >
          <p className="eyebrow justify-center !text-ink-soft">
            <span className="h-px w-8 bg-coral" aria-hidden />
            MY WORKS
            <span className="h-px w-8 bg-teal" aria-hidden />
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,6.5vw,4.5rem)] font-extrabold leading-[1.04] tracking-tight">
            Selected <span className="text-coral">Projects</span>
          </h1>
          <p className="mt-4 max-w-md text-base text-ink-soft md:text-lg">
            An exploration of identities, ideas, and visual experiences — flowing past
            you in one continuous stream.
          </p>
          <a
            href="#gallery"
            className={buttonVariants({ variant: "dark", size: "lg", className: "mt-8" })}
          >
            Explore All Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </ImageStreamHero>
      </div>

      {/* Gallery with functional category filters */}
      <section id="gallery" className="scroll-mt-24 py-16 md:py-24">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              The <span className="text-teal">Work</span>
            </h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              Six concept case studies across branding, posters, packaging, social and
              editorial design. Filter by discipline or browse everything.
            </p>

            <div
              className="mt-8 flex flex-wrap gap-2.5"
              role="group"
              aria-label="Filter projects by category"
            >
              {projectCategories.map((category) => {
                const isActive = category === active;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActive(category)}
                    aria-pressed={isActive}
                    className={cn(
                      "rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300",
                      isActive
                        ? "bg-ink text-cream shadow-soft"
                        : "bg-white/70 text-ink hover:bg-white hover:shadow-soft",
                    )}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <motion.div
            layout={!reduce}
            className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.94, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className={cn(i % 3 === 1 && "lg:mt-12")}
                >
                  <ProjectCard
                    project={project}
                    size={i % 3 === 1 ? "tall" : "normal"}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-ink-soft">
              No projects in this category yet — check back soon.
            </p>
          )}

          <Reveal className="mt-16 text-center">
            <p className="text-ink-soft">Like what you see?</p>
            <Link
              to="/contact"
              className={buttonVariants({ variant: "default", size: "lg", className: "mt-4" })}
            >
              Let&apos;s Work Together
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
