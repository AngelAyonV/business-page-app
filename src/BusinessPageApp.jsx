import {Navbar} from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

const BusinessPageApp = () => {
    return (
        <>
          <Navbar />
          <div className="container mt-5">
            {/* Sección Home */}
            <section id="home" className="py-5 vh-100 d-flex align-items-center">
              <HomePage/>
            </section>
    
            {/* Sección Nosotros */}
            <section id="about" className="py-5 vh-100 d-flex align-items-center bg-light">
              <div className="text-center w-100">
                <AboutPage/>
              </div>
            </section>
    
            {/* Sección Contacto */}
            <section id="contact" className="py-5 vh-100 d-flex align-items-center">
              <ContactPage/>
            </section>
          </div>
        </>
      );
}

export default BusinessPageApp
