import { Clock, Shield, Zap, TrendingDown } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entenda de forma simples como o Créditos Pro opera.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Process explanation */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Como funciona a compra de créditos</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O Créditos Pro permite comprar créditos para usar em projetos Lovable com preços reduzidos. 
              A compra é realizada através de um checkout externo que você escolherá posteriormente. 
              Após o pagamento, os créditos são entregues manualmente em até alguns minutos, 
              dependendo do fluxo de atendimento.
            </p>
          </div>

          {/* Price comparison */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Comparativo com Preço Oficial</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="rounded-2xl border-2 border-border bg-card p-8 text-center">
                <p className="text-sm text-muted-foreground mb-2">Preço Oficial Lovable</p>
                <p className="text-2xl font-semibold mb-4">100 créditos</p>
                <p className="text-5xl font-bold text-muted-foreground line-through mb-2">
                  R$ 145,00
                </p>
              </div>
              
              <div className="rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/5 to-cyan-400/5 p-8 text-center relative overflow-hidden shadow-lg">
                <div className="absolute top-4 right-4">
                  <TrendingDown className="w-6 h-6 text-success" />
                </div>
                <p className="text-sm text-primary font-semibold mb-2">Preço Créditos Pro</p>
                <p className="text-2xl font-semibold mb-4">100 créditos</p>
                <p className="text-5xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-2">
                  R$ 29,90
                </p>
                <div className="inline-block px-4 py-2 rounded-full bg-success/10 border border-success/20">
                  <p className="text-sm text-success font-bold">Economia de 79%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service hours */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Horário de Atendimento</h3>
            <div className="max-w-2xl mx-auto rounded-2xl border-2 border-border bg-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground">
                  A entrega em até 1 hora está disponível no seguinte horário:
                </p>
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="flex justify-between items-center py-4">
                  <span className="text-lg font-semibold">Segunda a Segunda</span>
                  <span className="text-lg font-bold text-primary">09:00 às 00:00</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6 flex items-start gap-2">
                <Shield className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>
                  Atendimento disponível todos os dias da semana, incluindo fins de semana e feriados.
                </span>
              </p>
            </div>
          </div>

          {/* Key features */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-md">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Entrega Rápida</h4>
              <p className="text-sm text-muted-foreground">
                Créditos em até 1 hora durante o horário de atendimento
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-md">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-success to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">100% Seguro</h4>
              <p className="text-sm text-muted-foreground">
                Sistema oficial de indicação da Lovable
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-md">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Economia Real</h4>
              <p className="text-sm text-muted-foreground">
                Até 87% de desconto comparado ao preço oficial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
