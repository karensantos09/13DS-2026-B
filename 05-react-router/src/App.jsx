import { Route, Routes } from "react-router";
import "./App.css";

import Sobre from "./pages/Sobre";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import NaoEncontrado from "./pages/NaoEncontrado";
import Header from "./components/header/Header";
import Rodape from "./components/rodape/Rodape";

function App() {
  return (
    <>
      <Header />
      <div className="containerApp">
        <Routes>
          {/* Identifica todas as rotas do sistema*/}
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} /> {/* Uma rota do sistema*/}
          <Route path="/contato" element={<Contato />} />
          {/* Uma rota do sistema*/}
          <Route path="/naoEncontrado" element={<NaoEncontrado />} />
          {/* Uma rota do sistema*/}
        </Routes>
      </div>

      <Rodape link={"https://github.com/karensantos09"}>Karen Santos</Rodape>
    </>
  );
}

export default App;
