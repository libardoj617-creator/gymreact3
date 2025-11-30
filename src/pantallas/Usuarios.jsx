// src/pantallas/Usuarios.jsx
import React from 'react';
import Header from '../components/Header';
import './Usuarios.css';

const Usuarios = () => {
  const usuarios = [
    { id: '001', nombre: 'Evelin Luna', edad: 25, correo: 'evelin.luna@gmail.com', estado: 'Activo' },
    { id: '002', nombre: 'Jose Ortiz', edad: 45, correo: 'jose.ortiz@gmail.com', estado: 'Activo' },
    { id: '003', nombre: 'Estefania Ardila', edad: 31, correo: 'sthfaneliana@gmail.com', estado: 'Activo' },
    { id: '004', nombre: 'Jeiler Riascos', edad: 24, correo: 'jeiler.riascos@gmail.com', estado: 'Inactivo' },
  ];

  return (
    <div className="usuarios-container">
      <Header />
      <main className="usuarios-main">
        <h2>Gestión de Usuarios</h2>
        <p>En esta sección puedes visualizar los usuarios registrados en el sistema.</p>
        <table className="usuarios-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre Completo</th>
              <th>Edad</th>
              <th>Correo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.edad}</td>
                <td>{user.correo}</td>
                <td>{user.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="agregar-btn">Agregar Usuario</button>
      </main>
    </div>
  );
};

export default Usuarios;



