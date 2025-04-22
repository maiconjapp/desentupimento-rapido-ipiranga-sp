
import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";

const HeroSection = () => (
  <section className="hero-section bg-white relative overflow-hidden">
    {/* Imagem de fundo translúcida */}
    <div 
      className="absolute inset-0 w-full h-full z-0"
      aria-hidden="true"
      style={{
        pointerEvents: 'none',
        opacity: 0.35,
        backgroundImage: `url('https://i.ibb.co/hRxPtLZj/desentupimento-de-pia-sp.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
    {/* Conteúdo principal acima da imagem */}
    <div className="container-custom flex flex-col items-center text-center relative z-10">
      <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
        Desentupimento Rápido em SP
      </h1>
      <h2 className="text-xl md:text-2xl mb-6 text-black font-normal">
        Pia, vaso ou ralo entupido? <br className="md:hidden" />
        Chame a Magnavita Marido de Aluguel e resolva agora!
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <WhatsAppButton className="text-lg" />
        <Button asChild variant="outline" className="text-black border-black hover:bg-black hover:text-white text-lg">
          <a href="tel:+5511977480538">
            Ligar Agora
          </a>
        </Button>
      </div>
      <div className="mt-12 animate-bounce">
        <ArrowDown className="h-8 w-8 text-black" />
      </div>
    </div>
  </section>
);

export default HeroSection;
