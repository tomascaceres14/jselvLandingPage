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

const logos = [
  { name: flaming, href: "https://www.instagram.com/flaming_oficial/" },
  { name: granger, href: "https://www.instagram.com/grangernutricion/" },
  { name: los40, href: "https://www.instagram.com/los40ar/" },
  { name: mr, href: "https://www.instagram.com/mrsuplementosdeportivos/" },
  { name: cantabria, href: "https://www.instagram.com/heladoscantabria/" },
  { name: mas, href: "https://www.instagram.com/mas.gimnasio/" },
  { name: sic, href: "https://www.instagram.com/siccelulares/" },
  { name: vikingos, href: "https://www.instagram.com/vikingos_running_spirit/" },
];

const Brands = () => {
  let gridCounter = 0;
  return (
    <section className="brands-container">
      <article className="banner-logos">
        {logos.map((logo) => {
          return (
            <div className="logos">
              <a href={logo.href} target="_blank" rel="noreferrer">
                <img src={logo.name} alt={logo.name} className={"logo" + gridCounter++} />
              </a>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Brands;
