import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Blob, LeafAccent, Sparkle } from "@/components/ui/decorations";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-5xl bg-ink px-8 py-14 text-cream shadow-lift md:px-16 md:py-20">
          <Blob className="absolute -right-10 -top-16 h-56 w-56 text-coral/80" aria-hidden />
          <Blob className="absolute -bottom-20 -left-10 h-48 w-48 text-teal/50" aria-hidden />
          <Sparkle className="absolute left-[30%] top-8 h-6 w-6 animate-floaty text-sunny" aria-hidden />
          <LeafAccent className="absolute -right-3 bottom-4 hidden h-28 rotate-6 text-sunny/70 md:block" aria-hidden />

          <div className="relative grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="eyebrow !text-sunny">
                <span className="h-px w-8 bg-coral" aria-hidden />
                Let&apos;s Collaborate
              </p>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Have a project in mind?
                <br />
                <span className="text-coral">Let&apos;s create something meaningful.</span>
              </h2>
              <p className="mt-5 max-w-lg text-cream/70">
                Whether it&apos;s a full brand identity or a single bold poster — I&apos;d
                love to hear the story behind your idea.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                to="/contact"
                className={buttonVariants({ variant: "default", size: "lg", className: "justify-center" })}
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </Link>
              <a
                href={`mailto:${site.email}`}
                className={buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className: "justify-center !text-cream hover:bg-cream/10",
                })}
              >
                <Mail className="h-4 w-4" /> {site.email}
              </a>
              <p className="flex items-center justify-center gap-2 text-xs text-cream/50">
                <MapPin className="h-3.5 w-3.5" /> {site.location}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
