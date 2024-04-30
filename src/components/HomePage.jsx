import React from "react";
import FilterPanel from "./FilterPanel";
import List from "./List";
import Slider from "./Slider";

const HomePage = () => {
  return (
    <div className=" ">
      <div className=" flex flex-1  ">
        <div className="bg-black overflow-y-auto scrollbar-none"></div>
        <div className="bg-black flex-1 overflow-y-auto scrollbar-none">
          <Slider />
          <FilterPanel />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
