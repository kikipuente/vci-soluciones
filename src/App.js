import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactInfo from './components/ContactInfo';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import AboutUsPage from './pages/AboutUs';
import Admin from './pages/Admin';
import BuscarCitas from './components/BuscarCitas';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <ContactInfo />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/quienes-somos" element={<AboutUsPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/buscar-citas" element={<BuscarCitas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
