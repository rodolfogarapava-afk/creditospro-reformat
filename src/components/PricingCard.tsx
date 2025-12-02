import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Flame, Star, Zap } from "lucide-react";
import heartIcon from "@/assets/heart-gradient.png";

interface PricingCardProps {
  credits: number;
  officialPrice: number;
  proPrice: number;
  savings: number;
  discount: number;
  sold: number;
  badge?: "bestseller" | "special" | "hot";
  firstPurchaseOnly?: boolean;
  featured?: boolean;
}

const PricingCard = ({
  credits,
  officialPrice,
  proPrice,
  savings,
  discount,
  sold,
  badge,
  firstPurchaseOnly,
  featured
}: PricingCardProps) => {
  const getBadgeContent = () => {
    switch (badge) {
      case "bestseller":
        return (
          <Badge className="absolute -top-3 -right-3 bg-gradient-to-r from-accent to-orange-500 text-white border-0 px-3 py-1">
            <Star className="w-3 h-3 mr-1" />
            MAIS VENDIDO
          </Badge>
        );
      case "special":
        return (
          <Badge className="absolute -top-3 -right-3 bg-gradient-to-r from-accent to-orange-500 text-white border-0 px-3 py-1">
            <Zap className="w-3 h-3 mr-1" />
            OFERTA ESPECIAL
          </Badge>
        );
      case "hot":
        return (
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-accent text-white border-0 px-3 py-1">
            <Flame className="w-3 h-3 mr-1" />
            HOT
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
          : "border-border bg-card hover:border-primary/50"
      }`}
    >
      {getBadgeContent()}
      
      {/* Discount badge */}
      <div className="inline-block px-3 py-1 rounded-full bg-success/10 border border-success/20 mb-4">
        <span className="text-sm font-bold text-success">{discount}% OFF</span>
      </div>

      {/* Credits */}
      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
        {credits.toLocaleString("pt-BR")} Créditos
      </h3>

      {firstPurchaseOnly && (
        <p className="text-xs sm:text-sm text-muted-foreground mb-4">Válido apenas na primeira compra</p>
      )}

      {/* Prices */}
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
            Preço oficial <img src={heartIcon} alt="heart" className="w-4 h-4 inline-block" />
          </p>
          <p className="text-lg text-muted-foreground line-through">
            R$ {officialPrice.toFixed(2).replace(".", ",")}
          </p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
            Preço LittleShark 🎯
          </p>
          <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            R$ {proPrice.toFixed(2).replace(".", ",")}
          </p>
        </div>

        <div className="flex items-center gap-2 p-3 rounded-lg bg-success/10 border border-success/20">
          <Check className="w-4 h-4 text-success flex-shrink-0" />
          <p className="text-sm font-medium text-success">
            Você economiza: R$ {savings.toFixed(2).replace(".", ",")}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between mb-6 text-sm">
        <span className="text-muted-foreground">+{sold} Vendido(s)</span>
        <span className="text-success font-medium">+Estoque ilimitado</span>
      </div>

      {/* CTA */}
      <Button 
        className={`w-full py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 ${
          featured
            ? "bg-gradient-to-r from-primary to-cyan-400 hover:opacity-90 text-white shadow-lg"
            : "bg-primary hover:bg-primary/90 text-primary-foreground"
        }`}
      >
        Selecionar
      </Button>
    </div>
  );
};

export default PricingCard;
