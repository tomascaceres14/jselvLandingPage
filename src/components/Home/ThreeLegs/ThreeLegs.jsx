import React from "react";
import "./ThreeLegs.css";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FlashIcon from "@mui/icons-material/FlashOn";
import HeartIcon from "@mui/icons-material/Favorite";

const legs = [
  {
    icon: FlashIcon,
    title: "Eficiencia Deportiva",
    description:
      "Buscamos exprimir al máximo tu rendimiento a la hora de practicar tu actividad favorita aportando los nutrientes necesarios para que puedas hacerlo de forma segura y sin lesiones.",
  },
  {
    icon: RestaurantIcon,
    title: "Alimentación Saludable",
    description:
      "Incorporar los nutrientes necesarios desde alimentos naturales que nos permitan encontrar una buena armonía interna.",
  },
  {
    icon: HeartIcon,
    title: "Entendimiento Empático",
    description:
      "No siempre vamos a estar al 100%! Es normal sufrir altibajos y lo mejor para ello es aprender a escuchar y respetar los tiempos de nuestro cuerpo.",
  },
];

const ThreeLegs = () => {
  let i = 1;
  return (
    <section className="legs-container" id="threelegs">
      {legs.map((leg) => {
        return (
          <article className={"leg"} key={leg.title} style={{ border: "" }}>
            <leg.icon sx={{ fontSize: "65px" }} className="leg-icon" />
            <h3>{leg.title}</h3>
            <p>{leg.description}</p>
          </article>
        );
      })}
    </section>
  );
};

export default ThreeLegs;
