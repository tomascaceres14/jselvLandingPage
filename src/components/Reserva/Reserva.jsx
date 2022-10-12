import React from "react";
import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Reserva.css";

const Reserva = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault(); // 👈️ prevent page refresh

    let message = `Hola%20Juli%21%20Mi%20nombre%20es%20${firstName}%20${lastName}%20y%20quisiera%20reservar%20un%20turno.`;
    let URL = `https://wa.me/543492383044?text=` + message;

    window.open(URL, "_blank");

    window.location.href = "/";
  };

  return (
    <div className="turno-container">
      <form className="turno-form" onSubmit={handleSubmit}>
        <div className="form-input">
          {/* <label htmlFor="nombre">Nombre:</label> */}
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
            required
          />
        </div>
        <div className="form-input">
          {/* <label htmlFor="apellido">Apellido:</label> */}
          <input
            type="text"
            placeholder="Apellido"
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
            required
          />
        </div>
        <div className="form-input">
          {/* <label htmlFor="email">Correo electronico:</label> */}
          <input
            type="email"
            name="email"
            placeholder="turno@ejemplo.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="wpp-bttn">
          <WhatsAppIcon className="wpp-logo" />
        </button>
      </form>
    </div>
  );
};

export default Reserva;
