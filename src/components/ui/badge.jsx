import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] transition-colors",
  {
    variants: {
      variant: {
        default: "bg-ink/5 text-ink",
        coral: "bg-coral/15 text-coral-deep",
        teal: "bg-teal/15 text-teal-deep",
        sunny: "bg-sunny/25 text-ink",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
