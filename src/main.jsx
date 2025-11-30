// src/main.jsx
// ---------------------------------------------
// Punto de entrada principal de la aplicación
// GYMREACT3 creada con Vite.
// Renderiza el componente App dentro del HTML.
// ---------------------------------------------



import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // 👈 Importa BrowserRouter
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);






