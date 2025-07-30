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
      <div className="relative py-20 px-8 text-center overflow-hidden">
        {/* Imagen de fondo completa */}
        <div className="absolute inset-0">
          <img 
            src="/assets/imagenes/servicios123.png" 
            alt="Servicios VCI Soluciones"
            className="w-full h-full object-cover"
          />
          {/* Overlay azul con opacidad para mantener legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/75 via-blue-800/70 to-blue-700/75"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Nuestros <span className="text-blue-300">Servicios</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed drop-shadow">
            Soluciones tecnológicas diseñadas para potenciar tu negocio y garantizar tu operatividad.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {servicesData.map((service, index) => (
              <div 
                key={service.title} 
                className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className={`relative flex justify-center items-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  {/* Rombo principal grande y visible */}
                  <div className="absolute w-80 h-80 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 transform rotate-45 rounded-3xl shadow-2xl opacity-95 scale-110"></div>
                  
                  {/* Rombo secundario más pequeño */}
                  <div className={`absolute ${index % 2 === 0 ? '-top-10 -right-10' : '-top-10 -left-10'} w-32 h-32 bg-gradient-to-br from-blue-300 to-blue-600 transform rotate-12 rounded-2xl shadow-lg opacity-80`}></div>
                  
                  {/* Círculo decorativo */}
                  <div className={`absolute ${index % 2 === 0 ? '-bottom-8 -left-8' : '-bottom-8 -right-8'} w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-500 rounded-full shadow-lg opacity-70`}></div>
                  
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="relative z-20 rounded-2xl shadow-[0_0_32px_0_rgba(59,130,246,0.7)] max-h-96 w-auto object-contain transition-all duration-300 transform hover:scale-105 bg-white border-4 border-white"
                  />
                </div>

                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 py-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">
          Aceptamos las siguientes formas de pago:
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {paymentMethods.map((m, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-4xl mb-1 bg-gray-100 rounded p-2">{m.icon}</span>
              <span className="text-blue-900 text-sm font-semibold">{m.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;