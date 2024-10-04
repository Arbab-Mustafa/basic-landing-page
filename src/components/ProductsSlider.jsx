import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// Icons for slider buttons and list items
import { HiCurrencyDollar } from "react-icons/hi2";
import { IoColorPaletteOutline } from "react-icons/io5";
import { GiQueenCrown } from "react-icons/gi";
import { HiSquares2X2 } from "react-icons/hi2";
import { TbArrowsExchange2 } from "react-icons/tb";
import { BiSolidDiscount } from "react-icons/bi";
import { GiFallingStar } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { TbArrowsCross } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import { TbWorldWww } from "react-icons/tb";
import { BsUmbrellaFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { RiDeviceRecoverLine } from "react-icons/ri";
import HeadingComponent from "./H2";

const SliderComponent = () => {
  const { t } = useTranslation(); // Hook for translations

  // Slide data (translated dynamically)
  const slidesData = [
    {
      title: t("slider.0.title"),
      listItems: [
        {
          icon: HiCurrencyDollar,
          heading: t("slider.0.item1"),
          description: t("slider.0.desc1"),
        },
        {
          icon: IoColorPaletteOutline,
          heading: t("slider.0.item2"),
          description: t("slider.0.desc2"),
        },
        {
          icon: GiQueenCrown,
          heading: t("slider.0.item3"),
          description: t("slider.0.desc3"),
        },
        {
          icon: HiSquares2X2,
          heading: t("slider.0.item4"),
          description: t("slider.0.desc4"),
        },
      ],
      imgSrc: "https://doing.social/img/pro_0.9e1ed190.png",
    },
    {
      title: t("slider.1.title"),
      listItems: [
        {
          icon: HiCurrencyDollar,
          heading: t("slider.1.item1"),
          description: t("slider.1.desc1"),
        },
        {
          icon: TbArrowsExchange2,
          heading: t("slider.1.item2"),
          description: t("slider.1.desc2"),
        },
        {
          icon: BiSolidDiscount,
          heading: t("slider.1.item3"),
          description: t("slider.1.desc3"),
        },
        {
          icon: GiFallingStar,
          heading: t("slider.1.item4"),
          description: t("slider.1.desc4"),
        },
      ],
      imgSrc: "https://doing.social/img/pro_1.1df03028.png",
    },
    {
      title: t("slider.2.title"),
      listItems: [
        {
          icon: BsPeopleFill,
          heading: t("slider.2.item1"),
          description: t("slider.2.desc1"),
        },
        {
          icon: TbArrowsCross,
          heading: t("slider.2.item2"),
          description: t("slider.2.desc2"),
        },
        {
          icon: GiProgression,
          heading: t("slider.2.item3"),
          description: t("slider.2.desc3"),
        },
        {
          icon: GiFallingStar,
          heading: t("slider.2.item4"),
          description: t("slider.2.desc4"),
        },
      ],
      imgSrc: "https://doing.social/img/pro_2.427841ba.png",
    },
    {
      title: t("slider.3.title"),
      listItems: [
        {
          icon: TbWorldWww,
          heading: t("slider.3.item1"),
          description: t("slider.3.desc1"),
        },
        {
          icon: BsUmbrellaFill,
          heading: t("slider.3.item2"),
          description: t("slider.3.desc2"),
        },
        {
          icon: FaUserAlt,
          heading: t("slider.3.item3"),
          description: t("slider.3.desc3"),
        },
        {
          icon: RiDeviceRecoverLine,
          heading: t("slider.3.item4"),
          description: t("slider.3.desc4"),
        },
      ],
      imgSrc: "https://doing.social/img/pro_3.b16dd2d3.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < slidesData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Automatically transition between slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slidesData.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [slidesData.length]);

  return (
    <div
      className="relative mx-auto py-10 md:pt-7    bg-cover bg-[url('https://doing.social/img/bg2.6c7dac11.jpg')]"
      id="ultimateProduct"
    >
      <HeadingComponent
        headingKey={t("headingsData.0.headingKey")}
        paragraphKey={t("headingsData.0.paragraphKey")}
      />

      {/* Slide Container */}
      <div className="overflow-hidden w-full md:w-[75%] mx-auto ">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 justify-center  mx-auto"
            >
              <div className="flex flex-col md:flex-row   ">
                {/* First Section: Card Component */}
                <div className="flex flex-col md:w-[40%] p-4 rounded-md bg-gradient-to-r from-[#38393D] to-transparent">
                  <h2 className="text-xl md:text-3xl font-light mb-4 text-[#F4D70F]">
                    {slide.title}
                  </h2>
                  <ul className="space-y-4">
                    {slide.listItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 md:gap-5">
                        <div className="p-2 border border-yellow-500 rounded-full bg-[#2F2D2B]">
                          <item.icon className="text-[#F4D70F] w-6 h-6 md:w-9 md:h-9" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="font-semibold text-[#FBFBFC]">
                            {item.heading}
                          </h3>
                          <p className="text-sm text-gray-400 font-normal">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Second Section: Image */}
                <div className="md:w-1/2 p-4">
                  <img
                    src={slide.imgSrc}
                    alt={slide.title}
                    className="w-full md:w-[80%] h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Buttons */}
      <div className="absolute gap-10 md:gap-12 left-1/2 transform -translate-x-1/2 flex space-x-8">
        <FaArrowLeft
          onClick={prevSlide}
          className={`text-yellow-300 cursor-pointer text-3xl hover:text-yellow-200 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        />
        <FaArrowRight
          onClick={nextSlide}
          className={`text-yellow-300 cursor-pointer text-3xl hover:text-yellow-200 ${
            currentIndex === slidesData.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        />
      </div>

      {/* Navigation Dots */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-yellow-400" : "bg-yellow-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
