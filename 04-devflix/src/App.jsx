import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";

const App = () => {
  return (
    <div id="App">
      <img
        id="logo"
        src={logo}
        alt="Logo original do serviço de streaming DEVFLIX com letras vermelhas e fundo preto, ideal para quem busca entretenimento digital de qualidade."
      />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries" />
        <img role="button" src={lupa} alt="Botão de ação para pesquisa!" />
      </div>

     <Rodape link={"https://github.com/karensantos09"}>KarenSantos</Rodape>

    </div>
  );
};

export default App;
