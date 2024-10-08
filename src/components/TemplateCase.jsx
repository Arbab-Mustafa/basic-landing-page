import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import HeadingComponent from "./H2";
import { useTranslation } from "react-i18next";

const images = [
  "https://doing.social/img/07.aa563c24.jpg",
  "https://doing.social/img/08.658b00b4.jpg",
  "https://doing.social/img/02.57ddd313.jpg",
  "https://doing.social/img/03.43f75aa3.jpg",
  "https://doing.social/img/04.80730693.jpg",
  "https://doing.social/img/05.0d91c5a3.jpg",
  "https://doing.social/img/06.3765f944.jpg",
  "https://doing.social/img/07.aa563c24.jpg",
  "https://doing.social/img/08.658b00b4.jpg",
  "https://doing.social/img/09.8e8c2368.jpg",
  "https://doing.social/img/16.50212f03.jpg",
  "https://doing.social/img/11.217f718c.jpg",
  "https://doing.social/img/12.efa62b4c.jpg",
  "https://doing.social/img/13.2d2d7a36.jpg",
  "https://doing.social/img/14.f4c2ff77.jpg",
  "https://doing.social/img/15.9f39c8a0.jpg",
  "https://doing.social/img/16.50212f03.jpg",
  "https://doing.social/img/17.6d14c27e.jpg",
  "https://doing.social/img/18.888e96f9.jpg",
  "https://doing.social/img/19.939e65b5.jpg",
  "https://doing.social/img/20.3e2a8ece.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const { t } = useTranslation();
  const itemsPerPage = window.innerWidth > 1024 ? 9 : 3;

  // Handle next button click
  const nextSlide = () => {
    if (currentIndex < images.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  // Handle previous button click
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  // Open modal with clicked image
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= images.length - itemsPerPage ? 0 : prev + 1
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [itemsPerPage]);

  // Mouse event handlers for drag-and-swap functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diffX = startX - currentX;

    if (Math.abs(diffX) > 100) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center p-3 md:p-6 bg-[url('https://doing.social/img/bg1.b3f24c76.jpg')]"
      id="templateCase"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <HeadingComponent
        headingKey={t("headingsData.4.headingKey")}
        paragraphKey={t("headingsData.4.paragraphKey")}
      />
      {/* Slider container */}
      <div className="w-full max-w-6xl flex justify-center space-x-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:h-fit lg:grid-cols-3 xl:grid-cols-3 gap-3">
          {images
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((image, idx) => (
              <div
                key={idx}
                className="relative p-2 border border-[#5D5D61] bg-[#38393D]"
              >
                <img
                  src={image}
                  alt={`Slide ${idx}`}
                  className="cursor-pointer object-cover w-full h-50 md:h-60 rounded-md hover:shadow-xl transition-shadow"
                  onClick={() => openModal(image)}
                />
                <h3 className="text-white p-1 md:p-2 font-medium">
                  DOING - {idx + 1}
                </h3>
              </div>
            ))}
        </div>
      </div>

      {/* Slider controls */}
      <div className="mt-6 flex justify-center space-x-6">
        <button
          className={`p-2 bg-gray-700 text-white rounded-full focus:outline-none ${
            currentIndex === 0 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <FaChevronLeft />
        </button>
        <button
          className={`p-2 bg-gray-700 text-white rounded-full focus:outline-none ${
            currentIndex >= images.length - itemsPerPage &&
            "opacity-50 cursor-not-allowed"
          }`}
          onClick={nextSlide}
          disabled={currentIndex >= images.length - itemsPerPage}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <div
          className="fixed top-14 inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative p-1 bg-white rounded-lg shadow-lg max-w-full md:max-w-[80%] max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 p-2 text-gray-700 bg-white rounded-full border border-gray-400 hover:bg-gray-200"
              onClick={closeModal}
            >
              <FaTimes size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-[43rem] md:h-full rounded-md p-2 object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
