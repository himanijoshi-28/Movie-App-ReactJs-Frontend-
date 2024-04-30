import React from "react";
import { allMovies } from "../Services/data.js";
import "./style.css";
const List = () => {
  return allMovies.map((movie) => (
    <>
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={movie.moviemainphotos[0]} />
            <h1>{movie.movietitle}</h1>

            <p className="type">
              {movie.moviegenres.map((gname) => (
                <p>{gname}</p>
              ))}
            </p>
          </div>
        </div>
        <div className="blur_back bright_back"></div>
      </div>
    </>
  ));
};

export default List;
