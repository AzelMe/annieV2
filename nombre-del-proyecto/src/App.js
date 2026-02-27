import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

import Login from "./Login/Login";
import Registro from "./Registro/Registro";



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
    { /*  <Route path="/" element={<Login />} /> 
        <Route path="/registro" element={<Registro />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
