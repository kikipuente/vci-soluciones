import React from 'react';
import { Globe, ShieldCheck, Clock, TrendingUp, Layers, Settings } from 'lucide-react';

const advantages = [
  {
    icon: <Globe className="w-7 h-7 text-blue-600 mb-2" />,
    text: 'Mayor visibilidad en el mercado digital las 24 horas del día'
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-blue-600 mb-2" />,
    text: 'Generamos confianza con clientes potenciales mediante transparencia total'
  },
  {
    icon: <Clock className="w-7 h-7 text-blue-600 mb-2" />,
    text: 'Disponibilidad 24/7 para mostrar servicios y generar leads'
  },
  {
    icon: <Layers className="w-7 h-7 text-blue-600 mb-2" />,
    text: 'Base sólida para futura plataforma de monitoreo de impresoras'
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-blue-600 mb-2" />,
    text: 'Ventaja competitiva decisiva en el sector tecnológico'
  },
  {
    icon: <Settings className="w-7 h-7 text-blue-600 mb-2" />,
    text: 'Planes personalizados según las necesidades específicas de tu negocio'
  },
];

const WhyChooseUs = () => (
  <section className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-2">¿Por qué elegir VCI Soluciones?</h2>
      <p className="text-gray-500 text-center mb-10">Ventajas que nos hacen tu mejor opción en el mercado digital</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {advantages.map((adv, idx) => (
          <div key={idx} className="bg-blue-50 rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
            {adv.icon}
            <span className="text-blue-900 font-medium">{adv.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs; 