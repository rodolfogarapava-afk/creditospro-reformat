import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AllPlansHeader from "@/components/AllPlansHeader";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "@/components/ChatWidget";
import heartIcon from "@/assets/heart-gradient.png";

const AllPlans = () => {
  const navigate = useNavigate();

  const plans = [
    { credits: 30, official: 43.50, pro: 5.90, discount: 86, sold: 0, firstPurchase: true, hot: true },
    { credits: 50, official: 72.50, pro: 9.90, discount: 86, sold: 56, firstPurchase: true },
    { credits: 100, official: 145.00, pro: 19.90, discount: 86, sold: 26, firstPurchase: true },
    { credits: 200, official: 290.00, pro: 38.90, discount: 87, sold: 6 },
    { credits: 300, official: 435.00, pro: 56.90, discount: 87, sold: 1 },
    { credits: 400, official: 580.00, pro: 75.90, discount: 87, sold: 0 },
    { credits: 500, official: 725.00, pro: 93.90, discount: 87, sold: 4 },
    { credits: 600, official: 870.00, pro: 112.90, discount: 87, sold: 0 },
    { credits: 700, official: 1015.00, pro: 130.90, discount: 87, sold: 0 },
    { credits: 800, official: 1160.00, pro: 149.90, discount: 87, sold: 0 },
    { credits: 900, official: 1305.00, pro: 167.90, discount: 87, sold: 0, contactOnly: true },
    { credits: 1000, official: 1450.00, pro: 186.90, discount: 87, sold: 0, contactOnly: true },
    { credits: 2000, official: 2900.00, pro: 373.90, discount: 87, sold: 0, contactOnly: true },
    { credits: 3000, official: 4350.00, pro: 560.90, discount: 87, sold: 0, contactOnly: true },
    { credits: 4000, official: 5800.00, pro: 747.90, discount: 87, sold: 0, contactOnly: true },
    { credits: 5000, official: 7250.00, pro: 934.90, discount: 87, sold: 0, contactOnly: true },
  ];

  const handleContact = () => {
    window.open('https://wa.me/5532997887529?text=Olá!%20Tenho%20interesse%20nos%20créditos%20Lovable.', '_blank');
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
                  Entrega em até 1 hora após confirmação de pagamento.
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
                className={`rounded-xl border-2 p-4 ${
                  plan.hot
                    ? "border-red-500 bg-red-50 dark:bg-red-950/20"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl font-bold flex items-center gap-2">
                        <img src={heartIcon} alt="heart" className="w-5 h-5 inline-block" />
                        {plan.credits.toLocaleString("pt-BR")} Créditos
                      </span>
                      {plan.hot && (
                        <Badge className="bg-red-500 hover:bg-red-600 text-white px-2 py-0.5 text-xs animate-pulse">
                          <Flame className="h-3 w-3 fill-white mr-1" />
                          HOT
                        </Badge>
                      )}
                    </div>
                    {plan.firstPurchase && (
                      <p className="text-xs text-muted-foreground italic">
                        Válido apenas na primeira compra
                      </p>
                    )}
                  </div>
                  <Badge className="bg-success/10 text-success hover:bg-success/20 border-success/20">
                    {plan.discount}% OFF
                  </Badge>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Preço Oficial:</span>
                    <span className="text-sm text-muted-foreground line-through">
                      R$ {plan.official.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Preço LittleShark:</span>
                    <span className="text-2xl font-bold text-primary">
                      R$ {plan.pro.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">
                      <span className="font-semibold text-primary">+{plan.sold}</span> Vendido(s)
                    </span>
                    <span className="text-success font-semibold">+Estoque ilimitado</span>
                  </div>
                </div>

                <Button
                  onClick={handleContact}
                  className="w-full bg-gradient-to-r from-primary to-cyan-400 hover:opacity-90"
                >
                  {plan.contactOnly ? "Entre em contato" : "Comprar"}
                </Button>
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
                    <TableHead className="text-base md:text-lg font-semibold">Preço Oficial</TableHead>
                    <TableHead className="text-base md:text-lg font-semibold">
                      Preço LittleShark
                    </TableHead>
                    <TableHead className="text-base md:text-lg font-semibold">Desconto</TableHead>
                    <TableHead className="text-base md:text-lg font-semibold">Vendas</TableHead>
                    <TableHead className="text-base md:text-lg font-semibold text-right">Ação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {plans.map((plan, index) => (
                    <TableRow
                      key={index}
                      className={`${
                        plan.hot
                          ? "bg-red-50 dark:bg-red-950/20 border-l-4 border-l-red-500"
                          : ""
                      }`}
                    >
                      <TableCell className="font-medium text-base md:text-lg">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <img src={heartIcon} alt="heart" className="w-5 h-5 inline-block" />
                            {plan.credits.toLocaleString("pt-BR")} Créditos
                          </div>
                          {plan.firstPurchase && (
                            <p className="text-xs text-muted-foreground italic">
                              Válido apenas na primeira compra
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm md:text-base text-muted-foreground line-through">
                        R$ {plan.official.toFixed(2).replace(".", ",")}
                      </TableCell>
                      <TableCell className="text-base md:text-lg text-primary font-bold">
                        R$ {plan.pro.toFixed(2).replace(".", ",")}
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-success/10 text-success hover:bg-success/20 border-success/20">
                          {plan.discount}% OFF
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-0.5 text-xs md:text-sm">
                          <span className="text-muted-foreground flex items-center gap-1">
                            <span className="font-semibold text-primary">+{plan.sold}</span> Vendido(s)
                            {plan.hot && (
                              <Badge className="bg-red-500 hover:bg-red-600 text-white px-1.5 py-0.5 text-[10px] animate-pulse">
                                <Flame className="h-2.5 w-2.5 fill-white mr-1" />
                                HOT
                              </Badge>
                            )}
                          </span>
                          <span className="text-success font-semibold">+Estoque ilimitado</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        {plan.contactOnly ? (
                          <Button onClick={handleContact} size="sm">
                            Entre em contato
                          </Button>
                        ) : (
                          <Button onClick={handleContact} size="sm">
                            Comprar
                          </Button>
                        )}
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
