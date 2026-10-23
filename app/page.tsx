import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Outliers } from "@/components/sections/outliers";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Walkthrough } from "@/components/sections/walkthrough";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Outliers />
      <Testimonials />
      <Pricing />
      <Faq />
      <Walkthrough />
    </>
  );
}
