import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="contact-map">
      <iframe
        className="google-map"
        title="google-map"
        src="https://maps.google.com/?ll=-31.20290991566968,-61.479886159886156&z=14&t=m&output=embed"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Map;
