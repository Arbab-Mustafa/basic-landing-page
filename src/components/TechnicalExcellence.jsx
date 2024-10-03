// CardComponent.js

import { useTranslation } from "react-i18next"; // Assuming you're using react-i18next for translations
// Replace with your icons
import { PiComputerTowerFill } from "react-icons/pi";
import { MdVerifiedUser } from "react-icons/md";
import { IoRocketSharp } from "react-icons/io5";
import { MdLock } from "react-icons/md";
import HeadingComponent from "./H2";
import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScroll } from "framer-motion";

const CardComponent = () => {
  const { t } = useTranslation();
  const ref = useRef(null); // Create a reference to the container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Trigger animations based on scroll position
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], ["50deg", " 0deg"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  // Define the card data
  const CardData = [
    {
      title: t("cardData.0.title"),
      desc: t("cardData.0.desc"),
      icon: <PiComputerTowerFill />,
    },
    {
      title: t("cardData.1.title"),
      desc: t("cardData.1.desc"),
      icon: <MdVerifiedUser />,
    },
    {
      title: t("cardData.2.title"),
      desc: t("cardData.2.desc"),
      icon: <IoRocketSharp />,
    },
    {
      title: t("cardData.3.title"),
      desc: t("cardData.3.desc"),
      icon: <MdLock />,
    },
  ];

  return (
    <div
      className="w-full bg-[url('https://doing.social/img/bg1.b3f24c76.jpg')] py-4 md:py-8"
      id="technicalExcellence"
      ref={ref}
    >
      <HeadingComponent
        headingKey={t("headingsData.2.headingKey")}
        paragraphKey={t("headingsData.2.paragraphKey")}
      />
      <div className="w-[90%]  mx-auto  justify-center md:gap-4  py-4 md:py-8 flex flex-wrap gap-2 ">
        {CardData.map((card, index) => (
          <motion.div
            style={{ rotateX, opacity }}
            key={index}
            className=" border  border-[#4D4D51] rounded-lg shadow-md md:rounded-lg p-6  md:w-[33rem] py-6 md:py-8  text-white  bg-gradient-to-br from-[#2E2F32] to-[#38393C] "
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg md:text-2xl font-serif font-bold ">
                {card.title}
              </h2>
              <div className="text-5xl md:text-7xl mr-2 text-[#F0DB13]">
                {card.icon}
              </div>
            </div>
            <p className="text-white">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
