// src/pantallas/Contacto.jsx
import Header from "../components/Header";

export default function Contacto() {
  const estilos = {
    formulario: {
      background: "#fff",
      maxWidth: "500px",
      margin: "40px auto",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    },
    titulo: {
      marginBottom: "10px",
      color: "#333",
      textAlign: "center"
    },
    label: {
      fontWeight: "bold",
      color: "#444"
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "14px"
    },
    textarea: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "14px"
    },
    boton: {
      backgroundColor: "#ff8c00",
      color: "white",
      border: "none",
      padding: "12px",
      borderRadius: "6px",
      fontSize: "16px",
      cursor: "pointer"
    }
  };

  return (
    <>
      <Header />

    <div style={estilos.formulario}>
      <h2 style={estilos.titulo}>Contáctanos</h2>

      <label htmlFor="nombre" style={estilos.label}>Nombre</label>
      <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" style={estilos.input} />

      <label htmlFor="correo" style={estilos.label}>Correo</label>
      <input type="email" id="correo" name="correo" placeholder="Tu correo electrónico" style={estilos.input} />

      <label htmlFor="mensaje" style={estilos.label}>Mensaje</label>
      <textarea id="mensaje" name="mensaje" rows="5" placeholder="Escribe tu mensaje aquí..." style={estilos.textarea} />

      <button type="submit" style={estilos.boton}>Enviar</button>
    </div>
    </>

  );
}






