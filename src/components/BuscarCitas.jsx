import React, { useState, useMemo, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay, isSameDay, startOfMonth, endOfWeek, endOfMonth } from 'date-fns';
import esES from 'date-fns/locale/es';

const locales = {
  'es': esES,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

// Componente personalizado para mostrar solo el servicio en el evento
const EventoSoloServicio = ({ event }) => (
  <div style={{ fontWeight: 'bold', fontSize: '0.85em', textAlign: 'center', padding: '2px 0' }}>
    {event.resource.service}
  </div>
);

const IconoOjitoVerde = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#16a34a" className="w-5 h-5 mx-auto">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
    <circle cx="12" cy="12" r="3" fill="#16a34a" />
  </svg>
);

// Label personalizado para la vista Agenda
const CustomLabel = ({ label, view, date }) => {
  if (view === 'agenda') {
    // Calcula el rango de meses y años visibles en la agenda
    const start = startOfWeek(startOfMonth(date), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(date), { weekStartsOn: 1 });
    const startLabel = format(start, 'MMM yyyy');
    const endLabel = format(end, 'MMM yyyy');
    return <span>{startLabel} – {endLabel}</span>;
  }
  return <span>{label}</span>;
};

const BuscarCitas = () => {
  const [email, setEmail] = useState('');
  const [citas, setCitas] = useState([]);
  const [todasCitas, setTodasCitas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);
  const [acceso, setAcceso] = useState(false);
  const [loginUser, setLoginUser] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCita, setNewCita] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: '',
    status: 'pendiente',
  });
  const [addError, setAddError] = useState('');
  const [calendarView, setCalendarView] = useState('month');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  // Cargar todas las citas al entrar
  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/appointments');
        const data = await response.json();
        const citasArray = data.appointments || [];
        setCitas(citasArray);
        setTodasCitas(citasArray);
      } catch (err) {
        setCitas([]);
        setTodasCitas([]);
      }
    };
    fetchCitas();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: loginUser, password: loginPass })
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Login incorrecto');
      }
      setAcceso(true);
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleBuscar = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:5000/appointments/by-email/${email}`);
      const data = await response.json();
      const citasArray = data.appointments || [];
      setCitas(citasArray);
    } catch (err) {
      setError('No se pudieron obtener las citas');
      setCitas([]);
    } finally {
      setLoading(false);
    }
  };

  const handleMostrarTodas = () => {
    setCitas(todasCitas);
    setError('');
    setEmail('');
  };

  const handleAgendarCita = (cita) => {
    setCitaSeleccionada(cita);
    setSelectedStatus(cita.status);
    setModalOpen(true);
    setStatusMessage('');
  };

  const closeModal = () => {
    setModalOpen(false);
    setCitaSeleccionada(null);
  };

  // Simulación de agregar cita manualmente (solo frontend)
  const handleAddCita = (e) => {
    e.preventDefault();
    // Validación simple
    if (!newCita.name || !newCita.email || !newCita.date || !newCita.time || !newCita.service) {
      setAddError('Por favor llena todos los campos obligatorios.');
      return;
    }
    setAddError('');
    // Simula ID único
    const id = Math.floor(Math.random() * 1000000);
    setCitas(prev => [
      ...prev,
      { ...newCita, id }
    ]);
    setShowAddModal(false);
    setNewCita({ name: '', email: '', phone: '', date: '', time: '', service: '', message: '', status: 'pendiente' });
  };

  // Mapeo de eventos para el calendario
  const eventos = useMemo(() =>
    citas
      .filter(cita => cita.date && cita.time)
      .map(cita => {
        const [year, month, day] = cita.date.split('-');
        const [hour, minute] = cita.time.split(':');
        const start = new Date(year, month - 1, day, hour, minute);
        const end = new Date(start.getTime() + 60 * 60 * 1000);
        return {
          id: cita.id,
          title: cita.name,
          start,
          end,
          resource: cita,
        };
      }),
    [citas]
  );

  // Citas a mostrar en la tabla inferior
  const citasTabla = useMemo(() => {
    if (calendarView === 'agenda') {
      return citas;
    }
    // Solo las citas del día seleccionado
    return citas.filter(cita => {
      const [year, month, day] = cita.date.split('-');
      const citaDate = new Date(year, month - 1, day);
      return isSameDay(citaDate, selectedDate);
    });
  }, [citas, calendarView, selectedDate]);

  console.log('Eventos generados para el calendario:', eventos);

  // Función para actualizar el status de una cita
  const handleUpdateStatus = async () => {
    if (!citaSeleccionada || !selectedStatus) return;
    
    setUpdatingStatus(true);
    setStatusMessage('');
    
    try {
      const response = await fetch(`http://localhost:5000/api/appointments/${citaSeleccionada.id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: selectedStatus })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al actualizar el status');
      }

      // Actualizar el estado local
      setCitas(prevCitas => 
        prevCitas.map(cita => 
          cita.id === citaSeleccionada.id 
            ? { ...cita, status: selectedStatus }
            : cita
        )
      );
      
      // Actualizar la cita seleccionada
      setCitaSeleccionada(prev => ({ ...prev, status: selectedStatus }));
      
      setStatusMessage('Status actualizado correctamente');
      setTimeout(() => setStatusMessage(''), 3000);
      
    } catch (error) {
      setStatusMessage(`Error: ${error.message}`);
    } finally {
      setUpdatingStatus(false);
    }
  };

  if (!acceso) {
    return (
      <div className="max-w-xs mx-auto mt-16 p-4 border rounded shadow">
        <h2 className="text-lg font-bold mb-4 text-center">Iniciar sesión</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Usuario"
            value={loginUser}
            onChange={e => setLoginUser(e.target.value)}
            className="border rounded px-2 py-1 w-full"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={loginPass}
            onChange={e => setLoginPass(e.target.value)}
            className="border rounded px-2 py-1 w-full"
            required
          />
          {loginError && <div className="text-red-600 text-sm">{loginError}</div>}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 w-full"
            disabled={loginLoading}
          >
            {loginLoading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Buscar Citas por Correo</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border rounded px-2 py-1 flex-1"
        />
        <button
          onClick={handleBuscar}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          disabled={loading || !email}
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
        <button
          onClick={handleMostrarTodas}
          className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-700"
        >
          Mostrar todas
        </button>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800"
        >
          Agregar cita
        </button>
      </div>
      {error && <div className="text-red-600 mb-2">{error}</div>}

      {/* Modal para agregar cita */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Agregar nueva cita</h3>
            <form onSubmit={handleAddCita} className="flex flex-col gap-2">
              <input type="text" placeholder="Nombre*" value={newCita.name} onChange={e => setNewCita({ ...newCita, name: e.target.value })} className="border rounded px-2 py-1" required />
              <input type="email" placeholder="Correo*" value={newCita.email} onChange={e => setNewCita({ ...newCita, email: e.target.value })} className="border rounded px-2 py-1" required />
              <input type="tel" placeholder="Teléfono" value={newCita.phone} onChange={e => setNewCita({ ...newCita, phone: e.target.value })} className="border rounded px-2 py-1" />
              <input type="date" placeholder="Fecha*" value={newCita.date} onChange={e => setNewCita({ ...newCita, date: e.target.value })} className="border rounded px-2 py-1" required />
              <input type="time" placeholder="Hora*" value={newCita.time} onChange={e => setNewCita({ ...newCita, time: e.target.value })} className="border rounded px-2 py-1" required />
              <input type="text" placeholder="Servicio*" value={newCita.service} onChange={e => setNewCita({ ...newCita, service: e.target.value })} className="border rounded px-2 py-1" required />
              <textarea placeholder="Mensaje" value={newCita.message} onChange={e => setNewCita({ ...newCita, message: e.target.value })} className="border rounded px-2 py-1" />
              <select value={newCita.status} onChange={e => setNewCita({ ...newCita, status: e.target.value })} className="border rounded px-2 py-1">
                <option value="pendiente">Pendiente</option>
                <option value="confirmada">Confirmada</option>
                <option value="cancelada">Cancelada</option>
              </select>
              {addError && <div className="text-red-600 text-sm">{addError}</div>}
              <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 mt-2">Guardar</button>
            </form>
          </div>
        </div>
      )}

      {/* Calendario */}
      <div className="mb-8 bg-white rounded shadow p-2">
        <div className="flex justify-between items-center mb-2">
          <div></div>
          <div className="text-lg font-bold">Citas agendadas</div>
          <div></div>
        </div>
        <Calendar
          localizer={localizer}
          events={eventos}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          views={['month', 'agenda']}
          defaultView="month"
          messages={{
            next: 'Sig',
            previous: 'Ant',
            today: 'Hoy',
            month: 'Mes',
            agenda: 'Agenda',
            date: 'Fecha',
            time: 'Hora',
            event: 'Evento',
            noEventsInRange: 'No hay citas en este rango',
          }}
          onSelectEvent={event => handleAgendarCita(event.resource)}
          components={{
            event: EventoSoloServicio,
            toolbar: undefined,
            label: CustomLabel,
          }}
          eventPropGetter={(event) => ({
            style: {
              border: '1px solid #bcd',
              borderRadius: '6px',
              backgroundColor: '#e6f0fa',
              color: '#1e3a8a',
              fontWeight: 'bold',
              fontSize: '0.85em',
              padding: '2px 0',
              minHeight: '18px',
              lineHeight: '1.1',
            }
          })}
          onView={view => setCalendarView(view)}
          onNavigate={date => setSelectedDate(date)}
          selectable
          date={selectedDate}
          view={calendarView}
        />
      </div>


      {/* Tabla inferior sincronizada con el calendario */}
      {citasTabla.length > 0 ? (
        <table className="w-full border mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Ticket</th>
              <th className="border px-2 py-1">Nombre</th>
              <th className="border px-2 py-1">Correo</th>
              <th className="border px-2 py-1">Teléfono</th>
              <th className="border px-2 py-1">Fecha</th>
              <th className="border px-2 py-1">Hora</th>
              <th className="border px-2 py-1">{calendarView === 'agenda' ? 'Evento' : 'Servicio'}</th>
              <th className="border px-2 py-1">Estado</th>
              <th className="border px-2 py-1">Ticket</th>
            </tr>
          </thead>
          <tbody>
            {citasTabla.map(cita => (
              <tr key={cita.id}>
                <td className="border px-2 py-1">{cita.id}</td>
                <td className="border px-2 py-1">{cita.name}</td>
                <td className="border px-2 py-1">{cita.email}</td>
                <td className="border px-2 py-1">{cita.phone}</td>
                <td className="border px-2 py-1">{format(new Date(cita.date), 'dd/MM/yyyy')}</td>
                <td className="border px-2 py-1">{cita.time}</td>
                <td className="border px-2 py-1">{calendarView === 'agenda' ? cita.service : cita.service}</td>
                <td className="border px-2 py-1">{cita.status}</td>
                <td className="border px-2 py-1 text-center">
                  <button
                    onClick={() => handleAgendarCita(cita)}
                    className="hover:scale-110 transition-transform"
                    title="Ver Ticket"
                  >
                    <IconoOjitoVerde />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-gray-500"></div>
      )}

      {/* Modal */}
      {modalOpen && citaSeleccionada && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Cita Agendada</h3>
            
            {/* Información de la cita */}
            <div className="mb-4 space-y-2">
              <div><strong>Ticket:</strong> {citaSeleccionada.id}</div>
              <div><strong>Nombre:</strong> {citaSeleccionada.name}</div>
              <div><strong>Servicio:</strong> {citaSeleccionada.service}</div>
              <div><strong>Estado:</strong> {citaSeleccionada.status}</div>
              <div><strong>Fecha:</strong> {format(new Date(citaSeleccionada.date), 'dd/MM/yyyy')}</div>
              <div><strong>Hora:</strong> {citaSeleccionada.time}</div>
              <div><strong>Correo:</strong> {citaSeleccionada.email}</div>
              <div><strong>Teléfono:</strong> {citaSeleccionada.phone}</div>
              <div><strong>Mensaje:</strong> {citaSeleccionada.message}</div>
            </div>

            {/* Sección de actualización de status */}
            <div className="border-t pt-4 mt-4">
              <h4 className="font-semibold mb-2">Actualizar Estado</h4>
              <div className="flex gap-2 items-center">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="border rounded px-2 py-1 flex-1"
                  disabled={updatingStatus}
                >
                  <option value="pendiente">Pendiente</option>
                  <option value="asignada">Asignada</option>
                  <option value="completada">Completada</option>
                </select>
                <button
                  onClick={handleUpdateStatus}
                  disabled={updatingStatus || selectedStatus === citaSeleccionada.status}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {updatingStatus ? 'Actualizando...' : 'Actualizar'}
                </button>
              </div>
              
              {/* Mensajes de estado */}
              {statusMessage && (
                <div className={`mt-2 text-sm ${statusMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                  {statusMessage}
                </div>
              )}
            </div>

            <button
              onClick={closeModal}
              className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 w-full"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuscarCitas; 