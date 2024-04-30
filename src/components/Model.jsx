import { Button } from "@mui/material";
import React from "react";

const Modal = ({ isOpen, onClose, movie }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 text-white  overflow-y-auto bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-950   p-8 rounded-lg max-w-lg">
        <button
          className="absolute h-10 w-10 text-2xl rounded-full text-center   bg-red-500 text-white top-4 right-4 
          hover:text-gray-700 "
          onClick={onClose}
        >
          X
        </button>
        {movie && (
          <div className="mt-5">
            <h2 className="text-2xl font-bold text-center mb-4">
              {movie.movietitle}
            </h2>
            <div>
              <div className="flex items-center justify-center">
                <img
                  src={movie.moviemainphotos[0]}
                  className="  "
                  alt=""
                  srcset=""
                />
              </div>
              <p className="mt-4">
                <strong>Languages: </strong>
                {movie.movielanguages.join(", ")}
              </p>
              <p>
                <strong>Countries: </strong>
                {movie.moviecountries.join(", ")}
              </p>
              <p>
                <strong>Genres: </strong>
                {movie.moviegenres.join(", ")}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
