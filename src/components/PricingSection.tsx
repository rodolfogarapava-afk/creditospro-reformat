import PricingCard from "./PricingCard";

const PricingSection = () => {
  return (
    <section id="planos" className="py-20 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha seu plano
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todos os planos incluem entrega rápida e estoque ilimitado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <PricingCard
            credits={50}
            officialPrice={72.50}
            proPrice={9.90}
            savings={62.60}
            discount={86}
            sold={55}
            badge="bestseller"
            firstPurchaseOnly
            featured
          />

          <PricingCard
            credits={100}
            officialPrice={145.00}
            proPrice={29.90}
            savings={115.10}
            discount={79}
            sold={26}
            badge="special"
            firstPurchaseOnly
          />

          <PricingCard
            credits={200}
            officialPrice={290.00}
            proPrice={84.90}
            savings={205.10}
            discount={71}
            sold={6}
          />

          <PricingCard
            credits={500}
            officialPrice={725.00}
            proPrice={147.90}
            savings={577.10}
            discount={80}
            sold={4}
          />

          <PricingCard
            credits={1000}
            officialPrice={1450.00}
            proPrice={249.90}
            savings={1200.10}
            discount={83}
            sold={9}
          />

          <PricingCard
            credits={5000}
            officialPrice={7250.00}
            proPrice={921.90}
            savings={6328.10}
            discount={87}
            sold={0}
            badge="hot"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
