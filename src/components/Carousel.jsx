import React, { useState } from 'react';

const videos = [
  {
    src: '/assets/videos/intro.mp4',
    title: 'VCI Soluciones',
  },
  {
    src: '/assets/videos/serviciotecnico.mp4',
    title: 'Servicio Tecnico Especializado',
  },
  {
    src: '/assets/videos/ventayreparacion.mp4',
    title: 'Venta y Reparacion',
  },
  {
    src: '/assets/videos/reparacionfix.mp4',
    //title: 'Reparación de Impresoras Láser y de Tinta',
    //description: 'Servicio profesional de reparación y mantenimiento para impresoras láser y de inyección de tinta.',
  },
  // Puedes agregar más videos aquí
  // {
  //   src: '/assets/videos/tuvideo.mp4',
  //   title: 'Título',
  //   description: 'Descripción',
  // },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + videos.length) % videos.length);
  const nextSlide = () => setCurrent((current + 1) % videos.length);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-2">Nuestros Equipos en Acción</h2>
        <p className="text-gray-500 text-center mb-10">Conoce la calidad de nuestros productos y servicios</p>
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            <video
              src={videos[current].src}
              controls
              className="rounded-2xl shadow-xl w-full h-40 md:h-64 object-cover bg-black mx-auto"
            />
            {/* Flechas de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-100 text-blue-900 rounded-full p-2 shadow-md"
              aria-label="Anterior"
            >
              &#8592;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-100 text-blue-900 rounded-full p-2 shadow-md"
              aria-label="Siguiente"
            >
              &#8594;
            </button>
            {/* Indicadores */}
            <div className="flex justify-center mt-4 gap-2">
              {videos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full ${current === idx ? 'bg-blue-600' : 'bg-blue-200'}`}
                  aria-label={`Ir al video ${idx + 1}`}
                />
              ))}
            </div>
            {/* Título y descripción del video */}
            <div className="absolute left-0 bottom-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl">
              <h3 className="text-white font-bold text-lg mb-1">{videos[current].title}</h3>
              <p className="text-blue-100 text-sm">{videos[current].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
