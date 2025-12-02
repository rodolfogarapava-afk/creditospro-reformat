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
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <img 
              src={logoImage} 
              alt="LittleShark Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-6">
            <div className="space-y-1">
              <button
                onClick={() => handleNavigation("hero")}
                className="w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("planos")}
                className="w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Planos
              </button>
              <button
                onClick={() => handleNavigation("como-funciona")}
                className="w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Como funciona
              </button>
              <button
                onClick={handleChat}
                className="w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Chat
              </button>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="p-6 border-t">
            <Button
              onClick={() => handleNavigation("planos")}
              className="w-full bg-gradient-to-r from-primary to-cyan-400 hover:opacity-90 text-white font-semibold py-6 text-lg shadow-lg"
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
