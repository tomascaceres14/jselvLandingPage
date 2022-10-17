import React from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Validations = () => {
  const [toggle, setToggle] = React.useState(false);

  const toggleBttn = (
    <button className="submit-bttn toggle" onClick={() => setToggle(!toggle)}>
      <strong>{toggle ? "Registrarse" : "Iniciar Sesion"}</strong>
    </button>
  );

  return (
    <section>
      {toggle ? (
        <Login toggle={toggleBttn} />
      ) : (
        <Register toggle={toggleBttn} />
      )}
    </section>
  );
};

export default Validations;
