import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Blob } from "@/components/ui/decorations";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-20">
      <Blob className="pointer-events-none absolute -left-24 top-10 h-72 w-72 text-sunny/40" aria-hidden />
      <div className="container relative text-center">
        <p className="font-display text-[clamp(6rem,18vw,12rem)] font-extrabold leading-none text-coral/25">
          404
        </p>
        <h1 className="-mt-6 text-3xl font-extrabold tracking-tight md:text-4xl">
          This page wandered off the grid.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          The artwork you&apos;re looking for doesn&apos;t exist — but the rest of the
          studio does.
        </p>
        <Link to="/" className={buttonVariants({ variant: "default", size: "lg", className: "mt-8" })}>
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
