import { Clock } from "lucide-react";
import heartGradient from "@/assets/heart-gradient.png";

const Hero = () => {
  return <section id="hero" className="relative pt-32 pb-2 overflow-hidden">
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
            <img 
              src={heartGradient} 
              alt="heart" 
              className="inline-block w-12 h-12 md:w-16 md:h-16 align-middle"
            />{" "}
            pelo menor preço
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Economize até <span className="font-bold text-accent">80%</span> comparado ao preço oficial.
          </p>

          {/* CTA area */}
          
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
    </section>;
};
export default Hero;