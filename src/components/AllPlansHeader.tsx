import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const AllPlansHeader = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleChatClick = () => {
    window.open('https://wa.me/5511955784473?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20os%20créditos%20Lovable%20do%20Créditos%20Pro.', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu */}
          <MobileMenu onNavigate={scrollToSection} onChatClick={handleChatClick} />

          {/* Logo */}
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Créditos Pro</h1>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('planos')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Planos
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Como funciona
            </button>
            <button 
              onClick={handleChatClick}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Chat
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <Button 
            onClick={() => scrollToSection('planos')}
            className="hidden md:inline-flex bg-gradient-to-r from-primary to-cyan-400 hover:opacity-90 text-white font-semibold shadow-lg"
          >
            Comprar créditos
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AllPlansHeader;
