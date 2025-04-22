
import React from 'react';

const Map: React.FC = () => (
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
);

export default Map;
