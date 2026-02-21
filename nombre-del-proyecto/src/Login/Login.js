import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login({ onRegisterClick }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!email) newErrors.email = "El correo es requerido";
        else if (!validateEmail(email)) newErrors.email = "Correo inválido";

        if (!password) newErrors.password = "La contraseña es requerida";
        else if (password.length < 6) newErrors.password = "Mínimo 6 caracteres";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setLoading(true);
            console.log("Email:", email);
            console.log("Password:", password);
            setTimeout(() => setLoading(false), 1000);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-content">
                <div className="auth-logo">
                    <h1>ANNIE</h1>
                    <p>Gestión empresarial para emprendedores</p>
                </div>

                <div className="auth-card">
                    <h2>Bienvenido de vuelta</h2>
                    <p className="auth-subtitle">Inicia sesión en tu cuenta</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (errors.email) setErrors({ ...errors, email: "" });
                                }}
                                placeholder="nombre@empresa.com"
                                className={errors.email ? "input-error" : ""}
                            />
                            {errors.email && <span className="error-text">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <div className="label-row">
                                <label htmlFor="password">Contraseña</label>
                                <a href="#" className="forgot-link">¿Olvidaste tu contraseña?</a>
                            </div>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (errors.password) setErrors({ ...errors, password: "" });
                                }}
                                placeholder="••••••••"
                                className={errors.password ? "input-error" : ""}
                            />
                            {errors.password && <span className="error-text">{errors.password}</span>}
                        </div>

                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={loading}
                        >
                            {loading ? "Iniciando sesión..." : "Iniciar sesión"}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>¿No tienes cuenta? <button onClick={() => navigate("/registro")} className="auth-link-button">Regístrate aquí</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
