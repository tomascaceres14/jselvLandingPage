import React from "react";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Appointment from "./Appointment/Appointment"
import Brands from "./Brands/Brands";
import ThreeLegs from "./ThreeLegs/ThreeLegs"

const Home = () => {
  return (
    <main>
      <Hero />
      <ThreeLegs />
      <About />
      <Brands />
      <Appointment />
    </main>
  );
};

export default Home;