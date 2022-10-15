import React from "react";
import About from "./About/About";
import Gallery from "./Hero/Hero";
import Appointment from "./Appointment/Appointment"
import Brands from "./Brands/Brands";

const Home = () => {
  return (
    <div>
      <Gallery />
      <About />
      <Brands />
      <Appointment />
    </div>
  );
};

export default Home;