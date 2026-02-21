
import { useState } from "react";
import "./Login.css"; // 👈 reutilizamos los estilos del login

function Comercio() {
  // Estados para guardar lo que escribe el usuario
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Dirección:", direccion);
    console.log("Teléfono:", telefono);
    console.log("Categoría:", categoria);
    // Aquí podrías conectar con una API para guardar el comercio
  };

  return (
    <div className="login-container">
      <h2>Registrar Comercio</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del comercio:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Dirección:</label>
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Categoría:</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="">Seleccione una categoría</option>
            <option value="Restaurante">Restaurante</option>
            <option value="Tienda">Tienda</option>
            <option value="Servicio">Servicio</option>
          </select>
        </div>

        <button type="submit">Guardar Comercio</button>
      </form>
    </div>
  );
}

export default Comercio;
