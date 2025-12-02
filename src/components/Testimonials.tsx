import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";
import testimonial7 from "@/assets/testimonial-7.jpg";
import testimonial8 from "@/assets/testimonial-8.jpg";
import testimonial9 from "@/assets/testimonial-9.jpg";
import testimonial10 from "@/assets/testimonial-10.jpg";
import { useState } from "react";

const testimonials = [
  { id: 1, image: testimonial1, alt: "Feedback de cliente satisfeito" },
  { id: 2, image: testimonial2, alt: "Entrega rápida confirmada" },
  { id: 3, image: testimonial3, alt: "Atendimento excelente" },
  { id: 4, image: testimonial4, alt: "Cliente satisfeito com compra" },
  { id: 5, image: testimonial5, alt: "Feedback positivo" },
  { id: 6, image: testimonial6, alt: "Créditos entregues com sucesso" },
  { id: 7, image: testimonial7, alt: "Cliente feliz" },
  { id: 8, image: testimonial8, alt: "Confirmação de entrega" },
  { id: 9, image: testimonial9, alt: "Processo simples e rápido" },
  { id: 10, image: testimonial10, alt: "Mais de 500 créditos entregues" },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Feedback de Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes estão dizendo sobre nosso serviço
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden border-2 hover:border-primary transition-colors">
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-full h-auto object-cover"
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-12" />
            <CarouselNext className="right-0 translate-x-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
