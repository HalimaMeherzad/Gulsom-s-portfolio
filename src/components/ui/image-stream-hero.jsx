import React from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* ImageStreamHero                                                     */
/* Two mirrored streams of artwork flowing through a 3D perspective    */
/* corridor. Cards emerge from a central vanishing point, expand       */
/* toward the viewer and drift outward, then fade at the edges.        */
/*                                                                     */
/* Techniques: CSS keyframes + CSS custom properties, container        */
/* queries (cqi units), CSS perspective transforms, mirrored streams   */
/* and a full prefers-reduced-motion fallback (static scrollable       */
/* strip). No WebGL — cheap, compositor-driven animation only.         */
/*                                                                     */
/* Props:                                                              */
/*  images  string[]   artwork sources cycling through both streams    */
/*  cards   number     cards per stream (total = cards * 2)            */
/*  speed   number     1 = one 16s cycle; higher = faster              */
/*  axis    "x"|"y"    corridor orientation                            */
/*  path    "in"|"out" flow direction relative to the vanishing point  */
/*  children, className                                                */
/* ------------------------------------------------------------------ */

const STREAMS = 2;

export default function ImageStreamHero({
  images,
  cards = 4,
  speed = 1,
  axis = "x",
  path = "in",
  children,
  className,
}) {
  const cycle = 16 / Math.max(0.25, speed);

  if (!images.length) return null;

  const streamCards = [];
  for (let s = 0; s < STREAMS; s += 1) {
    for (let i = 0; i < cards; i += 1) {
      streamCards.push({
        key: `s${s}-${i}`,
        src: images[(s * cards + i) % images.length],
        stream: s,
        index: i,
      });
    }
  }

  return (
    <section
      className={cn(
        "ish-root relative isolate overflow-hidden",
        axis === "x" ? "h-[clamp(420px,68vh,640px)]" : "h-[clamp(520px,80vh,760px)]",
        className,
      )}
    >
      <style>{styles}</style>

      {/* 3D corridor — decorative, hidden from assistive tech */}
      <div className="ish-stage absolute inset-0" aria-hidden data-axis={axis}>
        {streamCards.map(({ key, src, stream, index }) => {
          const side = stream === 0 ? -1 : 1;
          const spread = index - (cards - 1) / 2; // fan cards apart within a stream
          const style = {
            "--dur": `${cycle.toFixed(2)}s`,
            "--delay": `${(-(cycle / cards) * index - (cycle / (cards * 2)) * stream).toFixed(2)}s`,
            "--side": side,
            "--spread": spread,
            "--dir": path === "out" ? "reverse" : "normal",
          };
          return (
            <div key={key} className="ish-card" style={style}>
              <img src={src} alt="" loading="lazy" decoding="async" draggable={false} />
            </div>
          );
        })}
      </div>

      {/* readability veil + edge fade */}
      <div className="ish-veil pointer-events-none absolute inset-0" aria-hidden />

      {children ? (
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center [&>*]:pointer-events-auto">
          {children}
        </div>
      ) : null}
    </section>
  );
}

/* ------------------------------------------------------------------ */

const styles = /* css */ `
.ish-root {
  container-type: inline-size;
}

.ish-stage {
  perspective: 900px;
  transform-style: preserve-3d;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}

.ish-card {
  position: absolute;
  left: 50%;
  top: 50%;
  width: clamp(130px, 17cqi, 250px);
  aspect-ratio: 3 / 4;
  border-radius: calc(0.4rem + 1.4cqi);
  overflow: hidden;
  box-shadow: 0 24px 60px -20px rgb(52 52 74 / 0.45);
  outline: 3px solid rgb(255 255 255 / 0.65);
  outline-offset: -3px;
  will-change: transform, opacity;
  animation: ish-flow-x var(--dur) linear infinite;
  animation-delay: var(--delay);
  animation-direction: var(--dir);
  backface-visibility: hidden;
}

.ish-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* vertical corridor variant */
.ish-stage[data-axis="y"] .ish-card {
  animation-name: ish-flow-y;
}

/*
 * Geometry: each card travels from deep behind the vanishing point
 * (translateZ -2600px, dead center) toward and slightly past the viewer
 * (+260px). --side mirrors the horizontal drift per stream (-1 / +1),
 * --spread fans siblings apart, so the two streams form one continuous
 * braided corridor. cqi drift is relative to the container, so the
 * layout can never overflow horizontally: the root clips everything.
 */
@keyframes ish-flow-x {
  0% {
    transform: translate(-50%, -50%)
      translate3d(
        calc((var(--side) * 1.5 + var(--spread) * 0.9) * 5cqi),
        calc(var(--spread) * -2.2cqi),
        -2600px
      )
      rotateY(calc(var(--side) * -6deg));
    opacity: 0;
  }
  9% { opacity: 1; }
  88% { opacity: 1; }
  100% {
    transform: translate(-50%, -50%)
      translate3d(
        calc((var(--side) * 1.5 + var(--spread) * 0.9) * 26cqi),
        calc(var(--spread) * -9cqi),
        260px
      )
      rotateY(calc(var(--side) * -14deg));
    opacity: 0;
  }
}

@keyframes ish-flow-y {
  0% {
    transform: translate(-50%, -50%)
      translate3d(
        calc(var(--spread) * 4cqi),
        calc((var(--side) * 1.5 + var(--spread) * 0.6) * 6cqi),
        -2600px
      );
    opacity: 0;
  }
  9% { opacity: 1; }
  88% { opacity: 1; }
  100% {
    transform: translate(-50%, -50%)
      translate3d(
        calc(var(--spread) * 12cqi),
        calc((var(--side) * 1.5 + var(--spread) * 0.6) * 30cqi),
        260px
      );
    opacity: 0;
  }
}

/* center veil keeps overlaid titles readable over the moving imagery */
.ish-veil {
  background:
    radial-gradient(ellipse 60% 55% at 50% 50%, rgb(255 248 232 / 0.92) 0%, rgb(255 248 232 / 0.55) 55%, transparent 78%),
    linear-gradient(to bottom, rgb(255 248 232 / 0.35), transparent 30%, transparent 70%, rgb(255 248 232 / 0.55));
}

/* reduced motion: freeze into a calm, horizontally scrollable strip */
@media (prefers-reduced-motion: reduce) {
  .ish-stage {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    overflow-x: auto;
    padding: 2rem clamp(1rem, 6cqi, 4rem);
    perspective: none;
    mask-image: none;
    -webkit-mask-image: none;
    scrollbar-width: thin;
  }
  .ish-card {
    position: static;
    flex: 0 0 auto;
    transform: none !important;
    animation: none !important;
    opacity: 1 !important;
    width: clamp(120px, 22cqi, 220px);
  }
}
`;
