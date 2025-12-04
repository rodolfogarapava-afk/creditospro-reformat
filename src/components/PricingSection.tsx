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
          <PricingCard credits={50} officialPrice={72.50} proPrice={9.90} savings={62.60} discount={86} sold={56} badge="bestseller" firstPurchaseOnly featured />

          <PricingCard credits={100} officialPrice={145.00} proPrice={19.90} savings={125.10} discount={86} sold={26} badge="special" firstPurchaseOnly />

          <PricingCard credits={200} officialPrice={290.00} proPrice={38.90} savings={251.10} discount={87} sold={6} />

          <PricingCard credits={500} officialPrice={725.00} proPrice={93.90} savings={631.10} discount={87} sold={4} />

          <PricingCard credits={1000} officialPrice={1450.00} proPrice={186.90} savings={1263.10} discount={87} sold={9} />

          <PricingCard credits={5000} officialPrice={7250.00} proPrice={934.90} savings={6315.10} discount={87} sold={0} badge="hot" />
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