import React from "react";
import "./ThreeLegs.css";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const legs = [
    { icon: RestaurantIcon, title: "Eficiencia Deportiva", description: "Buscamos exprimir al máximo tu rendimiento a la hora de practicar tu actividad favorita aportando los nutrientes necesarios para que puedas hacerlo de forma segura y sin lesiones." },
    { icon: RestaurantIcon, title: "Alimentación Saludable", description: "Incorporar los nutrientes necesarios desde alimentos naturales que nos permitan encontrar una buena armonía interna." },
    { icon: RestaurantIcon, title: "Entendimiento Empático", description: "No siempre vamos a estar al 100%! Es normal sufrir altibajos y lo mejor para ello es aprender a escuchar y respetar los tiempos de nuestro cuerpo." },
  ];

const ThreeLegs = () => {
  return (
    <section className="legs-container">
      {legs.map((leg) => {
        return (
          <article className="legs">
            <RestaurantIcon />
              <h3>Titulo de pata</h3>
              <p>
                Una no tan larga descripcion de no mas de dos oraciones en la
                cual hablamos sobre cual es el objetivo que se plantea y el
                enfoque que da el profesional
              </p>
          </article>
        );
      })}
    </section>
  );
};

export default ThreeLegs;
