import { useState } from "react";
import { useTranslation } from "react-i18next"; // Importing for translations
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icon components

const Slider1 = () => {
  const { t } = useTranslation(); // Hook for translations

  const slidesData = [
    {
      title: t("slider1.0.title"),
      description: t("slider1.0.description"),
      imgSrc: "https://doing.social/img/img1.10190d6a.png",
    },
    {
      title: t("slider1.1.title"),
      description: t("slider1.1.description"),
      imgSrc: "https://doing.social/img/app.b68d916b.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative  h-[30rem] bg-cover bg-center "
      style={{
        backgroundImage: `url('https://your-background-image-url.com/bg-image.jpg')`,
      }}
    >
      {/* Main Slide Container */}
      <div className="relative w-full ">
        {slidesData.map((slide, index) => {
          let positionClass = "";
          if (currentIndex === index) {
            positionClass = "translate-x-0"; // Current slide
          } else if (
            currentIndex - 1 === index ||
            (currentIndex === 0 && index === slidesData.length - 1)
          ) {
            positionClass = "-translate-x-full"; // Previous slide
          } else {
            positionClass = "translate-x-full"; // Next slide
          }

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-200 ease-in-out ${positionClass}`}
            >
              <div className="flex flex-col md:flex-row items-center   md:relative  p-4">
                {/* Main Image */}
                <img
                  src={slide.imgSrc}
                  alt={slide.title}
                  className="w-[90%] md:w-[70%] h-[90%] object-contain md:h-[29rem] rounded-md"
                />
                {/* Text Section */}
                <div className="flex flex-col  md:ml-3 md:absolute md:left-[45%] md:top-28">
                  <h2 className="text-xl md:text-5xl font-bold text-[#FFFFFF]">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-lg  font-light md:text-4xl  text-center text-[#E0C378]">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="absolute top-[19.5rem] md:top-[28.6rem] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Navigation Icons */}
      <div className="absolute top-[19rem] md:top-[28rem] left-1/2 transform -translate-x-1/2 flex space-x-4">
        <div
          onClick={prevSlide}
          className="cursor-pointer text-gray-600 hover:text-gray-800 transition"
        >
          <FaChevronLeft size={30} />
        </div>
        <div
          onClick={nextSlide}
          className="cursor-pointer text-gray-600 hover:text-gray-800 transition"
        >
          <FaChevronRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Slider1;
