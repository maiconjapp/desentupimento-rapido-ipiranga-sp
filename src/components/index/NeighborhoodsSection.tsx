
import React from "react";
import NeighborhoodList from "@/components/NeighborhoodList";

const NeighborhoodsSection = () => (
  <section className="section bg-brand-lightGray">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Bairros Atendidos</h2>
        <p className="text-lg text-brand-gray max-w-2xl mx-auto">
          Atendemos em toda a região do Ipiranga, Vila Mariana e Zona Sul de SP com rapidez e eficiência.
        </p>
      </div>
      <NeighborhoodList />
    </div>
  </section>
);

export default NeighborhoodsSection;
