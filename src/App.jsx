import "./App.css";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Gallery />
      <About />
    </div>
  );
}

export default App;
