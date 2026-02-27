import { useState } from "react";

function Inicio({ onRegisterClick }) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>Descubre negocios</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <h1>¿Por que usar annie?</h1>

      <section class="beneficios" id="beneficios">
        <h2>¿Por qué usar ANNIE?</h2>
        <div class="cards">
          <div class="card">
            <h3>Mayor visibilidad</h3>
            <p>Haz que más personas conozcan tu negocio en el mundo digital.</p>
          </div>
          <div class="card">
            <h3>Seguridad</h3>
            <p>Tus datos y los de tus clientes están protegidos con ANNIE.</p>
          </div>
          <div class="card">
            <h3>Comunicación directa</h3>
            <p>Conecta fácilmente con tus clientes y aumenta tus ventas.</p>
          </div>
          <div class="card">
            <h3>Crecimiento garantizado</h3>
            <p>Mejora tu presencia y alcanza más oportunidades de negocio.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
