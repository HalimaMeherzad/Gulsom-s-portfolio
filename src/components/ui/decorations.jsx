import { cn } from "@/lib/utils";

/** Decorative brand shapes — pure SVG, aria-hidden, zero layout cost. */

export function Squiggle({ className }) {
  return (
    <svg viewBox="0 0 140 40" fill="none" aria-hidden className={cn("h-8 w-auto", className)}>
      <path
        d="M6 28c10-24 18-24 28 0s18 24 28 0 18-24 28 0 18 24 28 0"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LeafAccent({ className }) {
  return (
    <svg viewBox="0 0 80 120" fill="none" aria-hidden className={cn("h-24 w-auto", className)}>
      <path d="M40 112V30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M40 60C14 56 6 36 8 10c26 2 44 16 32 50z" fill="currentColor" opacity="0.9" />
      <path d="M40 84c24-2 38-18 40-44-24 0-44 12-40 44z" fill="currentColor" opacity="0.65" />
    </svg>
  );
}

export function Blob({ className }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className}>
      <path
        d="M45 30C70 8 120 4 152 26s52 76 34 116-78 66-124 52S14 138 20 96s6-44 25-66z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Sparkle({ className }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={cn("h-6 w-6", className)}>
      <path d="M20 2c2 10 6 14 16 18-10 4-14 8-16 18-2-10-6-14-16-18C14 16 18 12 20 2z" fill="currentColor" />
    </svg>
  );
}

export function ArrowBadge({ className }) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink/10 text-ink transition-all duration-300 group-hover:border-coral group-hover:bg-coral group-hover:text-cream",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-4 w-4">
        <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
