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
    <div>
      <Navvar />
      <div>
        <section
          id="hero"
          className="bg-[url('https://doing.social/img/bg1.b3f24c76.jpg')]"
        >
          <Hero />
          <Slider1 />
        </section>

        <section id="slider">
          <SliderComponent />
        </section>

        <section id="games">
          <GameSlider />
        </section>

        <section id="card">
          <CardComponent />
        </section>

        <section id="service">
          <Service />
        </section>

        <section id="image-slider">
          <ImageSlider />
        </section>

        <section id="business">
          <Busniess />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
