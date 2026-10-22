import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

/**
 * useLightbox — minimal shared image-preview used ONLY by gallery images.
 *
 * The page renders `open({ src, alt, caption, layoutId })` on click and
 * mounts `{lightbox}` once. The enlarged image shares the thumbnail's
 * `layoutId`, so Framer Motion animates it out of its original position
 * and back again when closed (click the image, the backdrop, the close
 * button, or press Escape).
 */
export function useLightbox() {
  const [active, setActive] = React.useState(null);
  const reduce = useReducedMotion();

  const open = React.useCallback((item) => setActive(item), []);
  const close = React.useCallback(() => setActive(null), []);

  const lightbox = (
    <AnimatePresence>
      {active && (
        <LightboxOverlay key="lightbox" item={active} reduce={reduce} onClose={close} />
      )}
    </AnimatePresence>
  );

  return { open, lightbox };
}

function LightboxOverlay({ item, onClose, reduce }) {
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center gap-4 bg-ink/85 p-6 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.caption ? `Enlarged image: ${item.caption}` : "Enlarged image"}
    >
      <motion.img
        src={item.src}
        alt={item.alt || ""}
        layoutId={reduce ? undefined : item.layoutId}
        onClick={onClose}
        draggable={false}
        className="h-auto max-h-[82vh] w-auto max-w-[92vw] cursor-zoom-out rounded-3xl bg-cream object-contain shadow-lift"
        initial={reduce ? { opacity: 0, scale: 0.96 } : undefined}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
      />
      {item.caption ? (
        <p className="pointer-events-none text-sm font-semibold text-cream/90">
          {item.caption}
        </p>
      ) : null}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image preview"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-coral"
      >
        <X className="h-5 w-5" />
      </button>
    </motion.div>
  );
}
