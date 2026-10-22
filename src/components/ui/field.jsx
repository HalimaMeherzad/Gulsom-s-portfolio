import React from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-2xl border-2 border-ink/10 bg-white px-5 py-3.5 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-teal focus:outline-none aria-[invalid=true]:border-coral";

export const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(fieldBase, className)} {...props} />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(fieldBase, "min-h-32 resize-y", className)} {...props} />
));
Textarea.displayName = "Textarea";

export const Select = React.forwardRef(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(fieldBase, "appearance-none bg-[length:1.1rem] bg-[right_1.25rem_center] bg-no-repeat pr-12", className)}
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2334344A' stroke-width='2.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
    }}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";
