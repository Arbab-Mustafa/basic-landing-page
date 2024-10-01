// CardComponent.js

import { useTranslation } from "react-i18next"; // Assuming you're using react-i18next for translations
// Replace with your icons
import { BiSolidLike } from "react-icons/bi";
import { FaShieldHeart } from "react-icons/fa6";
// import { SiSpringsecurity } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";
import { RiBox3Fill } from "react-icons/ri";
import { FaPeoplePulling } from "react-icons/fa6";
import { GiSecretBook } from "react-icons/gi";
const Service = () => {
  const { t } = useTranslation();

  // Define the card data
  const CardData = [
    {
      title: t("cardData2.0.title"),
      desc: t("cardData2.0.desc"),
      icon: <BiSolidLike />,
    },
    {
      title: t("cardData2.1.title"),
      desc: t("cardData2.1.desc"),

      icon: <FaShieldHeart />,
    },
    {
      title: t("cardData2.2.title"),
      desc: t("cardData2.2.desc"),
      icon: <FaShoppingBag />,
    },
    {
      title: t("cardData2.3.title"),
      desc: t("cardData2.3.desc"),
      icon: <GiSecretBook />,
    },
    {
      title: t("cardData2.4.title"),
      desc: t("cardData2.4.desc"),
      icon: <RiBox3Fill />,
    },
    {
      title: t("cardData2.5.title"),
      desc: t("cardData2.5.desc"),
      icon: <FaPeoplePulling />,
    },
  ];

  return (
    <div className="w-full bg-[url('https://doing.social/img/bg1.b3f24c76.jpg')]">
      <div className="w-[80%]  mx-auto  justify-center md:gap-4  py-4 md:py-8 flex flex-wrap gap-2 ">
        {CardData.map((card, index) => (
          <div
            key={index}
            className=" border  flex flex-col border-[#4D4D51] rounded-lg shadow-md md:rounded-lg p-6  md:w-[20rem] py-6 md:py-8  text-white  bg-gradient-to-br from-[#2E2F32] to-[#38393C] bg-[#38393C]  "
          >
            <div className="flex flex-col items-center  mb-2">
              <div className="mr-2 border border-[#F6CE6D] rounded-full p-3 bg-[#393835]  flex">
                <span className="text-xl md:text-3xl  text-[#F8CF6F] ">
                  {card.icon}
                </span>
              </div>
              <h2 className="text-lg md:text-xl font-serif font-bold ">
                {card.title}
              </h2>
            </div>
            <p className="text-white">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
