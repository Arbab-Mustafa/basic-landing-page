/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider1 = () => {
  const { t } = useTranslation();

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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  // Function to switch to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  // Function to switch to the next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  // Mouse event handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diffX = currentX - startX;
    setCurrentTranslate(diffX);
  };

  const handleMouseUp = () => {
    if (Math.abs(currentTranslate) > 100) {
      currentTranslate < 0 ? nextSlide() : prevSlide();
    }
    setIsDragging(false);
    setCurrentTranslate(0);
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = currentX - startX;
    setCurrentTranslate(diffX);
  };

  const handleTouchEnd = () => {
    if (Math.abs(currentTranslate) > 100) {
      currentTranslate < 0 ? nextSlide() : prevSlide();
    }
    setIsDragging(false);
    setCurrentTranslate(0);
  };

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative  md:w-[80%] md:h-[30rem] overflow-hidden mx-auto">
      <div
        className="flex transition-transform duration-300 "
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-full flex-shrink-0 py-3"
          >
            <img
              src={slide.imgSrc}
              alt={slide.title}
              className=" object-cover rounded-md"
            />
            <div className="md:absolute inset-0 flex flex-col items-center justify-center   text-white ">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        <FaChevronLeft
          onClick={prevSlide}
          className="cursor-pointer text-yellow-400  "
          size={30}
        />
        <FaChevronRight
          onClick={nextSlide}
          className="cursor-pointer text-yellow-400   "
          size={30}
        />
      </div>
    </div>
  );
};

export default Slider1;
