import React, { useEffect, useState } from 'react';
import { Phone, Mail, Facebook, MessageCircle } from 'lucide-react';

const paymentMethods = [
  { name: 'Depósito', icon: '💵' },
  { name: 'Efectivo', icon: '💸' },
  { name: 'Mastercard', icon: '💳' },
  { name: 'Transferencia', icon: '🔁' },
  { name: 'Visa', icon: '💳' },
];

const printerImages = [
  '/assets/images/impresora1.jpg',
  '/assets/images/impresora2.jpg',
  '/assets/images/impresora3.jpg',
];

const API_BASE_URL = 'http://localhost:5000/api';

const Contactanos = () => {
  const [acceso, setAcceso] = useState(false);
  const [loading, setLoading] = useState(false);
  const [citas, setCitas] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  useEffect(() => {
    if (acceso) {
      setLoading(true);
      fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => setCitas(data))
        .catch(err => setError('No se pudieron obtener las citas'))
        .finally(() => setLoading(false));
    }
  }, [acceso]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('Mensaje enviado correctamente!');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <section className="relative bg-gray-50 py-12 sm:py-16 lg:py-20 px-2 sm:px-4">
      {/* Figuras geométricas decorativas - Solo Desktop */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculo decorativo superior izquierda */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
        
        {/* Rombo decorativo superior derecha */}
        <div className="absolute top-10 right-20 w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 transform rotate-45 opacity-60"></div>
        
        {/* Círculo decorativo medio */}
        <div className="absolute top-1/3 left-10 w-24 h-24 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full opacity-40"></div>
        
        {/* Elementos geométricos inferior */}
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-tl from-blue-50 to-blue-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-blue-200 transform rotate-12 opacity-50"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Banner de video */}
        <div className="flex justify-center items-center mb-8 sm:mb-10 lg:mb-12">
          <video
            src="/assets/videos/ubicacionvci.mp4"
            controls
            loop
            className="rounded-lg sm:rounded-xl shadow-md bg-black w-full max-w-xs sm:max-w-md lg:max-w-lg h-48 sm:h-56 lg:h-64 object-cover"
            poster="/assets/images/impresora1.jpg"
          >
            Tu navegador no soporta el video.
          </video>
        </div>

        {/* Título principal */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-6 sm:mb-8 px-2">
          PONERSE EN CONTACTO
        </h2>

        {/* Información de contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          {/* Teléfono */}
          <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />
            <span className="text-sm sm:text-base lg:text-lg text-blue-900 font-semibold text-center">
              664 933 4573
            </span>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
            <a 
              href="https://wa.me/526635076687" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm sm:text-base lg:text-lg text-green-600 font-semibold hover:underline text-center"
            >
              WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />
            <a 
              href="mailto:sc@vci-soluciones.com" 
              className="text-sm sm:text-base lg:text-lg text-blue-900 font-semibold hover:underline text-center break-all"
            >
              sc@vci-soluciones.com
            </a>
          </div>

          {/* Facebook */}
          <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Facebook className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />
            <a 
              href="https://www.facebook.com/profile.php?id=100092297797854" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm sm:text-base lg:text-lg text-blue-900 font-semibold hover:underline text-center"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg sm:rounded-xl overflow-hidden shadow-md mb-8 sm:mb-10 lg:mb-12">
          <iframe
            title="Ubicación VCI Soluciones"
            src="https://www.google.com/maps?q=Blvd+fundadores+20+valle+del+rubí+sección+lomas+22630+Tijuana,+Tijuana,+Mexico&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12">
          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <input 
                type="text" 
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Nombre" 
                className="border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" 
                required 
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email" 
                className="border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" 
                required 
              />
            </div>
            <input 
              type="tel" 
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              placeholder="Teléfono" 
              className="border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" 
              required 
            />
            <textarea 
              name="mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
              placeholder="Mensaje" 
              className="border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none" 
              rows={4} 
              required
            ></textarea>
            <button 
              type="button"
              onClick={handleSubmit}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 sm:py-4 rounded-lg text-sm sm:text-base transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              ENVIAR MENSAJE
            </button>
          </div>
        </div>

        {/* Métodos de pago */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-900 mb-4 sm:mb-6">
            Aceptamos las siguientes formas de pago:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {paymentMethods.map((method, idx) => (
              <div key={idx} className="flex flex-col items-center p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2">
                  {method.icon}
                </span>
                <span className="text-gray-700 text-xs sm:text-sm text-center font-medium">
                  {method.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactanos;