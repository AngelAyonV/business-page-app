
const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container text-center">
        <div className="row gy-4">
          {/* 📌 Columna 1: Logo y descripción */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold">Mi Empresa</h5>
            <p className="text-white-50">
              Innovando para el futuro, brindando soluciones digitales de calidad.
            </p>
          </div>
  
          {/* 📌 Columna 2: Enlaces rápidos */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold">Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-light text-decoration-none">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-light text-decoration-none">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
  
          {/* 📌 Columna 3: Contacto */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold">Contacto</h5>
            <p className="text-white-50">
              📍 Dirección: Calle Falsa 123, CDMX <br />
              📧 Email: info@miempresa.com <br />
              📞 Tel: +52 55 1234 5678
            </p>
          </div>
  
          {/* 📌 Columna 4: Redes Sociales con Iconos */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold">Síguenos</h5>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="#" className="text-light">
                <img src="/src/assets/icons/facebook.png" alt="Facebook" width="30" />
              </a>
              <a href="#" className="text-light">
                <img src="/src/assets/icons/instagram.png" alt="Instagram" width="30" />
              </a>
              <a href="#" className="text-light">
                <img src="/src/assets/icons/linkedin.png" alt="LinkedIn" width="30" />
              </a>
              <a href="#" className="text-light">
                <img src="/src/assets/icons/whatsapp.png" alt="WhatsApp" width="30" />
              </a>
            </div>
          </div>
        </div>
  
        {/* 📌 Línea divisoria y Copyright */}
        <hr className="border-secondary my-4" />
        <p className="mb-0 text-white">
          &copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
  
};

export default Footer;
