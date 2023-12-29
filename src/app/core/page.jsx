import { CallToAction } from "@/components/atoms/CallToAction";
import { Faqs } from "@/components/atoms/Faqs";
import { Footer } from "@/components/atoms/Footer";
import { Header } from "@/components/atoms/Header";
import { Hero } from "@/components/atoms/Hero";
import { Pricing } from "@/components/atoms/Pricing";
import { PrimaryFeatures } from "@/components/atoms/PrimaryFeatures";
import { SecondaryFeatures } from "@/components/atoms/SecondaryFeatures";
import { Testimonials } from "@/components/atoms/Testimonials";

export default function Core() {
  return (
    <>
      <main>
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
