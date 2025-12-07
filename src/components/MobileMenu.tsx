import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
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
          <nav className="flex flex-col p-4 gap-4 pt-8">
            <button onClick={() => handleNavigation("hero")} className="text-base font-normal text-foreground hover:text-primary transition-colors text-left py-2">
              Home
            </button>
            <button onClick={() => handleNavigation("planos")} className="text-base font-normal text-foreground hover:text-primary transition-colors text-left py-2">
              Planos
            </button>
            <button onClick={() => handleNavigation("como-funciona")} className="text-base font-normal text-foreground hover:text-primary transition-colors text-left py-2">
              Como funciona
            </button>
            <button onClick={handleChat} className="text-base font-normal text-foreground hover:text-primary transition-colors text-left py-2">
              Chat
            </button>
            
            <Button onClick={() => handleNavigation("planos")} className="bg-gradient-to-r from-primary to-cyan-400 hover:opacity-90 text-white font-semibold px-6 py-4 rounded-xl w-full text-base mt-4">
              Comprar créditos
            </Button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>;
};
export default MobileMenu;