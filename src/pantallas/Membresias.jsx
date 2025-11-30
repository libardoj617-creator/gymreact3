import Header from "../components/Header";
import "./Membresias.css";

export default function Membresias() {
  return (
    <>
      <Header />

      <div className="tabla-container">
        <h2 className="tabla-titulo">Planes de Membresía</h2>

        <table className="tabla-membresias">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Duración</th>
              <th>Precio</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Día</td>
              <td>1 día</td>
              <td>$10.000</td>
              <td className="activo">Activo</td>
            </tr>
            <tr>
              <td>Semana</td>
              <td>7 días</td>
              <td>$40.000</td>
              <td className="activo">Activo</td>
            </tr>
            <tr>
              <td>Mes</td>
              <td>30 días</td>
              <td>$100.000</td>
              <td className="inactivo">Inactivo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}


