import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registro.css";


function Registro({ onLoginClick }) {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
        else if (formData.nombre.trim().length < 3) newErrors.nombre = "Nombre muy corto";

        if (!formData.email) newErrors.email = "El correo es requerido";
        else if (!validateEmail(formData.email)) newErrors.email = "Correo inválido";

        if (!formData.password) newErrors.password = "La contraseña es requerida";
        else if (formData.password.length < 6) newErrors.password = "Mínimo 6 caracteres";

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Las contraseñas no coinciden";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setLoading(true);
            console.log("Datos de registro:", formData);
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
                    <h2>Crear cuenta</h2>
                    <p className="auth-subtitle">Únete a miles de emprendedores</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre completo</label>
                            <input
                                id="nombre"
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Tu nombre"
                                className={errors.nombre ? "input-error" : ""}
                            />
                            {errors.nombre && <span className="error-text">{errors.nombre}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="nombre@empresa.com"
                                className={errors.email ? "input-error" : ""}
                            />
                            {errors.email && <span className="error-text">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className={errors.password ? "input-error" : ""}
                            />
                            {errors.password && <span className="error-text">{errors.password}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirmar contraseña</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className={errors.confirmPassword ? "input-error" : ""}
                            />
                            {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                        </div>

                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={loading}
                        >
                            {loading ? "Creando cuenta..." : "Crear cuenta"}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>¿Ya tienes cuenta? <button onClick={() => navigate("/")} className="auth-link-button">Inicia sesión aquí</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registro;
