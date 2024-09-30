import "./App.css";
import Hero from "./components/Hero";
import Navvar from "./components/Navvar";
import SliderComponent from "./components/ProductsSlider";
import Slider1 from "./components/Slider1";

function App() {
  return (
    <div className="   ">
      <Navvar />
      <div className="bg-[url('https://doing.social/img/bg1.b3f24c76.jpg')]">
        <Hero />
        <Slider1 />
      </div>
      <SliderComponent />
    </div>
  );
}

export default App;
