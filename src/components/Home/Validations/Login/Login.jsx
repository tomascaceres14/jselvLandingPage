import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../Validations.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form>
        <div className="form-input">
          <TextField
            label="Email"
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
        <button type="submit">
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
};

export default Login;
