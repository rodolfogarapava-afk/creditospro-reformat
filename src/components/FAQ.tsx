import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cyan-400 mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Respostas rápidas para suas principais dúvidas
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <AccordionTrigger className="text-lg font-medium text-left hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Ainda tem dúvidas? Estamos aqui para ajudar!
            </p>
            <a
              href="https://wa.me/5511955784473?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20os%20créditos%20Lovable%20do%20Créditos%20Pro."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-cyan-400 hover:opacity-90 text-white font-semibold shadow-lg"
              >
                Falar com suporte
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
