import "./App.css";
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
    <div className="app   snap-y snap-mandatory h-screen overflow-y-scroll">
      <Navvar />
      <div className="snap-start bg-[url('https://doing.social/img/bg1.b3f24c76.jpg')]  ">
        <Hero />
        <Slider1 />
      </div>

      <div className="snap-start  ">
        <SliderComponent />
      </div>

      <div className="snap-start md:h-screen ">
        <GameSlider />
      </div>

      <div className="snap-start  md:h-screen ">
        <CardComponent />
      </div>

      <div className="snap-start  md:h-screen ">
        <Service />
      </div>

      <div className="snap-start  ">
        <ImageSlider />
      </div>

      <div className="snap-start  ">
        <Busniess />
      </div>

      <div className="snap-start  ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
