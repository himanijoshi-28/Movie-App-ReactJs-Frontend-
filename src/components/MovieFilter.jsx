import React, { useState } from "react";
import {
  allMovies,
  sortedGenres,
  sortedCountries,
  sortedLanguage,
} from "../Services/data";
import Modal from "./Model";

function MovieFilter() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(allMovies);

  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    setSelectedGenre(selectedGenre);
    filterMovies(selectedGenre, selectedCountry, selectedLanguage);
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    filterMovies(selectedGenre, selectedCountry, selectedLanguage);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
    filterMovies(selectedGenre, selectedCountry, selectedLanguage);
  };
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterMovies = (genre, country, language) => {
    const filteredMovies = allMovies.filter(
      (movie) =>
        (genre === "" || movie.moviegenres.includes(genre)) &&
        (country === "" || movie.moviecountries.includes(country)) &&
        (language === "" || movie.movielanguages.includes(language))
    );
    setFilteredMovies(filteredMovies);
  };
  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  return (
    <div className="mt-8 p-3">
      <div className="flex items-center justify-center gap-6 mb-6 ">
        {/* Dropdown for selecting genre */}
        <select
          value={selectedGenre}
          onChange={handleGenreChange}
          className="mt-1 h-[50px]  w-[200px]  block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">All Genres</option>
          {sortedGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        {/* Dropdown for selecting country */}
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          className="mt-1 h-[50px]  w-[200px]  block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">All Countries</option>
          {sortedCountries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        {/* Dropdown for selecting language */}
        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="mt-1 h-[50px] w-[200px] block  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">All Languages</option>
          {sortedLanguage.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>

      {/* Display  movies */}
      <div className="flex items-center justify-evenly flex-wrap  ">
        {filteredMovies.map((movie) => (
          <div
            key={movie.imdbmovieid}
            className="rounded overflow-hidden shadow-lg "
          >
            {/*if moviemainphotos array is not empty */}
            {movie.moviemainphotos.length > 0 ? (
              <img
                src={movie.moviemainphotos[0]}
                alt={movie.movietitle}
                className="w-[300px] h-[400px]"
                onClick={() => openModal(movie)}
              />
            ) : (
              <div
                className="w-[300px] h-[400px] flex items-center justify-center "
                onClick={() => openModal(movie)}
              >
                <span className="text-gray-400 font-bold">
                  {movie.movietitle}
                </span>
              </div>
            )}
            <div className="px-6 py-4"></div>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} movie={selectedMovie} />
    </div>
  );
}
export default MovieFilter;
