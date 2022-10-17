import { TextField } from "@mui/material";
import React, { useState } from "react";

const Register = ({ toggle }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  return (
    <div id="register">
      <form className="validation-form">
        <div className="form-input">
          <TextField
            label="Nombre"
            variant="outlined"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <TextField
            label="Apellido"
            variant="outlined"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <TextField
            label="Correo Electronico"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <TextField
            label="Contraseña"
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <TextField
            label="Confirmar contraseña"
            variant="outlined"
            value={password2}
            onChange={(event) => setPassword2(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-bttn">
          <strong>Registrarse</strong>
        </button>
        <hr className="hr-validations" />
        {toggle}
      </form>
    </div>
  );
};

export default Register;
