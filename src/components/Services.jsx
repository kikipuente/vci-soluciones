import React from 'react';
import { CheckCircle } from 'lucide-react';

const servicesData = [
  {
    title: 'Toner y Tintas Compatibles 100% Garantizados',
    description: 'Ofrecemos una amplia gama de toners y tintas compatibles de alta calidad para todas las marcas principales. Nuestros productos garantizan un rendimiento excepcional y ahorro en costos, sin comprometer la calidad de impresión.',
    imageUrl: '/assets/imagenes/toner.png',
    features: ['Calidad de impresión OEM', 'Ahorro de hasta un 50%', 'Garantía de satisfacción total', 'Amplio stock disponible'],
  },
  {
    title: 'Reparación y Mantenimiento de Impresoras de Etiquetas',
    description: 'Nos especializamos en el servicio técnico para impresoras de etiquetas (Zebra, Honeywell, TSC). Realizamos desde mantenimientos preventivos hasta reparaciones complejas para asegurar la continuidad de tu operación.',
    imageUrl: '/assets/imagenes/etiquetadora.png',
    features: ['Técnicos certificados', 'Diagnóstico rápido y preciso', 'Repuestos originales y de alta calidad', 'Planes de mantenimiento preventivo'],
  },
  {
    title: 'Venta y Reparación de Impresoras y Copiadoras',
    description: 'Asesoría personalizada para la adquisición de equipos nuevos y seminuevos que se ajusten a tus necesidades. Además, nuestro equipo técnico está listo para solucionar cualquier falla en tus dispositivos de impresión y copiado.',
    imageUrl: '/assets/imagenes/copiadoras.png',
    features: ['Equipos de última generación', 'Marcas líderes del mercado', 'Servicio técnico multimarca', 'Garantía en venta y reparación'],
  },
  {
    title: 'Venta y Reparación de Equipo de Cómputo',
    description: 'Soluciones integrales para tu infraestructura de TI. Ofrecemos venta de laptops, desktops, servidores y componentes, así como servicio de reparación y actualización para optimizar el rendimiento de tus equipos.',
    imageUrl: '/assets/imagenes/equipocomputo.png',
    features: ['Asesoría experta', 'Componentes de las mejores marcas', 'Optimización de rendimiento', 'Soporte técnico profesional'],
  },
  {
    title: 'Venta, Renta y Reparación de Impresoras de Inyección',
    description: 'Planes flexibles para la renta de impresoras de inyección de tinta, ideales para oficinas y negocios. También ofrecemos venta de equipos y un servicio de reparación eficiente para que nunca dejes de imprimir.',
    imageUrl: '/assets/imagenes/impresoras.png',
    features: ['Planes de renta flexibles', 'Equipos para alto volumen', 'Servicio a domicilio', 'Instalación y capacitación'],
  },
];

const paymentMethods = [
  { name: 'Depósito', icon: '⬇️' },
  { name: 'Efectivo', icon: '💵' },
  { name: 'Transferencia', icon: '🔁' },
];

const Services = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Imagen de fondo completa */}
        <div className="absolute inset-0">
          <img 
            src="/assets/imagenes/servicios123.png" 
            alt="Servicios VCI Soluciones"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay azul con opacidad para mantener legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/75 to-blue-700/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
            Nuestros <span className="text-blue-300">Servicios</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 leading-relaxed drop-shadow px-4">
            Soluciones tecnológicas diseñadas para potenciar tu negocio y garantizar tu operatividad.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-20">
            {servicesData.map((service, index) => (
              <div 
                key={service.title} 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center"
              >
                {/* Imagen con decoraciones - Mobile First */}
                <div className={`relative flex justify-center items-center order-1 mb-6 lg:mb-0 ${
                  index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  {/* Decoraciones - Solo en desktop para evitar superposición con texto */}
                  <div className="absolute hidden lg:block w-80 h-80 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 transform rotate-45 rounded-3xl shadow-2xl opacity-95 scale-110"></div>
                  
                  {/* Rombo secundario - Solo desktop */}
                  <div className={`absolute hidden lg:block ${
                    index % 2 === 0 ? '-top-10 -right-10' : '-top-10 -left-10'
                  } w-32 h-32 bg-gradient-to-br from-blue-300 to-blue-600 transform rotate-12 rounded-2xl shadow-lg opacity-80`}></div>
                  
                  {/* Círculo decorativo - Solo desktop */}
                  <div className={`absolute hidden lg:block ${
                    index % 2 === 0 ? '-bottom-8 -left-8' : '-bottom-8 -right-8'
                  } w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-500 rounded-full shadow-lg opacity-70`}></div>
                  
                  {/* Decoración móvil más sutil - Solo fondo de la imagen */}
                  <div className="absolute lg:hidden inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl opacity-30"></div>
                  
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="relative z-20 rounded-xl lg:rounded-2xl shadow-lg lg:shadow-[0_0_32px_0_rgba(59,130,246,0.7)] max-h-64 sm:max-h-72 lg:max-h-96 w-auto object-contain transition-all duration-300 transform hover:scale-105 bg-white border-2 lg:border-4 border-white"
                  />
                </div>

                {/* Contenido de texto */}
                <div className={`order-2 ${
                  index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                } px-4 sm:px-6 lg:px-0`}>
                  <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-start sm:items-center">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0" />
                        <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="bg-gray-50 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-900 mb-6 sm:mb-8">
              Aceptamos las siguientes formas de pago:
            </h3>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
              {paymentMethods.map((method, idx) => (
                <div key={idx} className="flex flex-col items-center group cursor-pointer">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                    <span className="text-3xl sm:text-4xl lg:text-5xl mb-2 block">
                      {method.icon}
                    </span>
                  </div>
                  <span className="text-blue-900 text-sm sm:text-base lg:text-lg font-semibold mt-3 group-hover:text-blue-700 transition-colors">
                    {method.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;