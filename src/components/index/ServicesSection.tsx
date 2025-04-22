
import React from "react";
import { Link } from "react-router-dom";
import { Droplet, SquareAsterisk, WashingMachine } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";

const ServicesSection = () => (
  <section className="section bg-white">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
        <p className="text-lg text-brand-gray max-w-2xl mx-auto">
          Oferecemos soluções rápidas e eficientes para todos os tipos de entupimentos na sua residência ou comércio.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="Desentupimento de Pia"
          description="Desentupimos pias de cozinha, banheiro e áreas de serviço com equipamentos modernos e sem sujeira."
          icon={<Droplet className="h-12 w-12" />}
          link="/servicos#pia"
        />
        <ServiceCard
          title="Desentupimento de Vaso"
          description="Resolvemos entupimentos em vasos sanitários de forma rápida, higiênica e sem danificar suas instalações."
          icon={<SquareAsterisk className="h-12 w-12" />}
          link="/servicos#vaso"
        />
        <ServiceCard
          title="Desentupimento de Ralo"
          description="Eliminamos entupimentos em ralos de banheiros, box, áreas externas e caixas de gordura."
          icon={<WashingMachine className="h-12 w-12" />}
          link="/servicos#ralo"
        />
      </div>
      <div className="mt-12 text-center">
        <Button asChild size="lg">
          <Link to="/servicos">Ver Todos os Serviços</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesSection;
