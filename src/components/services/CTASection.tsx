
import React from 'react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Instagram } from 'lucide-react';

const CTASection = () => {
  return <section className="section bg-brand-blue text-white bg-brand-black">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Precisa de um Orçamento?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
          Entre em contato agora mesmo para um orçamento sem compromisso e resolva seu problema de entupimento hoje!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WhatsAppButton className="text-lg" />
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-brand-blue" asChild>
            <a href="tel:+5511977480538">
              Ligar: (11) 97748-0538
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-brand-blue" asChild>
            <a href="https://www.instagram.com/magnavita_marido_de_aluguel/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Instagram className="h-5 w-5 mr-2" />
              Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default CTASection;
