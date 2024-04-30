import React, { useEffect, useRef, useState } from "react";
import { allMovies } from "../Services/data";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi2";

const Slider = () => {
  const [movieList, setMovielist] = useState([]);
  const elemref = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    setMovielist(allMovies);
  };
  const sliderRight = (element) => {
    element.scrollLeft += 800;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 800;
  };
  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute
    mx-8 mt-[150px] cursor-pointer "
        onClick={() => sliderLeft(elemref.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute
    mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elemref.current)}
      />
      <div
        className="flex overflow-x-auto px-16 py-4 scrollbar-none scroll-smooth"
        ref={elemref}
      >
        {movieList.map((item, index) => (
          <img
            src={item.moviemainphotos[0]}
            className="w-[450px] mr-5 h-[310px] rounded-md hover:border-[3px] hover:border-gray-200 transition-all duration-100 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
