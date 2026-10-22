import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Blob, Sparkle } from "@/components/ui/decorations";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import gul from ".././../assets/Gulsom/Gulsom About.png";

// const ABOUT_PORTRAIT =
//   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=75";

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className="relative mx-auto w-full max-w-md">
          <Blob className="absolute -left-8 -top-8 h-40 w-40 text-coral/60" aria-hidden />
          <div className="relative overflow-hidden rounded-5xl rounded-bl-[1.5rem] shadow-lift">
            <img
              src={gul}
              alt="Gulsom Meherzad smiling in her studio"
              className="aspect-[4/4.6] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 right-6 rotate-3 rounded-3xl bg-sunny px-6 py-4 shadow-soft">
            <p className="script-accent !text-2xl">creative &amp; detail-oriented</p>
          </div>
          <Sparkle className="absolute -right-3 top-10 h-7 w-7 text-teal" aria-hidden />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">
            <span className="h-px w-8 bg-coral" aria-hidden />
            About Me
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            A designer who loves turning ideas into{" "}
            <span className="text-coral">meaningful visuals.</span>
          </h2>
          <p className="mt-6 leading-relaxed text-ink-soft">
            I believe in the power of visual storytelling — clean, modern and impactful
            design built from research, sketching and relentless refinement. From brand
            identities to posters and packaging, every project starts with a question:
            what should people <em>feel</em>?
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-8">
            <div>
              <p className="font-display text-3xl font-extrabold text-ink">
                6<span className="text-coral">+</span>
              </p>
              <p className="text-sm text-ink-soft">Concept case studies</p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-ink">
                5<span className="text-teal">+</span>
              </p>
              <p className="text-sm text-ink-soft">Design disciplines</p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-ink">
                ∞<span className="text-sunny">.</span>
              </p>
              <p className="text-sm text-ink-soft">Curiosity</p>
            </div>
          </div>
          <Link to="/about" className={buttonVariants({ variant: "dark", size: "lg", className: "mt-9" })}>
            More About Me
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
