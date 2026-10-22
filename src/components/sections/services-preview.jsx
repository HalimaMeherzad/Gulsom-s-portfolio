import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="relative bg-cream-deep/60 py-20 md:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span className="h-px w-8 bg-sunny" aria-hidden />
            What I Do
            <span className="h-px w-8 bg-sunny" aria-hidden />
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            Services with a <span className="text-coral">point of view</span>
          </h2>
          <p className="mt-4 text-ink-soft">
            Creative solutions to help your brand stand out — from first sketch to
            final file.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.id}>
              <article
                className={`group relative flex h-full flex-col rounded-4xl p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift ${service.accent}`}
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${service.iconWrap}`}
                >
                  <service.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-90">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5 text-xs font-semibold opacity-80">
                  {service.deliverables.slice(0, 3).map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      {d}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 text-center">
          <Link to="/services" className={buttonVariants({ variant: "outline", size: "lg" })}>
            All Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
