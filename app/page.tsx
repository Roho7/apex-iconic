import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StorySection } from "@/components/sections/story-section";
import { ProcessSection } from "@/components/sections/process-section";
import { CTAStrip } from "@/components/sections/cta-strip";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <StorySection />
      <ProcessSection />
      <CTAStrip />
    </main>
  );
}