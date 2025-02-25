const AboutPage = () => {
  return (
    <section id="about" className="container my-5 py-5">
      <div className="row align-items-center">
        {/* 📌 Imagen a la izquierda */}
        <div className="col-md-6 text-center">
          <img
            src="/src/assets/images/image-example.jpg"
            alt="About Us"
            className="img-fluid rounded-4 shadow-lg mb-5"
            width="60%"
          />
        </div>

        {/* 📌 Texto a la derecha */}
        <div className="col-md-6">
          <h2 className="fw-bold text-primary">Sobre Nosotros</h2>
          <hr />
          <p className="text-muted">
            En nuestra empresa, nos dedicamos a ofrecer soluciones innovadoras y
            eficientes. Nuestro equipo de expertos trabaja con pasión para
            brindar productos y servicios de alta calidad.
          </p>
          <p className="text-muted">
            Con años de experiencia en el sector, hemos ayudado a múltiples
            clientes a alcanzar sus objetivos. Nuestra misión es transformar
            ideas en realidades.
          </p>
          <a href="#contact" className="btn btn-primary mt-3">
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
