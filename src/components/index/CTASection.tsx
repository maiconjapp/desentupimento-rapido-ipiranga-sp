import React from "react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
const CTASection = () => <section className="section bg-brand-blue text-white bg-[#0a0700] rounded-sm">
    <div className="container-custom text-center">
      <h2 className="text-3xl font-bold mb-4">Precisa de Desentupimento Urgente?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Entre em contato agora mesmo para uma solução rápida e eficiente para o seu problema.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <WhatsAppButton className="text-lg" />
        <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-brand-blue" asChild>
          <a href="tel:+5511977480538">
            Ligar: (11) 97748-0538
          </a>
        </Button>
      </div>
    </div>
  </section>;
export default CTASection;