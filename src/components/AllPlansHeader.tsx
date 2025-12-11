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
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">
            <img alt="Créditos Fácil" className="h-10 md:h-12 w-auto" src="/lovable-uploads/4b8e2ec3-4446-44e8-90d2-618fcc289ebd.png" />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('planos')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Planos
            </button>
            <button onClick={() => scrollToSection('como-funciona')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Como funciona
            </button>
          </nav>

          {/* Desktop CTA Button + Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button onClick={() => scrollToSection('planos')} className="hidden md:inline-flex bg-gradient-to-r from-primary to-cyan-400 hover:opacity-90 text-white font-semibold shadow-lg">
              Comprar créditos
            </Button>
            
            {/* Mobile Menu */}
            <MobileMenu onNavigate={scrollToSection} />
          </div>
        </div>
      </div>
    </header>;
};
export default AllPlansHeader;