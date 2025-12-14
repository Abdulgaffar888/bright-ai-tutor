import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { DemoSection } from "@/components/home/DemoSection";
import { PricingPreviewSection } from "@/components/home/PricingPreviewSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <DemoSection />
        <PricingPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
