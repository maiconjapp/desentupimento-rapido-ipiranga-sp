
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Home } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
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
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p className="text-brand-gray mb-2">
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
              <h3 className="text-xl font-semibold mb-2">Endereço</h3>
              <p className="text-brand-gray mb-2">
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
              <h3 className="text-xl font-semibold mb-2">Site Oficial</h3>
              <p className="text-brand-gray mb-2">
                Visite nosso site oficial para mais informações
              </p>
              <a href="https://magnavitamaridodealuguel.com/pt" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-orange transition-colors font-medium">
                magnavitamaridodealuguel.com
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h2>
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Nossa Localização</h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1786991899953!2d-46.60833762392273!3d-23.596001560464048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bef77ebb48b%3A0x9bd5c91abdcaf21a!2sR.%20Dom%20Pero%20Leit%C3%A3o%2C%20137%20-%20Ipiranga%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004134-070!5e0!3m2!1spt-BR!2sbr!4v1714240725998!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Magnavita Marido de Aluguel"
                ></iframe>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="text-brand-gray">Segunda a Sexta</div>
                  <div className="font-medium">08:00 - 18:00</div>
                  <div className="text-brand-gray">Sábado</div>
                  <div className="font-medium">Mediante agendamento</div>
                </div>
                <p className="text-brand-gray">
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
