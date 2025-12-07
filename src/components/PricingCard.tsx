import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Flame, Star, Zap, TrendingDown, Sparkles } from "lucide-react";
import heartIcon from "@/assets/heart-gradient.png";

interface PricingCardProps {
  credits: number;
  proPrice: number;
  perCredit: number;
  badge?: "bestseller" | "special" | "hot" | "economy";
  firstPurchaseOnly?: boolean;
  featured?: boolean;
  checkoutUrl?: string;
  officialPrice?: number;
  savings?: number;
  discount?: number;
  sold?: number;
}

const PricingCard = ({
  credits,
  proPrice,
  perCredit,
  badge,
  firstPurchaseOnly,
  featured,
  checkoutUrl
}: PricingCardProps) => {
  const getBadgeContent = () => {
    switch (badge) {
      case "bestseller":
        return (
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-3 py-1">
            <Star className="w-3 h-3 mr-1" />
            MAIS VENDIDO
          </Badge>
        );
      case "special":
        return (
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-violet-500 text-white border-0 px-3 py-1">
            <Zap className="w-3 h-3 mr-1" />
            MELHOR CUSTO
          </Badge>
        );
      case "hot":
        return (
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-3 py-1">
            <Sparkles className="w-3 h-3 mr-1" />
            1ª COMPRA
          </Badge>
        );
      case "economy":
        return (
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-violet-500 text-white border-0 px-3 py-1">
            <TrendingDown className="w-3 h-3 mr-1" />
            MÁXIMA ECONOMIA
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative rounded-2xl border-2 p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        featured
          ? "border-primary bg-gradient-to-br from-primary/5 to-cyan-400/5 shadow-lg md:scale-105"
          : badge === "bestseller"
          ? "border-orange-500 bg-orange-50 dark:bg-orange-950/20"
          : "border-border bg-card hover:border-primary/50"
      }`}
    >
      {getBadgeContent()}

      {/* Credits */}
      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 mt-4 flex items-center gap-2">
        <img src={heartIcon} alt="heart" className="w-6 h-6" />
        {credits.toLocaleString("pt-BR")} Créditos
      </h3>

      {firstPurchaseOnly && (
        <p className="text-xs sm:text-sm text-muted-foreground mb-4">Apenas 1ª compra</p>
      )}

      {/* Prices */}
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            R$ {proPrice.toFixed(2).replace(".", ",")}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            R$ {perCredit.toFixed(2).replace(".", ",")}/crédito
          </p>
        </div>
      </div>

      {/* CTA */}
      <Button 
        onClick={() => checkoutUrl && window.open(checkoutUrl, '_blank')}
        className={`w-full py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 ${
          featured
            ? "bg-gradient-to-r from-primary to-cyan-400 hover:opacity-90 text-white shadow-lg"
            : badge === "bestseller"
            ? "bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white"
            : "bg-foreground hover:bg-foreground/90 text-background"
        }`}
      >
        Selecionar
      </Button>

      {/* Features */}
      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
        <p className="flex items-center gap-2">
          <Check className="w-4 h-4 text-success" />
          Entrega em até 45min
        </p>
        <p className="flex items-center gap-2">
          <Check className="w-4 h-4 text-success" />
          Suporte via chat
        </p>
      </div>
    </div>
  );
};

export default PricingCard;