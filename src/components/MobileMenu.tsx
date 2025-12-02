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
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <img 
              src={logoImage} 
              alt="LittleShark Logo" 
              className="h-9 w-auto"
            />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 pt-8">
            <div className="space-y-6">
              <button
                onClick={() => handleNavigation("hero")}
                className="w-full text-left text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("planos")}
                className="w-full text-left text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                Planos
              </button>
              <button
                onClick={() => handleNavigation("como-funciona")}
                className="w-full text-left text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                Como funciona
              </button>
              <button
                onClick={handleChat}
                className="w-full text-left text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                Chat
              </button>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="p-6">
            <Button
              onClick={() => handleNavigation("planos")}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-5 text-base shadow-lg rounded-xl"
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
