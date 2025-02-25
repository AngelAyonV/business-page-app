
const HomePage = () => {
    return (
        <section id="home" className="container vh-100 d-flex align-items-center">
          <div className="row w-100">
            {/* Texto a la izquierda */}
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="fw-bold">Bienvenido a Nuestra Empresa</h1>
              <p className="text-muted">
                Ofrecemos soluciones innovadoras para tu negocio. ¡Conócenos!
              </p>
              <a href="#about" className="btn btn-primary mt-3">Saber más</a>
            </div>
    
            {/* Imagen a la derecha */}
            <div className="col-md-6 text-center">
              <img
                src="/src/assets/images/Imagen 1.jpg"
                alt="Empresa"
                className="img-fluid rounded "
                width="80%"
              />
            </div>
          </div>
        </section>
      );
}

export default HomePage
