import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Appointment from "./components/Appointment/Appointment";
import Brands from "./components/Brands/Brands";
import ThreeLegs from "./components/ThreeLegs/ThreeLegs";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ThreeLegs />
      <About />
      <Brands />
      <Appointment />
    </div>
  );
}

export default App;
