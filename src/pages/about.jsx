import { Link } from "react-router-dom";
import { ArrowRight, Heart, MapPin, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Blob, LeafAccent, Sparkle, Squiggle } from "@/components/ui/decorations";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { tools } from "@/data/services";
import { site } from "@/data/site";
import gulsomAbout from "../assets/Gulsom/Gulsom About.png"

// const PORTRAIT =
//   "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=75";

const expertise = [
  { title: "Brand Identity", note: "Logos, systems & guidelines", color: "bg-coral" },
  { title: "Poster & Print", note: "Expressive editorial compositions", color: "bg-sunny" },
  { title: "Packaging", note: "Shelf-ready structural art", color: "bg-teal" },
  { title: "Social Design", note: "Campaigns that stop the scroll", color: "bg-ink" },
];

const interests = [
  "Botanical illustration",
  "Retro poster typography",
  "Color theory experiments",
  "Sketchbook studies",
  "Magazine collecting",
  "Abstract geometry",
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden py-14 md:py-20">
        {/* <Blob className="pointer-events-none absolute -left-20 top-24 h-64 w-64 text-teal/20" aria-hidden /> */}
        <div className="container grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          {/* portrait composition */}
          <Reveal className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="absolute -inset-4 rotate-2 rounded-5xl rounded-tl-[1.5rem] bg-coral/70" aria-hidden />
            <div className="relative overflow-hidden rounded-5xl rounded-tl-[1.5rem] shadow-lift">
              <img
                src={gulsomAbout}
                alt="Portrait of Gulsom Meherzad"
                className="aspect-[4/4.8] w-full object-cover"
              />
            </div>
            <Squiggle className="absolute -bottom-6 left-4 h-8 w-auto text-teal" aria-hidden />
            <Sparkle className="absolute -right-4 top-8 h-8 w-8 animate-floaty text-sunny" aria-hidden />
            <p className="script-accent absolute -right-6 bottom-16 hidden rotate-3 md:block">
              always learning!
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow">
              <span className="h-px w-8 bg-coral" aria-hidden />
              About ME
            </p>
            <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight">
              Hi, I&apos;m <span className="text-coral">Gulsom</span> — a designer who
              turns ideas into visuals.
            </h1>
            <p className="mt-6 leading-relaxed text-ink-soft">
              I&apos;m a graphic designer with a passion for creating clean, modern and
              impactful work. I believe in the power of visual storytelling — every
              brand, poster or package carries an idea, and my job is to give that idea
              a form people remember.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              My philosophy is simple:{" "}
              <strong className="text-ink">research deeply, sketch fast, refine
              relentlessly.</strong>{" "}
              Bold color, confident type and generous whitespace do the talking —
              decoration never gets in the story&apos;s way.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink-soft">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-teal" /> {site.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Heart className="h-4 w-4 text-coral" /> Design, create, inspire
              </span>
            </div>
            <Link
              to="/contact"
              className={buttonVariants({ variant: "default", size: "lg", className: "mt-8" })}
            >
              Work With Me
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* expertise */}
      <section className="bg-cream-deep/60 py-16 md:py-20">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Areas of <span className="text-teal">Expertise</span>
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item) => (
              <RevealItem key={item.title}>
                <div className="group h-full rounded-4xl bg-white/80 p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className={`block h-3 w-12 rounded-full ${item.color} transition-all duration-300 group-hover:w-20`} />
                  <h3 className="mt-5 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{item.note}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* tools + interests */}
      <section className="container grid gap-12 py-16 md:grid-cols-2 md:py-20">
        <Reveal>
          <h2 className="flex items-center gap-3 text-2xl font-extrabold md:text-3xl">
            <Sparkles className="h-6 w-6 text-coral" aria-hidden />
            Software & Tools
          </h2>
          <ul className="mt-8 flex flex-wrap gap-4">
            {tools.map((tool) => (
              <li
                key={tool.name}
                title={tool.name}
                className={`flex h-14 w-14 items-center justify-center rounded-2xl font-display text-lg font-extrabold shadow-soft transition-transform duration-300 hover:-translate-y-1 ${tool.className}`}
              >
                {tool.short}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink/45">
            Daily toolkit — always exploring new creative software.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="flex items-center gap-3 text-2xl font-extrabold md:text-3xl">
            <LeafAccent className="h-7 text-teal" />
            Creative Interests
          </h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {interests.map((interest) => (
              <li
                key={interest}
                className="rounded-full border-2 border-ink/10 bg-white/60 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-coral hover:text-coral-deep"
              >
                {interest}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-ink-soft">
            Beyond the screen: nature walks, market photography and filling sketchbooks
            with letterforms.
          </p>
        </Reveal>
      </section>
    </>
  );
}
