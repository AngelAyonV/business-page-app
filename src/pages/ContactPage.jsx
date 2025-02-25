import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  // 📌 Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 📌 Función para enviar mensaje a WhatsApp
  const sendWhatsAppMessage = (e) => {
    e.preventDefault(); // Evita el refresh de la página

    const { nombre, email, mensaje } = formData;

    // 📌 Número de WhatsApp donde se enviará (ajústalo con el tuyo)
    const phoneNumber = "5216672478101"; // 🔥 Pon tu número con código de país (ejemplo México: 521+Número)

    // 📌 Formateamos el mensaje
    const textMessage = `Hola! Me llamo ${nombre}. Mi correo es ${email}. Quisiera decirte: ${mensaje}`;

    // 📌 Creamos el enlace de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      textMessage
    )}`;

    // 📌 Abrimos WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="container my-5 py-5">
      <div className="row align-items-center">
        
        {/* 📌 Imagen a la izquierda */}
        <div className="col-md-6 text-center position-relative mb-5">
          <img
            src="/src/assets/images/image-contact.png"
            alt="Contact Us"
            className="img-fluid rounded-4 shadow-lg contact-image"
            width="90%"
          />

          {/* 🔥 Elementos gráficos personalizados */}
          <div className="decorative-square green"></div>
          <div className="decorative-triangle red"></div>
          <div className="decorative-diamond orange"></div>
        </div>

        {/* 📌 Formulario a la derecha */}
        <div className="col-md-6">
          <h2 className="fw-bold text-primary mb-4">Contáctanos</h2>
          <p className="text-muted">
            Llena el formulario y envíanos un mensaje directo a nuestro
            WhatsApp.
          </p>

          <form onSubmit={sendWhatsAppMessage} className="mt-4">
            {/* Nombre */}
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            {/* Correo */}
            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="tucorreo@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mensaje */}
            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea
                name="mensaje"
                className="form-control"
                rows="4"
                placeholder="Escribe tu mensaje aquí..."
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Botón */}
            <button type="submit" className="btn btn-success w-100">
              Enviar a WhatsApp 📩
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
