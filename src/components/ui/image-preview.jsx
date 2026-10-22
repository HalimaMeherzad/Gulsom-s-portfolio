import React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

/**
 * ImagePreview — full-screen, uncropped view of one project.gallery item.
 * Rendered into document.body so the animated page wrapper's transform
 * cannot break position:fixed. z-[70] sits above the navbar (z-50) and
 * below the custom cursor (z-[90]).
 */
export function ImagePreview({ item, open, onClose }) {
  const reduce = useReducedMotion();
  const dialogRef = React.useRef(null);

  // Prevent the page behind the overlay from scrolling, without layout shift.
  React.useEffect(() => {
    if (!open) return undefined;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  const duration = reduce ? 0 : 0.32;
  const ease = [0.21, 0.47, 0.32, 0.98];

  return createPortal(
    <AnimatePresence>
      {open && item && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={item.caption || item.alt}
          tabIndex={-1}
          outline="none"
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration, ease }}
        >
          {/* Backdrop — clicking it closes the preview. */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="absolute inset-0 h-full w-full cursor-zoom-out bg-ink/80 backdrop-blur-sm"
          />

          <motion.figure
            className="relative z-10 flex max-h-[86vh] w-full max-w-6xl cursor-zoom-out flex-col items-center justify-center"
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration, ease }}
          >
            {/* Clicking the image itself also closes and returns to the card. */}
            <img
              src={item.src}
              alt={item.alt}
              onClick={onClose}
              className="max-h-[78vh] w-auto max-w-full rounded-4xl bg-cream object-contain shadow-lift"
            />
            {item.caption && (
              <figcaption className="mt-4 rounded-full bg-cream/10 px-5 py-2 text-sm font-bold text-cream backdrop-blur">
                {item.caption}
              </figcaption>
            )}
          </motion.figure>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/15 text-cream backdrop-blur transition-colors duration-300 hover:bg-coral sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
