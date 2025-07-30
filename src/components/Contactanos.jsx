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

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Banner de video */}
        <div className="flex justify-center items-center mb-8">
          <video
            src="/assets/videos/ubicacionvci.mp4"
            controls
            loop
            className="rounded-xl shadow-md bg-black w-full max-w-lg h-64 object-cover"
            poster="/assets/images/impresora1.jpg" // Opcional: imagen de portada
          >
            Tu navegador no soporta el video.
          </video>
        </div>
        <h2 className="text-4xl font-bold text-blue-900 mb-4">PONERSE EN CONTACTO.</h2>
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="flex flex-col items-center gap-2">
            <Phone className="w-8 h-8 text-blue-700 mx-auto" />
            <span className="text-lg text-blue-900 font-semibold">664 933 4573</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MessageCircle className="w-8 h-8 text-green-500 mx-auto" />
            <a href="https://wa.me/526635076687" target="_blank" rel="noopener noreferrer" className="text-lg text-green-600 font-semibold hover:underline">WhatsApp</a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Mail className="w-8 h-8 text-blue-700 mx-auto" />
            <a href="mailto:sc@vci-soluciones.com" className="text-lg text-blue-900 font-semibold hover:underline">sc@vci-soluciones.com</a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Facebook className="w-8 h-8 text-blue-700 mx-auto" />
            <a href="https://www.facebook.com/profile.php?id=100092297797854" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-900 font-semibold hover:underline">Facebook</a>
          </div>
        </div>
        {/* Google Map */}
        <div className="w-full h-64 rounded-xl overflow-hidden shadow mb-8">
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
        <form className="bg-white rounded-xl shadow-md p-8 mb-8 flex flex-col gap-4">
          <input type="text" placeholder="Nombre" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <input type="tel" placeholder="Teléfono" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <textarea placeholder="Mensaje" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} required></textarea>
          <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded transition-colors">ENVIAR</button>
        </form>
        {/* Métodos de pago */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Aceptamos las siguientes formas de pago:</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {paymentMethods.map((m, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-4xl mb-1">{m.icon}</span>
                <span className="text-gray-700 text-sm">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactanos; 