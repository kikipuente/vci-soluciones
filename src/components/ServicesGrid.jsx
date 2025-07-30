import React from 'react';
import { Printer, Laptop, Video, Wrench, Headphones, ShoppingCart } from 'lucide-react';

const services = [
  {
    icon: <Printer className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: 'Renta de Impresoras',
    desc: 'Equipos láser y multifuncionales con planes personalizados. Incluye mantenimiento y soporte técnico.'
  },
  {
    icon: <Laptop className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: 'Venta de Equipos Tecnológicos',
    desc: 'Computadoras, laptops, impresoras y equipos de oficina de las mejores marcas del mercado.'
  },
  {
    icon: <Video className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: 'Instalación de Cámaras',
    desc: 'Sistemas de seguridad y videovigilancia con monitoreo remoto y grabación en alta definición.'
  },
  {
    icon: <Wrench className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: 'Mantenimiento de Equipos',
    desc: 'Servicio técnico especializado para mantener tus equipos funcionando al 100% de su capacidad.'
  },
  {
    icon: <Headphones className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: 'Soporte Técnico',
    desc: 'Asistencia técnica remota y presencial. Disponible 24/7 para resolver cualquier incidencia.'
  },
  {
    icon: <ShoppingCart className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: 'Venta de Consumibles',
    desc: 'Toners, cartuchos, papel y todos los insumos necesarios para tus equipos de impresión.'
  },
];

const ServicesGrid = () => (
  <section className="bg-gray-200 py-20">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-2">Nuestros Servicios</h2>
      <p className="text-gray-500 text-center mb-10">Soluciones tecnológicas completas para tu empresa</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md p-8 text-center border-t-4 border-blue-400 hover:shadow-xl transition-all">
            {service.icon}
            <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid; 