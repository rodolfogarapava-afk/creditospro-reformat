import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame, Star, TrendingDown, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AllPlansHeader from "@/components/AllPlansHeader";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "@/components/ChatWidget";
import heartIcon from "@/assets/heart-gradient.png";

const AllPlans = () => {
  const navigate = useNavigate();

  const plans = [
    { credits: 10, pro: 4.90, perCredit: 0.49, firstPurchase: true, badge: "1ª COMPRA", checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-1" },
    { credits: 20, pro: 9.90, perCredit: 0.49, checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-2" },
    { credits: 30, pro: 13.90, perCredit: 0.46, checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-3" },
    { credits: 40, pro: 18.90, perCredit: 0.47, checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-4" },
    { credits: 50, pro: 21.90, perCredit: 0.44, checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-5" },
    { credits: 100, pro: 40.90, perCredit: 0.41, badge: "MAIS VENDIDO", checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-6" },
    { credits: 200, pro: 76.90, perCredit: 0.38, checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-7" },
    { credits: 300, pro: 108.90, perCredit: 0.36, checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-8" },
    { credits: 400, pro: 137.90, perCredit: 0.34, checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-9" },
    { credits: 500, pro: 163.90, perCredit: 0.33, badge: "MELHOR CUSTO", checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-10" },
    { credits: 600, pro: 195.90, perCredit: 0.33, checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-11" },
    { credits: 700, pro: 222.90, perCredit: 0.32, checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-12" },
    { credits: 800, pro: 250.90, perCredit: 0.31, checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-13" },
    { credits: 900, pro: 276.90, perCredit: 0.31, checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-14" },
    { credits: 1000, pro: 303.90, perCredit: 0.30, badge: "POPULAR", checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-15" },
    { credits: 2000, pro: 554.90, perCredit: 0.28, checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-16" },
    { credits: 3000, pro: 789.90, perCredit: 0.26, checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-17" },
    { credits: 4000, pro: 1015.90, perCredit: 0.25, checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-18" },
    { credits: 5000, pro: 1233.90, perCredit: 0.25, badge: "MÁXIMA ECONOMIA", checkoutUrl: "https://pix-lite-checkout.lovable.app/pay-19" },
  ];

  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case "1ª COMPRA":
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
      case "MAIS VENDIDO":
        return "bg-gradient-to-r from-orange-500 to-red-500 text-white";
      case "MELHOR CUSTO":
        return "bg-gradient-to-r from-purple-500 to-violet-500 text-white";
      case "POPULAR":
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
      case "MÁXIMA ECONOMIA":
        return "bg-gradient-to-r from-purple-500 to-violet-500 text-white";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AllPlansHeader />
      <WhatsAppButton />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary rounded-full animate-pulse">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Entrega em até 45min após confirmação de pagamento.
                </span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Tabela Completa de Créditos
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
              Confira todos os pacotes disponíveis.
            </p>
          </div>

          {/* Mobile Cards View */}
          <div className="block lg:hidden space-y-4 mb-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl border-2 p-4 relative ${
                  plan.badge === "MAIS VENDIDO"
                    ? "border-orange-500 bg-orange-50 dark:bg-orange-950/20"
                    : plan.badge
                    ? "border-purple-500 bg-purple-50 dark:bg-purple-950/20"
                    : "border-border bg-card"
                }`}
              >
                {plan.badge && (
                  <Badge className={`absolute -top-3 left-4 ${getBadgeStyle(plan.badge)} px-3 py-1 text-xs`}>
                    {plan.badge === "MAIS VENDIDO" && <Star className="h-3 w-3 mr-1" />}
                    {plan.badge === "MÁXIMA ECONOMIA" && <TrendingDown className="h-3 w-3 mr-1" />}
                    {plan.badge === "1ª COMPRA" && <Sparkles className="h-3 w-3 mr-1" />}
                    {plan.badge}
                  </Badge>
                )}
                
                <div className="flex justify-between items-start mb-3 mt-2">
                  <div>
                    <span className="text-xl font-bold flex items-center gap-2">
                      <img src={heartIcon} alt="heart" className="w-5 h-5 inline-block" />
                      {plan.credits.toLocaleString("pt-BR")} Créditos
                    </span>
                    {plan.firstPurchase && (
                      <p className="text-xs text-muted-foreground italic mt-1">
                        Apenas 1ª compra
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                      R$ {plan.pro.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    R$ {plan.perCredit.toFixed(2).replace(".", ",")}/crédito
                  </div>
                </div>

                <Button
                  onClick={() => plan.checkoutUrl && window.open(plan.checkoutUrl, '_blank')}
                  className={`w-full ${
                    plan.badge === "MAIS VENDIDO"
                      ? "bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90"
                      : "bg-foreground hover:bg-foreground/90"
                  }`}
                >
                  Selecionar
                </Button>
                
                <div className="mt-3 text-xs text-muted-foreground space-y-1">
                  <p className="flex items-center gap-1">
                    <span className="text-success">✓</span> Entrega em até 45min
                  </p>
                  <p className="flex items-center gap-1">
                    <span className="text-success">✓</span> Suporte via chat
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block max-w-6xl mx-auto mb-8 overflow-hidden rounded-2xl border-2 border-border shadow-lg">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="text-base md:text-lg font-semibold">Créditos</TableHead>
                    <TableHead className="text-base md:text-lg font-semibold">Preço</TableHead>
                    <TableHead className="text-base md:text-lg font-semibold">Por Crédito</TableHead>
                    <TableHead className="text-base md:text-lg font-semibold text-right">Ação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {plans.map((plan, index) => (
                    <TableRow
                      key={index}
                      className={`${
                        plan.badge === "MAIS VENDIDO"
                          ? "bg-orange-50 dark:bg-orange-950/20 border-l-4 border-l-orange-500"
                          : plan.badge
                          ? "bg-purple-50 dark:bg-purple-950/20 border-l-4 border-l-purple-500"
                          : ""
                      }`}
                    >
                      <TableCell className="font-medium text-base md:text-lg">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <img src={heartIcon} alt="heart" className="w-5 h-5 inline-block" />
                            {plan.credits.toLocaleString("pt-BR")} Créditos
                            {plan.badge && (
                              <Badge className={`${getBadgeStyle(plan.badge)} px-2 py-0.5 text-[10px]`}>
                                {plan.badge}
                              </Badge>
                            )}
                          </div>
                          {plan.firstPurchase && (
                            <p className="text-xs text-muted-foreground italic">
                              Apenas 1ª compra
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                        R$ {plan.pro.toFixed(2).replace(".", ",")}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        R$ {plan.perCredit.toFixed(2).replace(".", ",")}/crédito
                      </TableCell>
                      <TableCell className="text-right">
                        <Button 
                          onClick={() => plan.checkoutUrl && window.open(plan.checkoutUrl, '_blank')} 
                          size="sm"
                          className={
                            plan.badge === "MAIS VENDIDO"
                              ? "bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90"
                              : ""
                          }
                        >
                          Selecionar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/")}
              className="px-8"
            >
              Voltar
            </Button>
            <Button
              size="lg"
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const element = document.getElementById("como-funciona");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }, 100);
              }}
              className="bg-gradient-to-r from-primary to-cyan-400 hover:opacity-90 text-white px-8"
            >
              Como funciona
            </Button>
          </div>
        </div>
      </div>
      <ChatWidget />
    </div>
  );
};

export default AllPlans;