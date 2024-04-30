import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

import Slider from "./components/Slider";

function App() {
  return (
    <>
      <div className="  ">
        {" "}
        <div className="">
          <Header />
        </div>
        <div className=" p-10">
          <HomePage />
        </div>
        <div className="p-10">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
