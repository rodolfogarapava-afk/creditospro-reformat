import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/littleshark-logo.png";

interface MobileMenuProps {
  onNavigate: (sectionId: string) => void;
  onChatClick: () => void;
}

const MobileMenu = ({ onNavigate, onChatClick }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    setOpen(false);
  };

  const handleChat = () => {
    onChatClick();
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="md:hidden h-8 w-8">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] p-0">
        <div className="flex flex-col h-full bg-background">
          {/* Header */}
          <div className="flex items-center p-5 border-b">
            <img 
              src={logoImage} 
              alt="LittleShark Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-5 pt-6">
            <div className="space-y-4">
              <button
                onClick={() => handleNavigation("hero")}
                className="w-full text-left text-base font-normal text-foreground hover:text-primary transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("planos")}
                className="w-full text-left text-base font-normal text-foreground hover:text-primary transition-colors py-2"
              >
                Planos
              </button>
              <button
                onClick={() => handleNavigation("como-funciona")}
                className="w-full text-left text-base font-normal text-foreground hover:text-primary transition-colors py-2"
              >
                Como funciona
              </button>
              <button
                onClick={handleChat}
                className="w-full text-left text-base font-normal text-foreground hover:text-primary transition-colors py-2"
              >
                Chat
              </button>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="p-5">
            <Button
              onClick={() => handleNavigation("planos")}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-base shadow-lg rounded-lg"
            >
              Comprar créditos
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
