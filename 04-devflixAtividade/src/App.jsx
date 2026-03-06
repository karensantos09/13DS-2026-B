import { useEffect, useState } from "react";
import "./App.css";

import logo from "./assets/loogo.png";
import lupa from "./assets/search.svg";

import Rodape from "./components/Rodape/Rodape";
import MovieCard from "./components/MovieCard/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState("pt");

  const [selectedMovie, setSelectedMovie] = useState(null);

  const textos = {
    pt: {
      search: "Pesquise por filmes",
      notFound: "Filme não encontrado, tente novamente!",
      langBtn: "EN",
      close: "Fechar",
    },
    en: {
      search: "Search movies",
      notFound: "Movie not found, try again!",
      langBtn: "PT",
      close: "Close",
    },
  };

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    (async () => {
      await searchMovies("");
    })();
  }, []);

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  return (
    <div id="App">
      {/* BOotão tema */}
      <button onClick={() => setDark(!dark)}>
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>

      {/* Botão linguagem */}
      <button
        className="langBtn"
        onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      >
        {textos[lang].langBtn}
      </button>

      {/* Logo */}
      <img id="Logo" src={logo} alt="Logotipo do serviço de streaming kflix" />

      {/* Pesquisa */}
      <div className="search">
        <input
          onKeyDown={(e) => e.key === "Enter" && searchMovies(search)}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder={textos[lang].search}
        />

        <img
          onClick={() => searchMovies(search)}
          src={lupa}
          alt="Botão de pesquisa"
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <div key={index} onClick={() => setSelectedMovie(movie)}>
              <MovieCard {...movie} apiUrl={apiUrl} />
            </div>
          ))}
        </div>
      ) : (
        <h2 className="empty">{textos[lang].notFound}</h2>
      )}

      {/* MODAL */}
      {selectedMovie && (
        <div className="modalBackground">
          <div className="modal">
            <img src={selectedMovie.Poster} alt={selectedMovie.Title} />

            <h2>{selectedMovie.Title}</h2>

            <p>Ano: {selectedMovie.Year}</p>
            <p>Tipo: {selectedMovie.Type}</p>

            <button onClick={() => setSelectedMovie(null)}>
              {textos[lang].close}
            </button>
          </div>
        </div>
      )}

      <Rodape link={"https://www.instagram.com/karen_cdss"}>KarenSantos</Rodape>
    </div>
  );
};

export default App;
