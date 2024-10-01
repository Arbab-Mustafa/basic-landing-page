import "./App.css";
import GameSlider from "./components/GameCenter";

import Hero from "./components/Hero";
import Navvar from "./components/Navvar";
import SliderComponent from "./components/ProductsSlider";
import Service from "./components/Service";
import Slider1 from "./components/Slider1";
import CardComponent from "./components/TechnicalExcellence";

function App() {
  return (
    <div className="   ">
      <Navvar />
      <div className="bg-[url('https://doing.social/img/bg1.b3f24c76.jpg')]">
        <Hero />
        <Slider1 />
      </div>
      <SliderComponent />
      <GameSlider />
      <CardComponent />
      <Service />
    </div>
  );
}

export default App;
