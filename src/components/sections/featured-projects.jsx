import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/sections/project-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Squiggle } from "@/components/ui/decorations";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">
              <span className="h-px w-8 bg-teal" aria-hidden />
              Selected Work
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
              Featured <span className="text-teal">Projects</span>
            </h2>
          </div>
          {/* <Squiggle className="h-8 w-auto text-teal" aria-hidden /> */}
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:text-coral-deep"
          >
            View All
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <RevealItem key={project.id} className={i === 1 ? "lg:mt-12" : undefined}>
              <ProjectCard project={project} size={i === 1 ? "tall" : "normal"} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
