
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Home } from 'lucide-react';
import Map from '@/components/Map';

const ContactPage = () => {
  return (
    <>
      <Header />

      {/* Hero Image Section */}
      <section className="relative h-[300px] md:h-[360px] w-full flex items-center justify-center overflow-hidden mb-[-30px]">
        {/* Main image with transparency and filter */}
        <img
          src="https://i.ibb.co/hRxPtLZj/desentupimento-de-pia-sp.jpg"
          alt="Desentupimento de pia em SP"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          style={{
            filter: 'blur(1.5px) grayscale(5%) brightness(0.96)'
          }}
        />
        {/* Second smaller image, blurred and right aligned, optional: decorativo */}
        <img
          src="https://i.ibb.co/gZvPF12r/desentupimento-de-ralo-sp.jpg"
          alt="Desentupimento de ralo em SP"
          className="hidden md:block absolute bottom-0 right-0 w-52 h-40 object-cover rounded-lg opacity-50 blur-sm pointer-events-none"
        />
        {/* Overlay gradient for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/10"></div>
        {/* Title content */}
        <div className="relative z-10 w-full text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 drop-shadow-lg">
            Entre em Contato
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto drop-shadow">
            Estamos prontos para atender sua emergência de desentupimento no Ipiranga e Zona Sul de São Paulo.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-brand-lightGray p-6 rounded-lg text-center">
              <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Telefone</h3>
              <p className="text-brand-gray mb-2 text-black">
                Atendimento em horário comercial
              </p>
              <a href="tel:+5511977480538" className="text-brand-blue hover:text-brand-orange transition-colors font-medium">
                (11) 97748-0538
              </a>
            </div>
            
            <div className="bg-brand-lightGray p-6 rounded-lg text-center">
              <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Endereço</h3>
              <p className="text-brand-gray mb-2 text-black">
                Rua Dom Pero Leitão, 137<br />
                04134-070 São Paulo
              </p>
              <a href="https://maps.google.com/?q=Rua+Dom+Pero+Leitão,+137+São+Paulo" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-orange transition-colors font-medium">
                Ver no Google Maps
              </a>
            </div>
            
            <div className="bg-brand-lightGray p-6 rounded-lg text-center">
              <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Site Oficial</h3>
              <p className="text-brand-gray mb-2 text-black">
                Visite nosso site oficial para mais informações
              </p>
              <a href="https://magnavitamaridodealuguel.com/pt" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-orange transition-colors font-medium">
                magnavitamaridodealuguel.com
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">Envie-nos uma Mensagem</h2>
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">Nossa Localização</h2>
              <div className="mb-6">
                <Map />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-4 text-black">Horário de Atendimento</h3>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="text-brand-gray text-black">Segunda a Sexta</div>
                  <div className="font-medium text-black">08:00 - 18:00</div>
                  <div className="text-brand-gray text-black">Sábado</div>
                  <div className="font-medium text-black">Mediante agendamento</div>
                </div>
                <p className="text-brand-gray text-black">
                  Para emergências fora do horário comercial, entre em contato via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton floating neighborhood="Ipiranga" />
      <Footer />
    </>
  );
};

export default ContactPage;
