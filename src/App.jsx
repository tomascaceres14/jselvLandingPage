import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import UserPanel from "./components/Panels/UserPanel"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} /> 
        <Route path="/user" element={<UserPanel /> }/>
      </Routes>
    </div>
  );
}

export default App;
