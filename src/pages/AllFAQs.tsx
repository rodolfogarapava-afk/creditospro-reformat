import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import AllPlansHeader from "@/components/AllPlansHeader";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "@/components/ChatWidget";
import FAQ from "@/components/FAQ";

const AllFAQs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <AllPlansHeader />
      <WhatsAppButton />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Todas as Perguntas Frequentes
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
              Encontre respostas para todas as suas dúvidas
            </p>
          </div>

          {/* FAQ Section */}
          <FAQ />

          {/* Back Button */}
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/")}
              className="px-8"
            >
              Voltar para Home
            </Button>
          </div>
        </div>
      </div>
      <ChatWidget />
    </div>
  );
};

export default AllFAQs;
