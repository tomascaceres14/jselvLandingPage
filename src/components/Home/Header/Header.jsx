import TemporaryDrawer from "./Drawer/Drawer";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <TemporaryDrawer/>
      {/* <nav className="header-nav">
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
      </nav> */}
      <div>
        <img
          alt="logo"
          src={require("../../../images/logo.jpg")}
          className="header-logo"
        />
      </div>
      <button className="header-button">Iniciar Sesion</button>
      {/* <nav className="header-nav">
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
      </nav> */}
    </header>
  );
};

export default Header;
