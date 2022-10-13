import React from "react";
import About from "./About/About";
import Gallery from "./Hero/Hero";
import Appointment from "./Appointment/Appointment"

const Home = () => {
  return (
    <div>
      <Gallery />
      <About />
      <Appointment />
    </div>
  );
};

export default Home;