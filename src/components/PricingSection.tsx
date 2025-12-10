import PricingCard from "./PricingCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const PricingSection = () => {
  const navigate = useNavigate();
  return <section id="planos" className="pt-4 pb-12 md:pb-20 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          <PricingCard credits={100} officialPrice={145.00} proPrice={9.90} savings={135.10} discount={93} sold={56} badge="hot" firstPurchaseOnly featured checkoutUrl="https://pix-lite-checkout.lovable.app/pay-1" />

          <PricingCard credits={200} officialPrice={290.00} proPrice={18.90} savings={271.10} discount={93} sold={26} badge="special" firstPurchaseOnly checkoutUrl="https://pix-lite-checkout.lovable.app/pay-2" />

          <PricingCard credits={500} officialPrice={725.00} proPrice={45.90} savings={679.10} discount={94} sold={6} checkoutUrl="https://pix-lite-checkout.lovable.app/pay-5" />

          <PricingCard credits={1000} officialPrice={1450.00} proPrice={89.90} savings={1360.10} discount={94} sold={4} checkoutUrl="https://pix-lite-checkout.lovable.app/pay-10" />

          <PricingCard credits={2000} officialPrice={2900.00} proPrice={176.90} savings={2723.10} discount={94} sold={9} checkoutUrl="https://pix-lite-checkout.lovable.app/pay-11" />

          <PricingCard credits={5000} officialPrice={7250.00} proPrice={439.90} savings={6810.10} discount={94} sold={0} badge="bestseller" checkoutUrl="https://pix-lite-checkout.lovable.app/pay-14" />
        </div>

        {/* Ver todos os planos button */}
        <div className="flex justify-center mt-8 md:mt-12 px-2">
          <Button onClick={() => navigate("/planos")} variant="outline" size="lg" className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg hover:border-primary hover:text-primary transition-all">
            Ver todos os planos
          </Button>
        </div>
      </div>
    </section>;
};
export default PricingSection;