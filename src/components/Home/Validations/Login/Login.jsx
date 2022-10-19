import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../Validations.css";

const Login = ({ toggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section id="login">
      <form className="validation-form">
        <div className="form-input">
          <TextField
            label="Correo Electronico"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type={"email"}
            required
          />
        </div>
        <div className="form-input">
          <TextField
            label="Contraseña"
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type={"password"}
            required
          />
        </div>
        <button type="submit" className="submit-bttn">
          <strong>Iniciar Sesion</strong>
        </button>
        <hr className="hr-validations" />
        {toggle}
      </form>
    </section>
  );
};

export default Login;
