import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>Sobre mi</h2>
      <article className="about-article">
        <img
          src={require("../../../images/about-me.jpg")}
          alt="presentation img"
        />
        <div className="about-article-text">
          <span>QUIEN SOY?</span>
          <p>
            Mi nombre es Juliana Selvaggi y soy Licenciada en Nutrición
            (Antropometrista ISAK 2 📐). Me inclino por la nutrición deportiva y
            vegetariana/vegana. Además, me gusta fomentar hábitos saludables en
            las personas. Considero que es igual de necesario e importante como
            una buena alimentacion balanceada y saludable
          </p>
        </div>
      </article>
      <article className="about-article about-article2">
        <div className="about-article-text">
          <span>MI PROFESION</span>
          <p>
            Actualmente estoy trabajando en Club Atlético de Rafaela, Club de
            Rugby “CRAR” y también atiendo consultas personales en mi
            consultorio privado. Ademas de esto, en mi tiempo libre me gusta
            correr, leer y ocasionalmente tomar fernet con pomelo los fines de
            semana.
          </p>
        </div>
        <img
          src={require("../../../images/about-me2.jpg")}
          alt="presentation img2"
        ></img>
      </article>
    </section>
  );
};

export default About;
