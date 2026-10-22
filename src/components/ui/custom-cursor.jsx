import React from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Desktop-only custom cursor: a small dot with a lagging ring that grows
 * over interactive elements. Disabled for touch devices, coarse pointers
 * and prefers-reduced-motion; never hides the native cursor, so text
 * selection and assistive tech keep working.
 */
export function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = React.useState(false);
  const [hovering, setHovering] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.5 });

  React.useEffect(() => {
    if (reduce) return undefined;
    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return undefined;
    setEnabled(true);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target;
      setHovering(Boolean(target?.closest("a, button, input, textarea, select, [data-cursor='hover']")));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [reduce, x, y, setEnabled]);

  if (!enabled || reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden [@media(pointer:fine)]:block" aria-hidden>
      <motion.div
        className={cn(
          "absolute left-0 top-0 -ml-4 -mt-4 h-8 w-8 rounded-full border-2 border-ink mix-blend-difference transition-[width,height,margin,background-color] duration-200",
          hovering && "ml-[-1.55rem] mt-[-1.55rem] h-12 w-12 border-coral bg-coral/20",
          pressed && "scale-90",
        )}
        style={{ x: ringX, y: ringY }}
      />
      <motion.div
        className="absolute left-0 top-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-coral mix-blend-difference"
        style={{ x, y }}
      />
    </div>
  );
}
