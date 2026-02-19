import { useState } from "react";
import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";

import Rodape from "./components/Rodape/Rodape";

const App = () => {
  const [movies, setMovies] = useState([]);

  //Utilizando uma CHAVE de API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;


  //Criando a conexão com a API e trazendo informações.
 const searchMovies= async (title) => {
  const response = await fetch(`${apiUrl}&s=${title}`);
   const data = await response.json;

//Alimentando a váriavel movies
setMovies(data.Search);
 }

 useEffect(( =>{
  searchMovies("Batman");
 }, [] );

  return (
    <div id="App">
      <img
        id="Logo"
        src={logo}
        alt="Logo original do serviço de streaming DEVFLIX com letras vermelhas e fundo preto, ideal para quem busca entretenimento digital de qualidade."
      />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries" />
        <img role="button" src={lupa} alt="Botão de ação para pesquisa!" />
      </div>


<div className="container">
{movies.map(movie, index) =>(

  
)}
</div>

      <Rodape link={"https://github.com/karensantos09"}>KarenSantos</Rodape>
    </div>
  );
};

export default App;
