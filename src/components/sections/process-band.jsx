import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { processSteps } from "@/data/services";
import { cn } from "@/lib/utils";

export function ProcessBand({ title = "How We Work", eyebrow = "The Process" }) {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <RevealGroup className="relative">
          <div className="text-center">
            <p className="eyebrow justify-center">
              <span className="h-px w-8 bg-teal" aria-hidden />
              {eyebrow}
              <span className="h-px w-8 bg-teal" aria-hidden />
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
          </div>

          {/* connector line — desktop only */}
          <div
            className="absolute left-[12%] right-[12%] top-[calc(50%_+_2.4rem)] hidden h-0.5 border-t-2 border-dashed border-ink/15 lg:block"
            aria-hidden
          />

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <RevealItem key={step.number} className="relative text-center">
                <span
                  className={cn(
                    "relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full font-display text-lg font-extrabold text-cream shadow-soft",
                    step.dot,
                  )}
                >
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-[26ch] text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
