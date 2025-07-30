import React, { useState } from 'react';
import { Phone, CalendarCheck, RotateCcw } from 'lucide-react';

const ContactInfo = () => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const API_BASE_URL = 'http://localhost:5000/api';

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch(`${API_BASE_URL}/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setAppointmentData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          service: '',
          message: ''
        });
        
        // Cerrar modal después de 3 segundos
        setTimeout(() => {
          setShowAppointmentModal(false);
          setSuccess(false);
        }, 3000);
      } else {
        setError(data.message || 'Error al agendar la cita');
      }
    } catch (error) {
      setError('Error de conexión. Verifica que el servidor esté funcionando.');
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: <CalendarCheck className="w-6 h-6" />,
      label: 'Agendar Cita',
      onClick: () => setShowAppointmentModal(true),
      bg: 'bg-blue-700',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Llamar',
      href: 'tel:6649334573',
      bg: 'bg-blue-600',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="white">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.364L4 29l7.818-2.236A11.96 11.96 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.885 0-3.68-.52-5.207-1.422l-.37-.22-4.642 1.327 1.327-4.642-.22-.37A9.956 9.956 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.207-7.207c-.293-.146-1.732-.857-2-1.007-.267-.146-.46-.22-.653.073-.193.293-.747 1.007-.917 1.213-.167.2-.34.22-.633.073-.293-.146-1.237-.456-2.36-1.453-.872-.777-1.46-1.733-1.633-2.026-.167-.293-.018-.45.127-.596.13-.13.293-.34.44-.513.146-.173.193-.293.293-.487.1-.193.05-.366-.025-.513-.073-.146-.653-1.58-.893-2.167-.236-.567-.477-.49-.653-.5-.167-.007-.36-.009-.553-.009-.193 0-.507.073-.773.366-.267.293-1.02 1-1.02 2.433 0 1.433 1.04 2.82 1.187 3.013.146.193 2.05 3.127 5.013 4.26.7.28 1.245.447 1.67.573.7.22 1.34.19 1.84.116.56-.083 1.732-.707 1.98-1.39.247-.683.247-1.267.173-1.39-.073-.12-.267-.193-.56-.34z"/>
        </svg>
      ),
      label: 'WhatsApp',
      href: 'https://wa.me/526635076687',
      bg: 'bg-blue-500',
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      label: 'Solicitar Devolución de Llamada',
      href: 'mailto:sc@vci-soluciones.com?subject=Solicito%20devoluci%C3%B3n%20de%20llamada',
      bg: 'bg-blue-400',
    },
  ];

  return (
    <>
      <div className="fixed right-4 bottom-24 flex flex-col gap-4 z-50">
        {contactItems.map((item, idx) => (
          item.onClick ? (
            <button
              key={idx}
              onClick={item.onClick}
              className={`group ${item.bg} hover:bg-blue-300 transition-colors duration-200 rounded-full p-3 shadow-lg flex items-center justify-center relative`}
              title={item.label}
            >
              {item.icon}
              <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-xs rounded px-2 py-1 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                {item.label}
              </span>
            </button>
          ) : (
            <a
              key={idx}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`group ${item.bg} hover:bg-blue-300 transition-colors duration-200 rounded-full p-3 shadow-lg flex items-center justify-center relative`}
              title={item.label}
            >
              {item.icon}
              <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-xs rounded px-2 py-1 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                {item.label}
              </span>
            </a>
          )
        ))}
      </div>

      {/* Modal de Agendar Cita */}
      {showAppointmentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">Agendar Cita</h3>
              <button
                onClick={() => {
                  setShowAppointmentModal(false);
                  setError('');
                  setSuccess(false);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            {success && (
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                <div className="flex items-center">
                  <div className="text-green-600 text-2xl mr-2">✅</div>
                  <div>
                    <p className="font-medium">¡Cita agendada exitosamente!</p>
                    <p className="text-sm">Te hemos enviado un email de confirmación.</p>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                <div className="flex items-center">
                  <div className="text-red-600 text-2xl mr-2">❌</div>
                  <div>
                    <p className="font-medium">Error</p>
                    <p className="text-sm">{error}</p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleAppointmentSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                <input
                  type="text"
                  required
                  value={appointmentData.name}
                  onChange={(e) => setAppointmentData({...appointmentData, name: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={appointmentData.email}
                  onChange={(e) => setAppointmentData({...appointmentData, email: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                <input
                  type="tel"
                  required
                  value={appointmentData.phone}
                  onChange={(e) => setAppointmentData({...appointmentData, phone: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha *</label>
                <input
                  type="date"
                  required
                  value={appointmentData.date}
                  onChange={(e) => setAppointmentData({...appointmentData, date: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hora *</label>
                <input
                  type="time"
                  required
                  value={appointmentData.time}
                  onChange={(e) => setAppointmentData({...appointmentData, time: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Servicio *</label>
                <select
                  required
                  value={appointmentData.service}
                  onChange={(e) => setAppointmentData({...appointmentData, service: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                >
                  <option value="">Seleccionar servicio</option>
                  <option value="Renta de Impresoras">Renta de Impresoras</option>
                  <option value="Venta de Equipos">Venta de Equipos</option>
                  <option value="Instalación de Cámaras">Instalación de Cámaras</option>
                  <option value="Mantenimiento">Mantenimiento</option>
                  <option value="Soporte Técnico">Soporte Técnico</option>
                  <option value="Cotización">Cotización</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea
                  value={appointmentData.message}
                  onChange={(e) => setAppointmentData({...appointmentData, message: e.target.value})}
                  rows={3}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe brevemente lo que necesitas..."
                  disabled={loading}
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowAppointmentModal(false);
                    setError('');
                    setSuccess(false);
                  }}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition-colors"
                  disabled={loading}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Agendando...
                    </div>
                  ) : (
                    'Agendar Cita'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactInfo;
