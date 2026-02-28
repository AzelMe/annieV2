import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        ANNIE
      </div>
      <div className="navbar-links">
        <button onClick={() => navigate("/Inicio")}>Inicio</button>
        <button onClick={() => navigate("/About")}>Sobre Nosotros</button>
        <button onClick={() => navigate("/Tiendas")}>Tiendas</button>
        <button onClick={() => navigate("/Contactos")}>Contacto</button>
      </div>
    </nav>
  );
}

export default NavBar;
