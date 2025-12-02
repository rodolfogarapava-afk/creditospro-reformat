import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/littleshark-logo.png";
interface MobileMenuProps {
  onNavigate: (sectionId: string) => void;
  onChatClick: () => void;
}
const MobileMenu = ({
  onNavigate,
  onChatClick
}: MobileMenuProps) => {
  const [open, setOpen] = useState(false);
  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    setOpen(false);
  };
  const handleChat = () => {
    onChatClick();
    setOpen(false);
  };
  return <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="md:hidden h-8 w-8">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] p-0">
        <div className="flex flex-col h-full bg-background">
          {/* Header */}
          

          {/* Navigation Links */}
          <nav className="flex flex-col p-6 gap-6">
            <button onClick={() => handleNavigation("hero")} className="text-lg font-normal text-foreground hover:text-primary transition-colors text-left">
              Home
            </button>
            <button onClick={() => handleNavigation("planos")} className="text-lg font-normal text-foreground hover:text-primary transition-colors text-left">
              Planos
            </button>
            <button onClick={() => handleNavigation("como-funciona")} className="text-lg font-normal text-foreground hover:text-primary transition-colors text-left">
              Como funciona
            </button>
            <button onClick={handleChat} className="text-lg font-normal text-foreground hover:text-primary transition-colors text-left">
              Chat
            </button>
            
            <Button onClick={() => handleNavigation("planos")} className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-6 rounded-xl w-full text-base mt-2">
              Comprar créditos
            </Button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>;
};
export default MobileMenu;