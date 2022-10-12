import React from "react";
import "./Reserva.css";

const Reserva = () => {
  return (
    <div className="turno-container">
      <form className="turno-form">
        <div className="input-form">
          {/* <label htmlFor="nombre">Nombre:</label> */}
          <input type="text" name="nombre" placeholder="Nombre" required />
        </div>
        <div className="input-form">
          {/* <label htmlFor="apellido">Apellido:</label> */}
          <input type="text" placeholder="Apellido" required />
        </div>
        <div className="input-form">
          {/* <label htmlFor="email">Correo electronico:</label> */}
          <input type="email" name="email" placeholder="turno@ejemplo.com" required />
        </div>
        <input type="submit" value="" />
      </form>
    </div>
  );
};

export default Reserva;
