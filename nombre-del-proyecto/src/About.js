import EQUIPO from "./IMAGENES/EQUIPO.jpg";

function About() {
  return (
    <>
      <section className="about-historia">
        <div className="historia-container">
          <div className="historia-content">
            <h1>Nuestra historia</h1>
            <div className="historia-text">
              <p>Annie nació en 2025 con el objetivo de apoyar a los pequeños negocios locales.</p>
              <p>Observamos que muchos emprendedores necesitaban una plataforma digital para:</p>
              <ul>
                <li>Crecer y expandirse</li>
                <li>Conectar con nuevos clientes</li>
                <li>Generar confianza en la comunidad</li>
              </ul>
              <p>Así, creamos Annie: un espacio seguro, innovador y cercano para impulsar el comercio local.</p>
            </div>
          </div>
          <div className="historia-imagen">
          {/*  <img src={EQUIPO} alt="Historia de Annie" /> */}
          </div>
        </div>
      </section>

      <section className="about-valores">
        <h2>Nuestros valores</h2>
        <div className="about-cards">
          <div className="about-card">
            <h3>Colaboración</h3>
            <p>Trabajamos juntos para crear oportunidades y conectar personas.</p>
          </div>
          <div className="about-card">
            <h3>Innovación</h3>
            <p>Buscamos soluciones creativas para los retos de los negocios locales.</p>
          </div>
          <div className="about-card">
            <h3>Confianza</h3>
            <p>Generamos relaciones honestas y seguras entre clientes y negocios.</p>
          </div>
          <div className="about-card">
            <h3>Crecimiento</h3>
            <p>Impulsamos el desarrollo personal y profesional de nuestros usuarios.</p>
          </div>
        </div>
      </section>

  
    <section class="about-testimonios">
      <h2>Testimonios</h2>
      <div class="testimonios-cards">
        <div class="testimonio-card">
          <p>"Gracias a Annie, mi cafetería ha duplicado sus clientes y ahora tengo presencia digital."</p>
          <span>- Sofía, Café Aroma</span>
        </div>
        <div class="testimonio-card">
          <p>"La plataforma es fácil de usar y me ha ayudado a conectar con nuevos clientes."</p>
          <span>- Fernanda, Belleza los Olvidados</span>
        </div>
        <div class="testimonio-card">
          <p>"Me siento seguro usando Annie, mis datos y los de mis clientes están protegidos."</p>
          <span>- Luz, CYBER</span>
        </div>
      </div>
    </section>


    <section class="about-faq">
      <h2>Preguntas frecuentes</h2>
      <div class="faq-list">
        <div class="faq-item">
          <h4>¿Cómo registro mi negocio en Annie?</h4>
          <p>Solo debes hacer clic en "Registra tu negocio" y llenar el formulario con tus datos.</p>
        </div>
        <div class="faq-item">
          <h4>¿Tiene algún costo usar Annie?</h4>
          <p>No, Annie es totalmente gratuita para negocios y clientes.</p>
        </div>
        <div class="faq-item">
          <h4>¿Cómo protege Annie mis datos?</h4>
          <p>Usamos protocolos de seguridad y cifrado para proteger toda la información.</p>
        </div>
      </div>
    </section>

    </>
  );
}

export default About;
