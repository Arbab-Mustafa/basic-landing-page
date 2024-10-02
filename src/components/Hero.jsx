import { useEffect, useState } from "react";

const images = [
  { id: 1, src: "https://doing.social/img/1.8f8623c7.png" },
  { id: 2, src: "https://doing.social/img/2.2c57edc7.png" },
  { id: 3, src: "https://doing.social/img/3.f0fb1f24.png" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden  mt-10 py-2" id="frontPage">
      {/* Image Slider */}
      <div className="relative w-full h-56 md:h-72    z-1  overflow-hidden">
        <div
          className="absolute  flex w-[300%] md:w-[240%] h-full gap-2 md:gap-3 transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          }}
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={`Slide ${image.id}`}
              className="w-1/3 h-full "
            />
          ))}
        </div>

        {/* Dots for current slide indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-transparent" : "bg-transparent"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-4 space-x-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className={`w-10 h-2 rounded-full ${
            currentIndex === 0
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-300 hover:bg-gray-400 cursor-pointer transition duration-300"
          }`}
          aria-label="Previous slide"
          disabled={currentIndex === 0} // Disable when on the first slide
        ></button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className={`w-10 h-2 rounded-full ${
            currentIndex === images.length - 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-300 hover:bg-gray-400 cursor-pointer transition duration-300"
          }`}
          aria-label="Next slide"
          disabled={currentIndex === images.length - 1} // Disable when on the last slide
        ></button>
      </div>
    </div>
  );
};

export default Hero;
