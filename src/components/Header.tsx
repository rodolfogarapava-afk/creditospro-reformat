import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import logoImage from "@/assets/logo-creditosfacil.png";
const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-muted/95 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2 cursor-pointer">
            <span className="text-xl md:text-2xl font-bold text-foreground">Créditos Fácil</span>
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
export default Header;