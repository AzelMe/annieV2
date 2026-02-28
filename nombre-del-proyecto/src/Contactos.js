import { useState } from "react";

function Contactos({ onRegisterClick }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) newErrors.email = "El correo es requerido";
    else if (!validateEmail(email)) newErrors.email = "Correo inválido";

    setErrors(newErrors);
  };

  return (
    <>
      <section class="contact-hero">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte</p>
      </section>

      <div class="contact-container">
        <section class="contact-info">
          <h2>Información de Contacto</h2>
          <div class="info-items">
            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h3>Ubicación</h3>
                <p>San Pedro 400, Nuevo León</p>
              </div>
            </div>

            <div class="info-item">
              <i class="fas fa-phone"></i>
              <div>
                <h3>Teléfono</h3>
                <p>+52 (81) 1234-5678</p>
              </div>
            </div>

            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>contacto@annie.com</p>
              </div>
            </div>

            <div class="info-item">
              <i class="fas fa-clock"></i>
              <div>
                <h3>Horario</h3>
                <p>Lunes a Viernes: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        <section class="contact-form">
          <h2>Envíanos un Mensaje</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                placeholder="Nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div>
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
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>

            <div class="form-group">
              <select id="asunto" required>
                <option value="">Selecciona el asunto</option>
                <option value="negocio">Ingresar mi negocio</option>
                <option value="consulta">Consulta general</option>
                <option value="soporte">Soporte técnico</option>
                <option value="sugerencia">Sugerencia</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div class="form-group">
              <textarea
                id="mensaje"
                placeholder="Tu mensaje..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary"></button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Contactos;
