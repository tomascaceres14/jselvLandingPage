import "./App.css";
import Header from "./components/Home/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/sobremi" element="SobreMi" /> 
        <Route path="/reserva" element={"asd"} /> 
        <Route path="/faq" element="Faq" /> 
        <Route path="/registro" element="Register" /> 
        <Route path="/login" element="LogIn" /> 
      </Routes> 
    </div>
  );
}

export default App;
