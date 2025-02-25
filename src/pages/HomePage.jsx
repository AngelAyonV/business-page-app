const HomePage = () => {
  return (
    <section id="home" className="container vh-100 d-flex align-items-center ">
      <div className="row w-100">
        {/* Texto a la izquierda */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="fw-bold">Bienvenido a Nuestra Empresa</h1>
          <hr />
          <p className="text-muted">
            Ofrecemos soluciones innovadoras parsa tu negocio.   ¡Conócenos!
          </p>
          <a href="#about" className="btn btn-primary mt-3">
            Saber más
          </a>
        </div>

        {/* Imagen a la derecha */}
        <div className="col-md-6 text-center position-relative">
          {/* Imagen principal con borde más suave */}
          <img
            src="/src/assets/images/image-home.jpg"
            alt="Empresa"
            className="img-fluid rounded-5 my-5 image-home"
            width="95%" // 🔥 Agrandada un poco más
          />
          {/* Figuras decorativas mejoradas */}
          <div className="decorative-circle yellow"></div>
          <div className="decorative-circle blue"></div>
          <div className="decorative-circle purple"></div>
          <div className="decorative-arc"></div>{" "}
          {/* 🔥 Nuevo arco decorativo */}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
