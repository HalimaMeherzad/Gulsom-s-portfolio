import { AboutPreview } from "@/components/sections/about-preview";
import { CtaBand } from "@/components/sections/cta-band";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { ProcessBand } from "@/components/sections/process-band";
import { ServicesPreview } from "@/components/sections/services-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutPreview />
      <ServicesPreview />
      <ProcessBand />
      <CtaBand />
    </>
  );
}
