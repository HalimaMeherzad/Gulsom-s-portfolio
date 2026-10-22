import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { ProcessBand } from "@/components/sections/process-band";
import { buttonVariants } from "@/components/ui/button";
import { Blob, Squiggle } from "@/components/ui/decorations";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden py-14 md:py-20">
        {/* <Blob className="pointer-events-none absolute -right-24 top-10 h-72 w-72 text-coral/25" aria-hidden /> */}
        <div className="container">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">
                <span className="text-coral">MY</span>
                Services
              </p>
              <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight">
                Creative solutions to help your brand{" "}
                <span className="text-teal">stand out.</span>
              </h1>
              <p className="mt-5 text-lg text-ink-soft">
                Focused services, honest process, finished files — no filler, no
                jargon. Pricing is scoped per project after we talk.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              {/* <Squiggle className="h-7 w-auto text-sunny" aria-hidden /> */}
              <Link to="/contact" className={buttonVariants({ variant: "default", size: "lg" })}>
                Work With Me
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <RevealItem key={service.id} className="h-full">
                <article
                  className={cn(
                    "group flex h-full flex-col rounded-4xl p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift",
                    service.accent,
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-2xl",
                      service.iconWrap,
                    )}
                  >
                    <service.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-bold">{service.title}</h2>
                  <p className="mt-2.5 text-sm leading-relaxed opacity-90">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 pt-1 text-sm font-semibold opacity-85">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2.5">
                        <Check className="h-4 w-4 shrink-0" aria-hidden />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold uppercase tracking-widest"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    Enquire
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <ProcessBand title="How We Work" eyebrow="Collaboration" />

      <section className="container pb-20 text-center md:pb-28">
        <Reveal>
          <p className="mx-auto max-w-md text-ink-soft">
            Not sure which service fits? Tell me about the idea — we&apos;ll figure out
            the shape of it together.
          </p>
          <Link
            to="/contact"
            className={buttonVariants({ variant: "dark", size: "lg", className: "mt-6" })}
          >
            Start the Conversation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
