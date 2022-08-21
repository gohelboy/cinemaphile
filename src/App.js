import React from "react";
import { useState, useEffect } from "react";
//203eed62``

import "./App.css";
import search from "./search.png";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=203eed62";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const result = await response.json();
    setMovies(result.Search);
  };

  useEffect(() => {
    searchMovie("");
  }, []);

  return (
    <div className="app">
      <h1>Cinephile</h1>
      <div className="search">
        <input
          placeholder="Search "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={search}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

      <div className="footer">
        <a href="https://www.instagram.com/gohelboy">
          <p>Devloped by Gohelboy</p>
        </a>
      </div>
    </div>
  );
};

export default App;
