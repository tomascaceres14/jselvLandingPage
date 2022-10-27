import React from "react";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Appointment from "./Appointment/Appointment"
import Brands from "./Brands/Brands";
import ThreeLegs from "./ThreeLegs/ThreeLegs"
import Header from "./Header/Header"
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <ThreeLegs />
      <About />
      <Brands />
      <Appointment />
      <Footer />
    </main>
  );
};

export default Home;