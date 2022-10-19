import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>Sobre mi</h2>
      <article style={{ background: "lightgrey" }} className="about-article">
        <img
          src={require("../../../images/about-me.jpg")}
          alt="presentation img"
        />
        <p>
          Mi nombre es Juliana Selvaggi y soy Licenciada en Nutrición
          (Antropometrista ISAK 2 📐). Me inclino por la nutrición deportiva y
          vegetariana/vegana. Además, me gusta fomentar hábitos saludables en
          las personas. Considero que es igual de necesario e importante como
          una buena alimentacion balanceada y saludable
        </p>
      </article>
      <article style={{ background: "#b3b3b3" }} className="about-article about-article2">
        <p>
          Actualmente estoy trabajando en Club Atlético de Rafaela, Club de
          Rugby “CRAR” y recientemente pude abrir mi propio consultorio donde
          estoy atendiendo por las tardes.
        </p>
        <img
          src={require("../../../images/about-me2.jpg")}
          alt="presentation img2"
        ></img>
      </article>
    </section>
  );
};

export default About;
