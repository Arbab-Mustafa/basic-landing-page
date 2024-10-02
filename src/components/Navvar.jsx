import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { MdOutlineArrowDropDown } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
const Navvar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const navbarRef = useRef(null);
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setDropdownOpen(false);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavOpen = () => {
    setIsMobile(!isMobile);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="bg-black opacity-[0.95]   fixed top-0 left-0 right-0  w-full z-40   text-[#D8D8D8] ">
        <div className="mx-auto max-w-screen-xl   px-4 sm:px-6 lg:px-8 relative z-30">
          <div className="flex h-16 items-center justify-between  md:justify-center gap-1 md:gap-4 relative">
            {/*  */}
            <div className="md:flex md:items-center md:gap-4">
              <a className="block text-teal-600" href="#">
                LOGO
              </a>
            </div>
            {/* for big screen */}
            <div className=" hidden  md:flex gap-1 md:gap-3  flex-col md:flex-row">
              {/*  */}
              <div>
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 text-xs md:text-sm">
                    {t("navbar", { returnObjects: true }).map((item) => (
                      <li key={item.key}>
                        <a href={item.id}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              {/*  */}
              <div className="flex  gap-4 justify-center items-center">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-full bg-yellow-400 px-4 py-2 text-xs font-medium text-black"
                    href="https://www.v588.co/"
                  >
                    {t("link.title")}
                  </a>

                  {/* dropdown */}
                  <div
                    className="relative inline-block text-left "
                    ref={dropdownRef}
                  >
                    <div>
                      {/* Toggle Dropdown Button */}
                      <button
                        type="button"
                        onClick={toggleDropdown}
                        className="flex justify-center  gap-2 items-center w-full  text-white  rounded-md border   shadow-sm px-3 py-2  text-xs font-medium   focus:outline-none   "
                      >
                        Language
                        {/* <IoMdArrowDropdown /> */}
                        <MdOutlineArrowDropDown />
                      </button>
                    </div>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          {/* English Option */}
                          <button
                            onClick={() => changeLanguage("en")}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                            role="menuitem"
                          >
                            English
                          </button>
                          {/* Chinese Option */}
                          <button
                            onClick={() => changeLanguage("zh")}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                            role="menuitem"
                          >
                            中文
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* for mobile - menu*/}
            <div className="md:hidden text-xl " onClick={() => handleNavOpen()}>
              {isMobile ? <MdCancel /> : <TiThMenu />}
            </div>
            {isMobile && (
              <div
                className=" flex  absolute top-[4.3rem]  rounded-md right-0  md:hidden gap-4   flex-col  w-[14rem] bg-[#141416] px-2 py-2"
                ref={navbarRef}
              >
                {/*  */}
                <div>
                  <nav aria-label="Global">
                    <ul className="flex flex-col items-center gap-6 text-xs md:text-sm">
                      {t("navbar", { returnObjects: true }).map((item) => (
                        <li key={item.key}>
                          <a href={item.id}>{item.label}</a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                {/*  */}
                <div className="flex  gap-4 justify-center  flex-col items-center">
                  <div className="flex flex-col gap-3">
                    <a
                      className="rounded-full bg-yellow-400 px-4 py-2 text-xs font-medium text-black"
                      href="https://www.v588.co/"
                    >
                      {t("link.title")}
                    </a>

                    {/* dropdown */}
                    <div
                      className="relative inline-block text-left"
                      ref={dropdownRef}
                    >
                      <div>
                        {/* Toggle Dropdown Button */}
                        <button
                          type="button"
                          onClick={toggleDropdown}
                          className="flex justify-center  gap-2 items-center w-full  text-white  rounded-md border   shadow-sm px-3 py-2  text-xs font-medium   focus:outline-none   "
                        >
                          Language
                          {/* <IoMdArrowDropdown /> */}
                          <MdOutlineArrowDropDown />
                        </button>
                      </div>

                      {/* Dropdown Menu */}
                      {dropdownOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            {/* English Option */}
                            <button
                              onClick={() => changeLanguage("en")}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                              role="menuitem"
                            >
                              English
                            </button>
                            {/* Chinese Option */}
                            <button
                              onClick={() => changeLanguage("zh")}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                              role="menuitem"
                            >
                              中文
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navvar;
