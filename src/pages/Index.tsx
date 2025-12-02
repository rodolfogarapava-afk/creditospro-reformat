import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PricingSection />
      <HowItWorks />
      <FAQ limit={3} />
      <ChatWidget />
    </div>
  );
};

export default Index;
