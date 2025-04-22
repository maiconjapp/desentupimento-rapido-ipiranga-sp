
import React from 'react';

const Map: React.FC = () => (
  <div className="aspect-video rounded-lg overflow-hidden w-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.9366843895336!2d-46.62528092488959!3d-23.606603578768702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b578a5908d5%3A0x56f53e23f3045329!2sMagnavita%20Marido%20de%20Aluguel!5e0!3m2!1spt-BR!2sbr!4v1745351264681!5m2!1spt-BR!2sbr"
      width="100%"
      height="100%"
      style={{ border: 0, minHeight: 240 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Localização Magnavita Marido de Aluguel"
    ></iframe>
  </div>
);

export default Map;
