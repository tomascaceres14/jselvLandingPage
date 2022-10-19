import React from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Validations = () => {
  const [toggle, setToggle] = React.useState(false);

  const toggleBttn = (
    <button
      className="submit-bttn submit-bttn-invert"
      onClick={() => setToggle(!toggle)}
    >
      <strong>{toggle ? "Iniciar Sesion" : "Registrarse"}</strong>
    </button>
  );

  return (
    <section>
      {toggle ? (
        <Register toggle={toggleBttn} />
      ) : (
        <Login toggle={toggleBttn} />
      )}
    </section>
  );
};

export default Validations;
