import { Navbar } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

const BusinessPageApp = () => {
  return (
    <>
      <Navbar />

      <div className="container-fluid p-0">
        {/* Sección Home */}
        <section
          id="home"
          className="min-vh-100 d-flex align-items-center justify-content-center py-5"
        >
          <div className="container text-center">
            <HomePage />
          </div>
        </section>

        {/* Sección Nosotros */}
        <section
          id="about"
          className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5"
        >
          <div className="container text-center">
            <AboutPage />
          </div>
        </section>

        {/* Sección Contacto */}
        <section
          id="contact"
          className="min-vh-100 d-flex align-items-center justify-content-center py-5"
        >
          <div className="container text-center">
            <ContactPage />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default BusinessPageApp;
