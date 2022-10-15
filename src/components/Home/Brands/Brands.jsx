import React from "react";
import "./Brands.css";
import cantabria from "../../../images/cantabria-logo.jpg";
import flaming from "../../../images/flaming-logo2.jpg";
import granger from "../../../images/granger-logo2.png";
import los40 from "../../../images/los40-logo2.png";
import mas from "../../../images/mas.jpg";
import mr from "../../../images/mr-logo.jpg";
import sic from "../../../images/sic-logo.jpg";
import vikingos from "../../../images/vikingos-logo.jpg";

const logos = [flaming, granger, los40, mr, cantabria, mas, sic, vikingos];

const Brands = () => {
  return (
    <section className="brands-container">
      <article className="banner-logos">
            {logos.map((logo) => {
              return <img src={logo} />;
            })}
      </article>
    </section>
  );
};

export default Brands;
