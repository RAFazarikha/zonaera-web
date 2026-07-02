import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-32 md:gap-40 pb-32 md:pb-40">
        <TrustedBy />
        <Services />
        <WhyUs />
      </div>

      <Portfolio />

      <div className="flex flex-col gap-32 md:gap-40 py-32 md:py-40">
        <Process />
        <TechStack />
        <Testimonials />
        <Pricing />
        <FAQ />
      </div>

      <CTA />
    </>
  );
}