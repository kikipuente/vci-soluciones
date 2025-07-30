import React from 'react';
import { Phone, Mail, MapPin, Mail as MailIcon } from 'lucide-react';

const FacebookIcon = (props) => (
  <svg viewBox="0 0 48 48" width={24} height={24} {...props}>
    <circle cx="24" cy="24" r="24" fill="#1877F3" />
    <path d="M29.5 24h-3v12h-5V24h-2v-4h2v-2.5c0-2.2 1.3-4.5 4.5-4.5h3v4h-2c-.6 0-1 .4-1 1V20h3.5l-.5 4z" fill="#fff" />
  </svg>
);

const TikTokIcon = (props) => (
  <svg viewBox="0 0 48 48" width={24} height={24} {...props}>
    <g>
      <circle cx="24" cy="24" r="24" fill="#000" />
      <path d="M33.5 19.5c-2.2 0-4-1.8-4-4V12h-4.5v16.5c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.3 0 .5 0 .8.1v-4.1c-.3 0-.5-.1-.8-.1-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8V23c1.2 1 2.7 1.5 4.2 1.5h1.3v-5H33.5z" fill="#fff" />
      <path d="M33.5 19.5c-2.2 0-4-1.8-4-4V12h-2.5v16.5c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.3 0 .5 0 .8.1v-4.1c-.3 0-.5-.1-.8-.1-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8V23c1.2 1 2.7 1.5 4.2 1.5h1.3v-5H33.5z" fill="#25F4EE" />
      <path d="M33.5 19.5c-2.2 0-4-1.8-4-4V12h-2.5v16.5c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.3 0 .5 0 .8.1v-4.1c-.3 0-.5-.1-.8-.1-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8V23c1.2 1 2.7 1.5 4.2 1.5h1.3v-5H33.5z" fill="#FE2C55" fillOpacity=".5" />
    </g>
  </svg>
);

const ContactCTA = () => (
  <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 py-20 text-center">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para optimizar tu empresa?</h2>
      <p className="text-blue-100 mb-8">Contáctanos hoy mismo y obtén una cotización personalizada sin compromiso</p>
      <div className="flex justify-center mb-8">
        <a href="https://wa.me/526635076687" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 flex items-center gap-2 text-lg shadow-lg">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="white">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.364L4 29l7.818-2.236A11.96 11.96 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.885 0-3.68-.52-5.207-1.422l-.37-.22-4.642 1.327 1.327-4.642-.22-.37A9.956 9.956 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.207-7.207c-.293-.146-1.732-.857-2-1.007-.267-.146-.46-.22-.653.073-.193.293-.747 1.007-.917 1.213-.167.2-.34.22-.633.073-.293-.146-1.237-.456-2.36-1.453-.872-.777-1.46-1.733-1.633-2.026-.167-.293-.018-.45.127-.596.13-.13.293-.34.44-.513.146-.173.193-.293.293-.487.1-.193.05-.366-.025-.513-.073-.146-.653-1.58-.893-2.167-.236-.567-.477-.49-.653-.5-.167-.007-.36-.009-.553-.009-.193 0-.507.073-.773.366-.267.293-1.02 1-1.02 2.433 0 1.433 1.04 2.82 1.187 3.013.146.193 2.05 3.127 5.013 4.26.7.28 1.245.447 1.67.573.7.22 1.34.19 1.84.116.56-.083 1.732-.707 1.98-1.39.247-.683.247-1.267.173-1.39-.073-.12-.267-.193-.56-.34z"/>
          </svg>
          Contactar por WhatsApp
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        <div className="bg-white/10 rounded-xl px-4 py-3 flex items-center gap-2 text-white text-base justify-center max-w-xs w-full mx-auto">
          <Phone className="w-5 h-5 flex-shrink-0" /> <span className="truncate">664 933 4573</span>
        </div>
        <div className="bg-white/10 rounded-xl px-4 py-3 flex items-center gap-2 text-white text-base justify-center max-w-xs w-full mx-auto">
          <Mail className="w-5 h-5 flex-shrink-0" /> <span className="truncate">sc@vci-soluciones.com</span>
        </div>
        <div className="bg-white/10 rounded-xl px-4 py-3 flex items-center gap-2 text-white text-base justify-center max-w-xs w-full mx-auto">
          <MapPin className="w-5 h-5 flex-shrink-0" /> <span className="truncate">Blvd fundadores 20 valle del rubí sección lomas 22630 Tijuana, Tijuana, Mexico</span>
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://www.facebook.com/profile.php?id=100092297797854" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/40 p-3 rounded-full"><FacebookIcon /></a>
        <a href="https://www.tiktok.com/@vci.soluciones" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/40 p-3 rounded-full"><TikTokIcon /></a>
        <a href="mailto:sc@vci-soluciones.com" className="bg-white/20 hover:bg-white/40 p-3 rounded-full text-white"><MailIcon className="w-6 h-6" /></a>
      </div>
    </div>
  </section>
);

export default ContactCTA; 