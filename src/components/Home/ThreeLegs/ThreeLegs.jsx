import React from "react";
import "./ThreeLegs.css";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const ThreeLegs = () => {
  const legs = [
    { icon: RestaurantIcon, title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
  ];

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
