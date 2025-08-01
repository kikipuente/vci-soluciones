import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Cerrar menú cuando cambia la ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Manejar scroll para efectos visuales
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: '¿Quiénes somos?', path: '/quienes-somos' },
    { name: 'Citas', path: '/buscar-citas' },
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      <nav className={`bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl' : ''
      }`}>
        {/* Top bar con información de contacto - solo visible en desktop */}
        <div className="bg-blue-950 text-blue-100 text-sm py-2 px-4 hidden lg:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+52 664 933 4573</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
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
          <div className="flex justify-between items-center h-20 lg:h-32">
            {/* Logo */}
            <div className="flex-shrink-0 h-16 lg:h-28 flex items-center">
              <Link to="/" className="flex items-center h-full">
                <img
                  src="/assets/logos/logonofondo2.png"
                  alt="VCI Soluciones Logo"
                  className="h-full w-auto transition-all duration-300"
                />
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap ${
                      isActiveLink(item.path)
                        ? 'text-blue-200 border-blue-300'
                        : 'text-white hover:text-blue-200 border-transparent hover:border-blue-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contacto"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-md whitespace-nowrap ${
                    isActiveLink('/contacto')
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                  }`}
                >
                  Contáctanos
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menú principal</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMenu} />
          <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-gradient-to-b from-blue-900 to-blue-800 border-r shadow-xl overflow-y-auto">
            {/* Mobile contact info */}
            <div className="px-2 mb-8">
              <div className="text-blue-100 text-sm space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-blue-300" />
                  <a href="tel:+526649334573" className="hover:text-white transition-colors">
                    +52 664 933 4573
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-blue-300" />
                  <a href="mailto:sc@vci-soluciones.com" className="hover:text-white transition-colors">
                    sc@vci-soluciones.com
                  </a>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-700">
                <p className="text-blue-200 text-xs">
                  Disponibles 24/7 para optimizar tu negocio
                </p>
              </div>
            </div>

            {/* Mobile navigation */}
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                    isActiveLink(item.path)
                      ? 'text-white bg-blue-700 shadow-lg'
                      : 'text-blue-100 hover:text-white hover:bg-blue-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contacto"
                className={`block px-4 py-3 mt-6 rounded-md text-base font-medium transition-all duration-200 text-center shadow-lg ${
                  isActiveLink('/contacto')
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contáctanos
              </Link>
            </div>

            {/* Mobile footer */}
            <div className="mt-auto pt-6 border-t border-blue-700">
              <p className="text-blue-300 text-xs text-center">
                VCI Soluciones - Tecnología profesional
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;