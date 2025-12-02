import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PricingSection />
      <FAQ />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
