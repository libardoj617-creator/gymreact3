// src/App.jsx
// ---------------------------------------------
// Punto principal de la app GYMREACT3
// Muestra la pantalla Inicio por defecto
// ---------------------------------------------

// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Inicio from "./pantallas/Inicio";
import Membresias from "./pantallas/Membresias";
import Usuarios from "./pantallas/Usuarios";
import Contacto from "./pantallas/Contacto";
import Footer from "./components/Footer"; 
//pie de pagina general

export default function App() {
  return (
    <>
      <Routes>
        {/* Pantalla inicial */}
        <Route path="/" element={<Inicio />} />

        {/* Otras pantallas */}
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/membresias" element={<Membresias />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      {/* Footer aparece en todas las pantallas */}
      <Footer />
    </>
  );
}

