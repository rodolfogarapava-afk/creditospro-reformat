import PricingCard from "./PricingCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();
  return (
    <section id="planos" className="pt-4 pb-12 md:pb-20 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          <PricingCard 
            credits={10} 
            proPrice={4.90} 
            perCredit={0.49}
            badge="hot" 
            firstPurchaseOnly 
            featured 
            checkoutUrl="https://pix-lite-checkout.lovable.app/pay-1" 
          />

          <PricingCard 
            credits={100} 
            proPrice={40.90} 
            perCredit={0.41}
            badge="bestseller" 
            checkoutUrl="https://pix-lite-checkout.lovable.app/pay-6" 
          />

          <PricingCard 
            credits={500} 
            proPrice={163.90} 
            perCredit={0.33}
            badge="special" 
            checkoutUrl="https://pix-lite-checkout.lovable.app/pay-10" 
          />

          <PricingCard 
            credits={1000} 
            proPrice={303.90} 
            perCredit={0.30}
            checkoutUrl="https://pix-lite-checkout.lovable.app/pay-15" 
          />

          <PricingCard 
            credits={3000} 
            proPrice={789.90} 
            perCredit={0.26}
            checkoutUrl="https://pix-lite-checkout.lovable.app/pay-17" 
          />

          <PricingCard 
            credits={5000} 
            proPrice={1233.90} 
            perCredit={0.25}
            badge="economy" 
            checkoutUrl="https://pix-lite-checkout.lovable.app/pay-19" 
          />
        </div>

        {/* Ver todos os planos button */}
        <div className="flex justify-center mt-8 md:mt-12 px-2">
          <Button 
            onClick={() => navigate("/planos")} 
            variant="outline" 
            size="lg" 
            className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg hover:border-primary hover:text-primary transition-all"
          >
            Ver todos os planos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;