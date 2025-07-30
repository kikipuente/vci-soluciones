import React from 'react';

const proveedores = [
  { name: 'Lexmark', src: '/assets/proveedores/lexmark2.png' },
  { name: 'Xerox', src: '/assets/proveedores/xerox-2008-new-seeklogo.png' },
  { name: 'Epson', src: '/assets/proveedores/epson-seeklogo.png' },
  { name: 'Canon', src: '/assets/proveedores/canon-seeklogo.png' },
  { name: 'Brother', src: '/assets/proveedores/brother.png' },
  { name: 'Kyocera', src: '/assets/proveedores/kyocera.png' },
  { name: 'HP', src: '/assets/proveedores/hp.png' },
  { name: 'Samsung', src: '/assets/proveedores/samsung.png' },
  { name: 'Zebra', src: '/assets/proveedores/zebra.png' },
];

const ProveedoresBar = () => (
  <div className="bg-blue-600 py-6">
    <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto px-4">
      {proveedores.map((prov) => (
        <div key={prov.name} className="bg-white rounded-lg shadow p-2 flex items-center justify-center" style={{ minWidth: 100, minHeight: 48 }}>
          <img
            src={prov.src}
            alt={prov.name}
            className="h-10 w-auto object-contain"
            style={{ maxWidth: 120 }}
          />
        </div>
      ))}
    </div>
  </div>
);

export default ProveedoresBar; 