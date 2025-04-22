
import React from "react";
import TestimonialCard from "@/components/TestimonialCard";

const TestimonialsSection = () => (
  <section className="section bg-white">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
        <p className="text-lg text-brand-gray max-w-2xl mx-auto">
          A satisfação dos nossos clientes é nossa maior prioridade.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard
          text="Chamei para desentupir a pia da cozinha que estava totalmente entupida. Chegaram em menos de 1 hora e resolveram o problema rapidamente. Super recomendo!"
          author="Carlos Silva"
          location="Ipiranga, SP"
        />
        <TestimonialCard
          text="Serviço excelente! Profissionais muito atenciosos e deixaram tudo limpo após o desentupimento do vaso sanitário. Farei negócio novamente se precisar."
          author="Ana Oliveira"
          location="Vila Mariana, SP"
        />
        <TestimonialCard
          text="Meu ralo do banheiro estava totalmente entupido. Eles vieram no mesmo dia e resolveram rápido sem fazer sujeira. Preço justo e atendimento nota 10!"
          author="Paulo Santos"
          location="Sacomã, SP"
        />
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
