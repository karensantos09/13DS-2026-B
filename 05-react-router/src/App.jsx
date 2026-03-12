import { Route, Routes } from "react-router";
import "./App.css";

import Sobre from "./pages/Sobre";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Header />
      <Routes>{/* Identifica todas as rotas do sistema*/}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} /> {/* Uma rota do sistema*/}
      </Routes>
    </>
  );
}

export default App;
