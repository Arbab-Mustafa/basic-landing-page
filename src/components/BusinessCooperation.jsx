// import { FaLock, FaRocket, FaGlobe, FaUser, FaHeadset } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi"; // Example icons
import { TbNotes } from "react-icons/tb";
import { BiMessageSquareDetail } from "react-icons/bi";

import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { MdSignalCellularAlt } from "react-icons/md";
import { useTranslation } from "react-i18next";
import HeadingComponent from "./H2";

const Busniess = () => {
  const { t } = useTranslation(); // Hook for translations

  // Define slide data with translations and icons
  const slidesData = [
    {
      title: t("business.0.heading"),
      description: t("business.0.desc"),
      Icon: FiPhoneCall, // Example icon for slide 1
    },
    {
      title: t("business.1.heading"),
      description: t("business.1.desc"),
      Icon: TbNotes, // Example icon for slide 2
    },
    {
      title: t("business.2.heading"),
      description: t("business.2.desc"),
      Icon: BiMessageSquareDetail, // Example icon for slide 3
    },
    {
      title: t("business.3.heading"),
      description: t("business.3.desc"),
      Icon: HiOutlineSquare3Stack3D, // Example icon for slide 4
    },
    {
      title: t("business.4.heading"),
      description: t("business.4.desc"),
      Icon: MdSignalCellularAlt, // Example icon for slide 5
    },
  ];

  return (
    <div
      className="  px-4 py-8  bg-[url('https://doing.social/img/bg1.b3f24c76.jpg')]"
      id="businessCooperation"
    >
      <HeadingComponent
        headingKey={t("headingsData.5.headingKey")}
        paragraphKey={t("headingsData.5.paragraphKey")}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5   gap-11 md:gap-20 md:w-[80%] mx-auto">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center mx-1 md:mx-6 p-2    "
          >
            {/* Render the icon */}
            <div className="flex justify-center items-center mb-4">
              <div className="hexagon flex justify-center items-center">
                <slide.Icon className="text-2xl md:text-5xl text-[#DFB758]" />
              </div>
            </div>

            {/* Title and description from translations */}
            <h3 className="text-lg md:text-2xl text-white font-semibold mb-2">
              {slide.title}
            </h3>
            <p className="text-sm md:text-base text-white">
              {slide.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-3 md:my-7 ">
        <h2 className="bg-[#C5A960] bg-gradient-to-r  from-[#D7C897] to-[#C5A960] px-11 md:px-16 py-2 rounded-full">
          <a
            href="#"
            className="text-[#333333] text-center text-lg md:text-2xl font-semibold"
          >
            {t("btn.0.title")}
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Busniess;
