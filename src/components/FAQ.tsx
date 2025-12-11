import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FAQProps {
  limit?: number;
}

const FAQ = ({ limit }: FAQProps) => {
  const navigate = useNavigate();
  const faqs = [
    {
      question: "Como funciona a Oferta de Teste (50 créditos)?",
      answer:
        "A Oferta de Teste de 50 créditos por R$ 9,90 é um plano promocional exclusivo para primeira compra. Use este pacote para testar o sistema e confirmar, na prática, que os créditos são debitados corretamente na sua conta. É uma forma simples e segura de você validar o funcionamento antes de escolher planos maiores.",
    },
    {
      question: "Como recebo meus créditos após a compra?",
      answer:
        "Após o pagamento, abrirá um chat automaticamente. Envie o e-mail utilizado na compra e o link de convite da sua conta Lovable. Os créditos serão entregues através do seu próprio link de indicação.",
    },
    {
      question: "Por que preciso enviar o link de convite da minha Lovable?",
      answer:
        "O link de convite é necessário para que possamos enviar os créditos diretamente para sua conta através do sistema oficial de indicação da Lovable. Este é o método mais seguro e confiável para transferência de créditos.",
    },
    {
      question: "Em quanto tempo os créditos são entregues?",
      answer:
        "O prazo médio é de até 1 hora dentro do horário de atendimento. Fora desse horário, o prazo pode ser maior.",
    },
    {
      question: "Qual é o horário de atendimento?",
      answer:
        "Nosso horário de atendimento é de segunda a sexta-feira, das 9h às 18h (horário de Brasília). Pedidos realizados fora desse horário serão processados no próximo dia útil.",
    },
    {
      question: "Posso perder minha conta utilizando esse método?",
      answer:
        "Não! Utilizamos apenas o sistema oficial de indicação da Lovable, que é 100% seguro e aprovado pela plataforma. Sua conta não corre nenhum risco ao usar nosso serviço.",
    },
    {
      question: "Por que não posso recarregar várias vezes no dia?",
      answer:
        "Para garantir a segurança do sistema e evitar qualquer problema com a Lovable, recomendamos aguardar pelo menos 24 horas entre recargas. Isso mantém tudo dentro dos padrões normais de uso da plataforma.",
    },
    {
      question: "O que acontece se eu tentar recarregar várias vezes no mesmo dia?",
      answer:
        "Para sua segurança, limitamos recargas múltiplas no mesmo dia. Caso necessite de uma quantidade maior de créditos, recomendamos escolher um pacote maior de uma só vez.",
    },
    {
      question: "O que acontece se eu enviar informações erradas no chat?",
      answer:
        "Não se preocupe! Basta nos avisar imediatamente através do chat e corrigiremos as informações antes de processar sua entrega. Nossa equipe sempre verifica os dados antes de concluir a transferência dos créditos.",
    },
    {
      question: "É seguro comprar créditos aqui?",
      answer:
        "Sim. Todos os créditos são entregues utilizando o sistema oficial de indicação da Lovable, o método mais seguro possível.",
    },
    {
      question: "O que devo fazer caso o crédito não seja entregue no prazo?",
      answer:
        "Se o prazo de 1 hora for ultrapassado durante o horário de atendimento, entre em contato conosco imediatamente pelo WhatsApp. Nossa equipe irá verificar o status da sua entrega e resolver a situação rapidamente.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-cyan-400 mb-4 md:mb-6">
              <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 px-2">
              Perguntas Frequentes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Respostas rápidas para suas principais dúvidas
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.slice(0, limit || faqs.length).map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-4 sm:px-6 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <AccordionTrigger className="text-base sm:text-lg font-medium text-left hover:no-underline py-4 sm:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-8 md:mt-12 px-2">
            {limit && (
              <div className="mb-6">
                <Button
                  onClick={() => navigate("/perguntas-frequentes")}
                  variant="outline"
                  size="lg"
                  className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg hover:border-primary hover:text-primary transition-all"
                >
                  Ver todas as perguntas frequentes
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
