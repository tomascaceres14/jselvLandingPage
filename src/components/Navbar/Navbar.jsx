import React from "react";
import "./Header.css";

const Header = () => {

  return (
    <div className="header">
      <nav className="header-nav">
        <ul className="header-nav-ul">
          <li>
            <a
              href="https://www.instagram.com/juliselvaggi.nutricion_/"
              target="_blank"
              rel="noreferrer"
            >
              INICIO
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/juliselvaggi.nutricion_/"
              target="_blank"
              rel="noreferrer"
            >
              SOBRE MI
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/juliselvaggi.nutricion_/"
              target="_blank"
              rel="noreferrer"
            >
              PREGUNTAS FRECUENTES
            </a>
          </li>
        </ul>
      </nav>
      <img
        alt="logo"
        src={require("../../images/logo.jpg")}
        className="header-logo"
      />
      <nav className="header-nav">
        <ul className="header-nav-ul">
          <li>
            <a
              href="https://www.instagram.com/juliselvaggi.nutricion_/"
              target="_blank"
              rel="noreferrer"
            >
              CONTACTO
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/juliselvaggi.nutricion_/"
              target="_blank"
              rel="noreferrer"
            >
              RESERVA TU TURNO
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/juliselvaggi.nutricion_/"
              target="_blank"
              rel="noreferrer"
            >
              INICIAR SESION
            </a>
          </li>
        </ul>
      </nav>
      {/* <div id="responsive-header" className="responsive-header">
        <p>Juli Selvaggi Nutricion</p>
        <img src={require("../../images/hamburger.png")} alt="toggle-menu" />
      </div> */}
    </div>
  );
};

export default Header;
