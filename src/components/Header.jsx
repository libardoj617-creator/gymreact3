// src/components/Header.jsx
// ---------------------------------------------
// Cabecera reutilizable para GYMREACT3
// Muestra logo, título, subtítulo y menú de navegación
// ---------------------------------------------

import React from "react";
import { Link } from "react-router-dom"; // Importa Link para navegación interna
import "./Header.css"; // Importa los estilos específicos del header

export default function Header() {
  return (
    <header className="header-container">
      {/* Sección superior: logo + título + subtítulo */}
      <div className="header-top">
        {/* Logo del gimnasio (ubicado en public/logo2.png) */}
        <img
          src="/logo2.png"
          alt="GYM Gimnasio"
          className="header-logo"
        />

        {/* Título principal del sistema */}
        <h1 className="header-title">GYM Gimnasio</h1>

        {/* Subtítulo institucional */}
        <span className="subtitle">by Happy System</span>
      </div>

      {/* Caja blanca con bordes redondeados que contiene los botones */}
      <div className="header-box">
        <nav className="header-nav">
          <ul>
            {/* Enlaces del menú principal con React Router */}
            <li>
              <Link to="/inicio" className="header-button">Inicio</Link>
            </li>
            <li>
              <Link to="/membresias" className="header-button">Membresías</Link>
            </li>
            <li>
              <Link to="/usuarios" className="header-button">Usuarios</Link>
            </li>
            <li>
              <Link to="/contacto" className="header-button">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}




