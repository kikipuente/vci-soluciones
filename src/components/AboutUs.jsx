import React from 'react';
import { Target, Eye, Users, Award, Clock, Shield } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img 
            src="/assets/imagenes/welcomvci2.png" 
            alt="Equipo VCI Soluciones"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay azul con opacidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/75 to-blue-700/85"></div>
        </div>
        
        {/* Elementos decorativos sutiles - Solo desktop */}
        <div className="hidden lg:block">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 transform rotate-45 rounded-2xl"></div>
          <div className="absolute bottom-5 left-5 w-24 h-24 bg-white/15 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 transform rotate-12 rounded-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
            ¿Quiénes <span className="text-blue-300">Somos?</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto drop-shadow px-2 sm:px-0">
            Conoce nuestra historia, valores y compromiso con la excelencia tecnológica
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        {/* Company Overview */}
        <div className="mb-12 sm:mb-16 lg:mb-20 relative">
          {/* Elementos decorativos alrededor de la sección - Solo desktop */}
          <div className="hidden lg:block">
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-300 to-blue-500 transform rotate-45 rounded-xl opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-25"></div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200 relative">
            <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4 sm:mb-0 sm:mr-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Nuestra Empresa</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              <strong className="text-gray-900">VCI Soluciones</strong> es una empresa comprometida con brindar 
              soluciones tecnológicas integrales que impulsen el crecimiento y la eficiencia de nuestros clientes. 
              Con presencia en Baja California, nos especializamos en equipos de impresión, cómputo y sistemas 
              de seguridad, ofreciendo servicios completos desde la venta hasta el mantenimiento especializado.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Nuestro enfoque se centra en la calidad, la innovación y la atención personalizada, 
              construyendo relaciones duraderas basadas en la confianza y el profesionalismo.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20 relative">
          {/* Elementos decorativos centrales - Solo desktop */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full opacity-30"></div>
          
          {/* Mission */}
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 hover:bg-gray-100 transition-all duration-300 relative">
            {/* Rombo decorativo para misión - Solo desktop */}
            <div className="hidden lg:block absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 transform rotate-45 rounded-lg opacity-30"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-3 sm:mb-0 sm:mr-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Misión</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Brindar soluciones tecnológicas confiables y accesibles en equipos de impresión, 
              cómputo y seguridad, a través de servicios de venta, renta, reparación y mantenimiento, 
              comprometidos con la calidad, la atención personalizada y la mejora continua. 
              En <strong className="text-gray-900">VCI Soluciones</strong>, trabajamos para satisfacer 
              las necesidades de nuestros clientes, ofreciendo un trato cercano, honesto y profesional 
              que fortalezca su operación diaria.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 hover:bg-gray-100 transition-all duration-300 relative">
            {/* Círculo decorativo para visión - Solo desktop */}
            <div className="hidden lg:block absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-25"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
              <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-3 sm:mb-0 sm:mr-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Visión</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Ser una empresa reconocida en Baja California por nuestra trayectoria, servicio integral 
              y cercanía con el cliente, consolidándonos como un referente en el sector tecnológico y 
              de servicios empresariales. Aspiramos a seguir creciendo de forma sostenible, incorporando 
              herramientas digitales e innovaciones que nos permitan ampliar nuestra cobertura, 
              profesionalizar nuestros procesos y mantenernos a la vanguardia en soluciones de impresión, 
              cómputo y seguridad.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12 sm:mb-16 lg:mb-20 relative">
          {/* Elementos decorativos alrededor de valores - Solo desktop */}
          <div className="hidden lg:block">
            <div className="absolute top-0 left-10 w-24 h-24 bg-gradient-to-br from-blue-300 to-blue-500 transform rotate-12 rounded-2xl opacity-15"></div>
            <div className="absolute bottom-10 right-5 w-18 h-18 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20"></div>
          </div>
          
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Nuestros Valores</h3>
            <p className="text-gray-600 text-base sm:text-lg px-4 sm:px-0">Los principios que guían nuestro trabajo diario</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-gray-200 hover:scale-105 transition-transform duration-300 relative">
              {/* Decoración específica para cada valor - Solo desktop */}
              <div className="hidden lg:block absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-300 to-blue-500 transform rotate-45 rounded-md opacity-40"></div>
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Calidad</h4>
              <p className="text-sm sm:text-base text-gray-700">Compromiso con la excelencia en cada servicio y producto que ofrecemos.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-gray-200 hover:scale-105 transition-transform duration-300 relative">
              <div className="hidden lg:block absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-50"></div>
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Confianza</h4>
              <p className="text-sm sm:text-base text-gray-700">Relaciones sólidas basadas en la transparencia y profesionalismo.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-gray-200 hover:scale-105 transition-transform duration-300 relative sm:col-span-2 lg:col-span-1">
              <div className="hidden lg:block absolute -top-2 -left-2 w-10 h-10 bg-gradient-to-br from-blue-200 to-blue-400 transform rotate-12 rounded-lg opacity-30"></div>
              <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Compromiso</h4>
              <p className="text-sm sm:text-base text-gray-700">Dedicación total para superar las expectativas de nuestros clientes.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200 relative">
          {/* Elementos decorativos grandes para esta sección - Solo desktop */}
          <div className="hidden lg:block">
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-blue-300 to-blue-500 transform rotate-45 rounded-2xl opacity-15"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10"></div>
            <div className="absolute top-1/4 right-10 w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-400 transform rotate-45 rounded-lg opacity-25"></div>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center relative z-10">
            ¿Por qué elegir VCI Soluciones?
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-xs sm:text-sm">1</span>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1 sm:mb-2 text-sm sm:text-base">Experiencia Comprobada</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Años de trayectoria en el sector tecnológico de Baja California.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-xs sm:text-sm">2</span>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1 sm:mb-2 text-sm sm:text-base">Servicio 24/7</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Disponibilidad completa para resolver cualquier incidencia.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-xs sm:text-sm">3</span>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1 sm:mb-2 text-sm sm:text-base">Soluciones Personalizadas</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Planes adaptados a las necesidades específicas de cada cliente.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-xs sm:text-sm">4</span>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1 sm:mb-2 text-sm sm:text-base">Tecnología Avanzada</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Equipos y sistemas de última generación para máximo rendimiento.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-xs sm:text-sm">5</span>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1 sm:mb-2 text-sm sm:text-base">Atención Cercana</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Trato personal y directo con cada uno de nuestros clientes.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-xs sm:text-sm">6</span>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1 sm:mb-2 text-sm sm:text-base">Precios Competitivos</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Tarifas justas y transparentes sin comprometer la calidad.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 relative">
          {/* Elementos decorativos finales - Solo desktop */}
          <div className="hidden lg:block">
            <div className="absolute -top-4 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 transform rotate-45 rounded-xl opacity-20"></div>
            <div className="absolute -bottom-4 right-1/4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-30"></div>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            ¿Listo para optimizar tu empresa?
          </h3>
          <p className="text-gray-600 mb-6 sm:mb-8 px-4">
            Contáctanos hoy mismo y obtén una cotización personalizada sin compromiso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 sm:px-8 rounded-full transition-colors duration-300 transform hover:scale-105 text-sm sm:text-base">
              Solicitar Cotización
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Ver Servicios
            </button>
          </div>
        </div>
      </div>

      {/* Footer Contact Info */}
      <div className="bg-blue-950 py-6 sm:py-8 px-4 relative overflow-hidden">
        {/* Elementos decorativos en el footer - Solo desktop */}
        <div className="hidden lg:block">
          <div className="absolute top-2 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-45 rounded-xl opacity-10"></div>
          <div className="absolute bottom-2 right-16 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-15"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-white">
            <div>
              <h4 className="font-bold mb-2 text-sm sm:text-base">Teléfono</h4>
              <p className="text-blue-200 text-sm sm:text-base">+52 (664) 933-4573</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-sm sm:text-base">Email</h4>
              <p className="text-blue-200 text-sm sm:text-base">sc@vcisoluciones.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;