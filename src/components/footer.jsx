import { FaTelegram } from "react-icons/fa6";
import { GrSkype } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="flex gap-2 justify-center items-center bg-[url('https://doing.social/img/bg1.b3f24c76.jpg')] py-4 md:py-11">
      <div className=" flex justify-center items-center w-24 h-24 md:w-32 md:h-32 bg-[url('https://barcode.tec-it.com/barcode.ashx?data=https%3a%2f%2fwww.tec-it.com&code=MobileQRUrl')]">
        <div className="bg-white p-1">
          <FaTelegram className="w-10 h-10 text-blue-500 " />
        </div>
      </div>
      <div className="  flex justify-center items-center w-24 h-24 md:w-32 md:h-32  bg-[url('https://barcode.tec-it.com/barcode.ashx?data=https%3a%2f%2fwww.tec-it.com&code=MobileQRUrl')]">
        <div className="bg-white p-1">
          <GrSkype className="w-10 h-10 text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
