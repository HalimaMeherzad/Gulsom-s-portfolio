import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Blob, LeafAccent, Sparkle, Squiggle } from "@/components/ui/decorations";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import gulsomMeherzad from "@/assets/Gulsom/Gulsom Meherzad.jpeg"
/* Verified editorial portrait photography (Unsplash). */
// const PORTRAIT =
//   "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=75";

export function Hero() {
  const reduce = useReducedMotion();
  const EASE = [0.21, 0.47, 0.32, 0.98];
  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section className="relative overflow-hidden">
      {/* atmospheric accents */}
      {/* <Blob
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 text-sunny/50 blur-[2px]"
        aria-hidden
      />
      <Blob
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 text-teal/25"
        aria-hidden
      /> */}
      <Sparkle className="pointer-events-none absolute left-[46%] top-16 hidden h-6 w-6 animate-floaty text-coral md:block" aria-hidden />

      <div className="container grid items-center gap-12 pb-20 pt-14 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:pb-28 md:pt-24">
        <div>
          <motion.p {...rise(0.05)} className="eyebrow">
            <span className="h-px w-8 bg-coral" aria-hidden />
            {site.role}
          </motion.p>

          <motion.h1
            {...rise(0.15)}
            className="mt-5 text-[clamp(2.75rem,7.5vw,5.25rem)] font-extrabold leading-[1.02] tracking-tight"
          >
            Ideas into
            <br />
            <span className="text-coral">Bold Visual</span>
            <br />
            Stories.
          </motion.h1>

          <motion.p
            {...rise(0.3)}
            className="mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
          >
            I&apos;m Gulsom — a graphic designer crafting meaningful brands, engaging
            visuals and creative experiences that help ideas stand out in a crowded
            world.
          </motion.p>

          <motion.div {...rise(0.45)} className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/projects" className={buttonVariants({ variant: "default", size: "lg" })}>
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Let&apos;s Collaborate
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink text-cream transition-transform duration-300 group-hover:rotate-45">
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </motion.div>

          <motion.div
            {...rise(0.6)}
            className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-ink shadow-soft backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={cn(
                  "absolute inline-flex h-full w-full rounded-full bg-teal opacity-60",
                  !reduce && "animate-ping",
                )}
              />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal" />
            </span>
            Available for freelance projects
          </motion.div>
        </div>

        {/* portrait composition */}
        <motion.div {...rise(0.35)} className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative">
            <div className="absolute -inset-4 -rotate-3 rounded-t-[9999px] rounded-b-[3rem] bg-sunny/70" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[9999px] rounded-b-[3rem] shadow-lift">
              <img
                src={gulsomMeherzad}
                alt="Portrait of Gulsom Meherzad, graphic designer"
                className="h-full w-full object-cover"
                width={900}
                height={1125}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            </div>

            <LeafAccent className="absolute -right-7 -top-4 h-24 -rotate-12 text-teal" aria-hidden />
            <Squiggle className="absolute -left-10 bottom-24 hidden h-8 -rotate-12 text-coral md:block" aria-hidden />

            <p className="script-accent absolute -bottom-6 -left-4 -rotate-6 md:-left-14">
              Design. Create.
              <br />
              Inspire.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        {...rise(0.8)}
        className="container hidden items-center gap-3 pb-10 text-xs font-bold uppercase tracking-[0.3em] text-ink-soft md:flex"
      >
        Scroll Down
        <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink/15">
          <ArrowDown className={cn("h-4 w-4", !reduce && "animate-bounce")} />
        </span>
      </motion.div>
    </section>
  );
}
