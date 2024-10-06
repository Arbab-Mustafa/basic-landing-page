import { useEffect, useState } from "react";

const images = [
  { id: 1, src: "https://doing.social/img/1.8f8623c7.png" },
  { id: 2, src: "https://doing.social/img/2.2c57edc7.png" },
  { id: 3, src: "https://doing.social/img/3.f0fb1f24.png" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Handling dragging events
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX); // Set start position of drag
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.pageX;
    const moveX = currentX - startX;
    setTranslateX(moveX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (translateX < -100 && currentIndex < images.length - 1) {
      // Swipe left to the next slide
      setCurrentIndex((prev) => prev + 1);
    } else if (translateX > 100 && currentIndex > 0) {
      // Swipe right to the previous slide
      setCurrentIndex((prev) => prev - 1);
    }
    setTranslateX(0); // Reset translateX after releasing
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].pageX;
    const moveX = currentX - startX;
    setTranslateX(moveX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (translateX < -100 && currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (translateX > 100 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    setTranslateX(0);
  };

  return (
    <div className="w-full overflow-x-hidden pt-8 md:pt-12" id="frontPage">
      {/* Image Slider */}
      <div
        className="relative w-full h-56 md:h-72 z-1 overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)} // In case the user leaves the area without mouse up
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          cursor: isDragging ? "grabbing" : "grab", // Change cursor while dragging
        }}
      >
        <div
          className="absolute flex w-[300%] md:w-[150%] h-full gap-1 md:gap-3 transition-transform duration-500"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / images.length) - translateX / 3
            }%)`,
          }}
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={`Slide ${image.id}`}
              className="w-1/3 h-full object-contain"
            />
          ))}
        </div>

        {/* Dots for current slide indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-gray-700" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          className={`w-10 h-2 rounded-full ${
            currentIndex === 0
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-300 hover:bg-gray-400 cursor-pointer transition duration-300"
          }`}
          aria-label="Previous slide"
          disabled={currentIndex === 0}
        ></button>

        <button
          onClick={() =>
            setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1))
          }
          className={`w-10 h-2 rounded-full ${
            currentIndex === images.length - 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-300 hover:bg-gray-400 cursor-pointer transition duration-300"
          }`}
          aria-label="Next slide"
          disabled={currentIndex === images.length - 1}
        ></button>
      </div>
    </div>
  );
};

export default Hero;
