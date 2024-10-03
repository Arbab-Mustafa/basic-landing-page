import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// Import icons for the slider
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

// Define the icons as an array for easier management
const icons = [
  HiCurrencyDollar,
  IoColorPaletteOutline,
  GiQueenCrown,
  HiSquares2X2,
  TbArrowsExchange2,
  BiSolidDiscount,
  GiFallingStar,
  BsPeopleFill,
  TbArrowsCross,
  GiProgression,
  TbWorldWww,
  BsUmbrellaFill,
  FaUserAlt,
  RiDeviceRecoverLine,
];

const SliderComponent = () => {
  const { t } = useTranslation();

  // Define the slide data
  const slidesData = [
    {
      title: t("newslider.0.title"),
      desc: t("newslider.0.desc"),
      listItems: [
        {
          icon: icons[0],
        },
        {
          icon: icons[1],
        },
        {
          icon: icons[2],
        },
        {
          icon: icons[3],
        },
      ],
      imgSrc: "https://doing.social/img/game_1.cfb56c6c.png",
    },
    {
      title: t("newslider.1.title"),
      desc: t("newslider.1.desc"),
      listItems: [
        {
          icon: icons[0],
        },
        {
          icon: icons[4],
        },
        {
          icon: icons[5],
        },
        {
          icon: icons[6],
        },
      ],
      imgSrc: "https://doing.social/img/game_6.f90ee06e.png",
    },
    {
      title: t("newslider.2.title"),
      desc: t("newslider.2.desc"),
      listItems: [
        {
          icon: icons[7],
        },
        {
          icon: icons[8],
        },
        {
          icon: icons[9],
        },
        {
          icon: icons[6],
        },
      ],
      imgSrc: "https://doing.social/img/game_3.f7007b1c.png",
    },
    {
      title: t("newslider.3.title"),
      desc: t("newslider.3.desc"),
      listItems: [
        {
          icon: icons[10],
        },
        {
          icon: icons[11],
        },
        {
          icon: icons[12],
        },
        {
          icon: icons[13],
        },
      ],
      imgSrc: "https://doing.social/img/game_4.dba135e9.png",
    },
    {
      title: t("newslider.4.title"),
      desc: t("newslider.4.desc"),
      listItems: [
        {
          icon: icons[10],
        },
        {
          icon: icons[11],
        },
        {
          icon: icons[12],
        },
        {
          icon: icons[13],
        },
      ],
      imgSrc: "https://doing.social/img/game_2.01ee2584.png",
    },

    {
      title: t("newslider.5.title"),
      desc: t("newslider.5.desc"),
      listItems: [
        {
          icon: icons[10],
        },
        {
          icon: icons[11],
        },
        {
          icon: icons[12],
        },
        {
          icon: icons[13],
        },
      ],
      imgSrc: "https://doing.social/img/game_5.4115c1f2.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slidesData.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [slidesData.length]);

  return (
    <div
      className="relative mx-auto py-10  bg-cover bg-[url('https://doing.social/img/bg2.6c7dac11.jpg')]"
      id="gameCenter"
    >
      <HeadingComponent
        headingKey={t("headingsData.1.headingKey")}
        paragraphKey={t("headingsData.1.paragraphKey")}
      />
      <div className="flex flex-col items-center max-w-screen-lg mx-auto">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`${
              currentIndex === index ? "block" : "hidden"
            } w-full transition-all duration-500`}
          >
            <div className="flex flex-col-reverse  md:flex-row-reverse items-center">
              <div className="flex flex-col md:w-[39%] p-4 rounded-md  ">
                <h2 className="text-xl md:text-3xl font-light mb-4 text-[#948359]">
                  {slide.title}
                </h2>
                <p className="text-sm text-gray-400 mb-2">{slide.desc}</p>
                <ul className="flex  items-center justify-center md:justify-start gap-2  md:gap-3">
                  {slide.listItems.map((item, idx) => (
                    <li key={idx} className=" ">
                      <div className="p-2 border border-yellow-500 rounded-full bg-[#2F2D2B]">
                        <item.icon className="text-[#F0DB13] w-5 h-5 md:w-7 md:h-7" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-[60%] p-4">
                <img
                  src={slide.imgSrc}
                  alt={slide.title}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute gap-12 md:gap-20 left-1/2 transform -translate-x-1/2 flex space-x-8">
        <FaArrowLeft
          onClick={prevSlide}
          className="text-[#F0DB13] cursor-pointer text-3xl hover:text-yellow-200"
        />
        <FaArrowRight
          onClick={nextSlide}
          className="text-[#F0DB13] cursor-pointer text-3xl hover:text-yellow-200"
        />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-[#F4D70F]" : "bg-yellow-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
