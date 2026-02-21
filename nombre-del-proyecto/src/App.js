import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registro from "./Registro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
