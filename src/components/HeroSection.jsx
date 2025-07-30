import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 py-24 text-center relative overflow-hidden">
            {/* Imagen de reparación con ángulo */}
      <div className="absolute top-0 right-0 w-96 h-96 transform rotate-12 translate-x-20 -translate-y-10 opacity-20">
        <img 
          src="/assets/imagenes/reaparacion-impresora1.png" 
          alt="Reparación de impresora" 
          className="w-full h-full object-cover rounded-lg shadow-2xl"
        />
      </div>
      
      {/* Imagen Xerox en la parte inferior del HeroSection */}
      <div className="absolute bottom-0 left-0 w-80 h-104 transform -rotate-12 translate-x-10 -translate-y-0 opacity-20">
        <img 
          src="/assets/imagenes/multifuncionalnegro.png" 
          alt="Xerox" 
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-white">Soluciones </span>
          <span className="text-blue-300">Tecnológicas</span>
          <br />
          <span className="text-white"> <span className="font-black">Integrales</span></span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-10">
          Renta de impresoras, venta de equipos, instalación de cámaras de seguridad y soporte técnico especializado. Disponibles 24/7 para optimizar tu negocio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+526649334573"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <span role="img" aria-label="cotizacion">📞</span> Solicitar Cotización
          </a>
          <Link
            to="/servicios"
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <span role="img" aria-label="servicios">🎥</span> Ver Servicios
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
