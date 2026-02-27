import { useNavigate } from "react-router-dom"; 

function NavBar() {
    const navigate = useNavigate();

return (
    <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate("/")}>
            ANNIE
        </div>
        <div className="navbar-links">
            <button onClick={() => navigate("/registro")}>Inicio</button>
            <button onClick={() => navigate("/registro")}>Sobre Nosotros</button>
            <button onClick={() => navigate("/registro")}>Tiendas</button>
            <button onClick={() => navigate("/registro")}>Contacto</button>
        </div>
    </nav>
        );


}



export default NavBar;