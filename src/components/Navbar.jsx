import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img
                src="/src/assets/images/Imagen 1.jpg" // Asegúrate de tener un logo en public/logo.png
                alt="Logo"
                width="50"
                height="50"
                className="d-inline-block align-top mx-3"
              />
              Empresa
            </Link>
    
            {/* Botón responsive */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
    
            {/* Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about">
                    Nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contact">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
}

export default Navbar
