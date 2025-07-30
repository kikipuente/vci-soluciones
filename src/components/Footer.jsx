import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-2 flex flex-col lg:flex-row items-center lg:items-start mb-8 lg:mb-0">
            <div className="order-2 lg:order-1 flex-1 flex flex-col items-center lg:items-start">
              <div className="text-center lg:text-left">
              <img src="/assets/logos/logonofondo2.png" alt="VCI Soluciones Logo" className="h-60 w-auto mb-4 lg:mb-0 lg:ml-8 order-1 lg:order-2 self-start lg:self-start" />
                <p className="text-gray-300 mb-4 max-w-md mx-auto lg:mx-0">
                  Soluciones personalizadas para optimizar tu negocio.
                </p>
                <div className="flex space-x-4 justify-center lg:justify-start">
                  <a href="https://www.facebook.com/profile.php?id=100092297797854" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/@vci.soluciones" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a href="mailto:sc@vci-soluciones.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Inicio</a></li>
              <li><Link to="/servicios" className="text-gray-300 hover:text-white transition-colors duration-200">Servicios</Link></li>
              <li><Link to="/quienes-somos" className="text-gray-300 hover:text-white transition-colors duration-200">¿Quiénes somos?</Link></li>
              <li><Link to="/consumibles" className="text-gray-300 hover:text-white transition-colors duration-200">Consumibles</Link></li>
              <li><Link to="/contacto" className="text-gray-300 hover:text-white transition-colors duration-200">Contacto</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Servicios</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Renta de Impresoras</span></li>
              <li><span className="text-gray-300">Equipos Tecnológicos</span></li>
              <li><span className="text-gray-300">Cámaras de Seguridad</span></li>
              <li><span className="text-gray-300">Soporte Técnico</span></li>
              <li><span className="text-gray-300">Monitoreo 24/7</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} VCI Soluciones (Persona Física). Todos los derechos reservados.
            </div>
            <div className="text-sm text-gray-400">
              Renta de impresoras, equipos tecnológicos, cámaras de seguridad y soporte técnico en Tijuana
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;