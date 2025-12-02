import { Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Delivery badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-pulse">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Entrega em até 1 hora após confirmação de pagamento
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Créditos Lovable{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              ❤️
            </span>{" "}
            pelo menor preço
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Economize até <span className="font-bold text-accent">80%</span> comparado ao preço oficial.
          </p>

          {/* CTA area */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#planos"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-cyan-400 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Ver planos
            </a>
            <a
              href="https://wa.me/5511955784473?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20os%20créditos%20Lovable%20do%20Créditos%20Pro."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-card border border-border text-foreground font-semibold hover:border-primary hover:shadow-md transition-all duration-300"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
