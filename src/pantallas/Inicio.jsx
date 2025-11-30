// src/pantallas/Inicio.jsx
// -----------------------------------------------------
// Pantalla inicial del proyecto GYMREACT3.
// Usa el Header reutilizable y muestra el contenido base.
// -----------------------------------------------------

// src/pantallas/Inicio.jsx
import React from "react";
import "./Inicio.css";
import Header from "../components/Header";

export default function Inicio() {
  return (
    <div className="inicio-container">
      <Header />
      <div className="inicio-card">
        <h2 className="inicio-title">Bienvenido al sistema de gestión GYM</h2>
        <p className="inicio-text">
          Administra clientes, entrenadores y membresías de forma rápida y profesional.
        </p>
        <button className="inicio-btn">Ver Membresías</button>
      </div>
    </div>
  );
}












