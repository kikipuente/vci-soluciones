import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 shadow-lg sticky top-0 z-50">
      {/* Top bar con información de contacto - solo visible en desktop */}
      <div className="bg-blue-950 text-blue-100 text-sm py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span>+52 664 933 4573</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✉️</span>
              <span>sc@vci-soluciones.com</span>
            </div>
          </div>
          <div className="text-xs">
            Disponibles 24/7 para optimizar tu negocio
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32 min-h-[128px]">
          {/* Logo */}
          <div className="flex-shrink-0 h-32 min-h-[128px] flex items-center">
            <Link to="/" className="flex items-center h-full">
              <img
                src="/assets/logos/logonofondo2.png"
                alt="VCI Soluciones Logo"
                className="h-full w-auto"
                style={{ display: 'block', maxHeight: '128px' }}
              />
            </Link>
          </div>

          {/* All devices menu */}
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
              <Link
                to="/"
                className="text-white hover:text-blue-200 px-2 lg:px-3 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-blue-300"
              >
                Inicio
              </Link>
              <Link
                to="/servicios"
                className="text-white hover:text-blue-200 px-2 lg:px-3 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-blue-300"
              >
                Servicios
              </Link>
              <Link
                to="/quienes-somos"
                className="text-white hover:text-blue-200 px-2 lg:px-3 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-blue-300 whitespace-nowrap"
              >
                ¿Quiénes somos?
              </Link>
              <Link
                to="/buscar-citas"
                className="text-white hover:text-blue-200 px-2 lg:px-3 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-blue-300 whitespace-nowrap"
              >
                Citas
              </Link>
              <Link
                to="/contacto"
                className="bg-blue-600 hover:bg-blue-500 text-white px-3 lg:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 shadow-md whitespace-nowrap"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;