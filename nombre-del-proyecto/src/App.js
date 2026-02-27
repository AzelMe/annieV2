import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
//-------------Páginas----------------
import Inicio from "./Inicio";
import About from "./About";
//-------------Autenticación----------------
import Login from "./Login/Login";
import Registro from "./Registro/Registro";

//-------------Core----------------
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/about" element={<About />} />

        {/*  <Route path="/" element={<Login />} /> 
        <Route path="/registro" element={<Registro />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
