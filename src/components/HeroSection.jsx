import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 py-16 sm:py-20 lg:py-24 text-center relative overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-auto">
      {/* Imágenes de fondo - Solo visibles en desktop */}
      <div className="hidden lg:block">
        {/* Imagen de reparación con ángulo */}
        <div className="absolute top-0 right-0 w-80 xl:w-96 h-80 xl:h-96 transform rotate-12 translate-x-16 xl:translate-x-20 -translate-y-10 opacity-20">
          <img 
            src="/assets/imagenes/reaparacion-impresora1.png" 
            alt="Reparación de impresora" 
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </div>
        
        {/* Imagen Xerox en la parte inferior */}
        <div className="absolute bottom-0 left-0 w-72 xl:w-80 h-96 xl:h-104 transform -rotate-12 translate-x-8 xl:translate-x-10 -translate-y-4 xl:-translate-y-0 opacity-20">
          <img 
            src="/assets/imagenes/multifuncionalnegro.png" 
            alt="Xerox" 
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Elementos decorativos sutiles para móvil y tablet */}
      <div className="lg:hidden">
        {/* Círculos decorativos sutiles */}
        <div className="absolute top-10 right-5 w-20 h-20 sm:w-24 sm:h-24 bg-blue-700 rounded-full opacity-10"></div>
        <div className="absolute bottom-10 left-5 w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full opacity-15"></div>
        <div className="absolute top-1/2 right-8 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full opacity-10"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-auto">
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white block sm:inline">Soluciones </span>
            <span className="text-blue-300 block sm:inline">Tecnológicas</span>
            <br className="hidden sm:block" />
            <span className="text-white block mt-2 sm:mt-0"> 
              <span className="font-black">Integrales</span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
            Renta de impresoras, venta de equipos, instalación de cámaras de seguridad y soporte técnico especializado. Disponibles 24/7 para optimizar tu negocio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4">
            <a
              href="tel:+526649334573"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span role="img" aria-label="cotizacion" className="text-lg">📞</span> 
              <span>Solicitar Cotización</span>
            </a>
            <Link
              to="/servicios"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span role="img" aria-label="servicios" className="text-lg">🎥</span> 
              <span>Ver Servicios</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Elementos decorativos adicionales para desktop */}
      <div className="hidden lg:block">
        {/* Líneas decorativas */}
        <div className="absolute top-1/4 left-10 w-32 h-0.5 bg-blue-400 opacity-30 transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-10 w-24 h-0.5 bg-blue-300 opacity-40 transform -rotate-45"></div>
      </div>
    </section>
  );
};

export default HeroSection;
