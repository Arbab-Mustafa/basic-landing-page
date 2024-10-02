import "./App.css";
import { Scrollbar } from "smooth-scrollbar-react";
import Busniess from "./components/BusinessCooperation";
import Footer from "./components/footer";
import GameSlider from "./components/GameCenter";

import Hero from "./components/Hero";
import Navvar from "./components/Navvar";
import SliderComponent from "./components/ProductsSlider";
import Service from "./components/Service";
import Slider1 from "./components/Slider1";
import CardComponent from "./components/TechnicalExcellence";
import ImageSlider from "./components/TemplateCase";

function App() {
  return (
    <div className=" bg-[url('https://doing.social/img/bg1.b3f24c76.jpg')]   ">
      <Scrollbar
        plugins={{
          overscroll: {
            effect: "bounce",
            damping: 0.4,
            maxOverscroll: 160,

            glowColor: "#f0f0f0",
          },
        }}
      >
        <Navvar />
        <div className="bg-[url('https://doing.social/img/bg1.b3f24c76.jpg')]">
          <Hero />
          <Slider1 />
        </div>
        <SliderComponent />
        <GameSlider />
        <CardComponent />
        <Service />
        <ImageSlider />
        <Busniess />
        <Footer />
      </Scrollbar>
    </div>
  );
}

export default App;
