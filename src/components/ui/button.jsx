import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-all duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "bg-coral text-cream shadow-glow hover:bg-coral-deep hover:shadow-lift",
        dark: "bg-ink text-cream shadow-soft hover:bg-ink-soft",
        outline:
          "border-2 border-ink/15 bg-white/60 text-ink backdrop-blur hover:border-ink/40 hover:bg-white",
        teal: "bg-teal text-cream shadow-soft hover:bg-teal-deep",
        ghost: "text-ink hover:bg-ink/5",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-6 text-sm",
        lg: "h-14 px-8 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(buttonVariants({ variant, size }), className)}
    {...props}
  />
));
Button.displayName = "Button";
