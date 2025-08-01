import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Figuras geométricas decorativas - Solo Desktop */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* Círculo decorativo superior izquierda */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-900 bg-opacity-20 rounded-full"></div>
        
        {/* Rombo decorativo superior derecha */}
        <div className="absolute top-8 right-16 w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 bg-opacity-30 transform rotate-45"></div>
        
        {/* Elementos geométricos decorativos */}
        <div className="absolute top-1/3 right-8 w-20 h-20 bg-gradient-to-r from-slate-700 to-slate-600 bg-opacity-40 rounded-full"></div>
        <div className="absolute bottom-20 left-16 w-16 h-16 bg-blue-800 bg-opacity-25 transform rotate-12"></div>
        
        {/* Líneas decorativas */}
        <div className="absolute bottom-0 left-1/4 w-24 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-30"></div>
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {/* Company Info */}
          <div className="lg:col-span-2 flex flex-col items-center text-center sm:text-left sm:items-start mb-6 sm:mb-8 lg:mb-0">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full">
              {/* Logo */}
              <div className="flex-shrink-0 order-1 sm:order-2">
                <img 
                  src="/assets/logos/logonofondo2.png" 
                  alt="VCI Soluciones Logo" 
                  className="h-32 sm:h-40 lg:h-48 w-auto mx-auto sm:mx-0" 
                />
              </div>
              
              {/* Company description */}
              <div className="flex-1 order-2 sm:order-1">
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 max-w-md mx-auto sm:mx-0">
                  Soluciones personalizadas para optimizar tu negocio.
                </p>
                
                {/* Social media links */}
                <div className="flex space-x-4 sm:space-x-6 justify-center sm:justify-start">
                  <a 
                    href="https://www.facebook.com/profile.php?id=100092297797854" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@vci.soluciones" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a 
                    href="mailto:sc@vci-soluciones.com" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-300">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a 
                  href="/" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base inline-block hover:translate-x-1 transform"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="/servicios" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base inline-block hover:translate-x-1 transform"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="/quienes-somos" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base inline-block hover:translate-x-1 transform"
                >
                  ¿Quiénes somos?
                </a>
              </li>
              <li>
                <a 
                  href="/consumibles" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base inline-block hover:translate-x-1 transform"
                >
                  Consumibles
                </a>
              </li>
              <li>
                <a 
                  href="/contacto" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base inline-block hover:translate-x-1 transform"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-300">
              Servicios
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <span className="text-gray-300 text-sm sm:text-base">
                  Renta de Impresoras
                </span>
              </li>
              <li>
                <span className="text-gray-300 text-sm sm:text-base">
                  Equipos Tecnológicos
                </span>
              </li>
              <li>
                <span className="text-gray-300 text-sm sm:text-base">
                  Cámaras de Seguridad
                </span>
              </li>
              <li>
                <span className="text-gray-300 text-sm sm:text-base">
                  Soporte Técnico
                </span>
              </li>
              <li>
                <span className="text-gray-300 text-sm sm:text-base">
                  Monitoreo 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="relative border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-center sm:text-left">
            <div className="text-xs sm:text-sm text-gray-400 order-2 sm:order-1">
              © {currentYear} VCI Soluciones (Persona Física). Todos los derechos reservados.
            </div>
            <div className="text-xs sm:text-sm text-gray-400 order-1 sm:order-2 max-w-md sm:max-w-none">
              Renta de impresoras, equipos tecnológicos, cámaras de seguridad y soporte técnico en Tijuana
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;