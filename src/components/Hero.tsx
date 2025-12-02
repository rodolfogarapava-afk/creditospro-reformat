import { Clock } from "lucide-react";
import heartGradient from "@/assets/heart-gradient.png";

const Hero = () => {
  return <section id="hero" className="relative pt-20 md:pt-32 pb-2 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Delivery badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 md:mb-8 animate-pulse">
            <Clock className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary">
              Entrega em até 1 hora após confirmação de pagamento
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2">
            Créditos Lovable{" "}
            <img 
              src={heartGradient} 
              alt="heart" 
              className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 align-middle"
            />{" "}
            pelo menor preço
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4">
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