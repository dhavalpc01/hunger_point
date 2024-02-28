import React, { useCallback, useState } from "react";
import HeaderLogo from "../../assets/headerLogo.png";
import LocationIcon from "../../assets/location";
import BasketIcon from "../../assets/basket";
import UserIcon from "../../assets/userIcon";
import { useNavigate } from "react-router-dom";
import HeaderHead from "../headerHead";

const Header = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const handleRout = (rout: string) => {
    navigate(`${rout}`);
  };

  return (
    <>
      <HeaderHead />
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 bg-gradient-to-r from-[#252525] to-[#380000] w-full min-w-fit mb-2">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <img
              className="mr-3 h-20 w-20"
              loading="eager"
              alt=""
              src={HeaderLogo}
              onClick={() => handleRout("/homepage")}
            />
            <div className="flex items-center lg:order-2">
              <div className="h-[63px] justify-end gap-x-5 font-inter flex">
                <div className="buttons-states-dark7 h-[49px] rounded-[56px] border-[3px] border-[#e5b638] box-border flex flex-row items-center justify-end py-0 pl-[10px] pr-4 relative gap-x-[5px] hover:bg-[#b38205] hover:border-[#b38205]">
                  <BasketIcon />
                  <div className="relative leading-[130%] text-[#fff]">2</div>
                </div>
                <div
                  className="h-[49px] gap-x-[5px] justify-end cursor-pointer font-poppins flex items-center"
                  onClick={() => handleRout("/")}
                >
                  <button className="cursor-pointer px-[13px] bg-[#e5b638] self-stretch rounded-[56px] flex flex-row items-center justify-end gap-x-[10px] hover:bg-[#b38205]">
                    <UserIcon />
                  </button>
                  <div className="relative uppercase whitespace-nowrap leading-[130%] text-[#fff]">
                    JOHN SMITH
                  </div>
                </div>
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              className={`${
                isVisible ? "" : "hidden"
              } "justify-between items-center w-full lg:flex lg:w-auto lg:order-1"`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <div
                    className="buttons-states w-[400px] rounded-[5px] bg-[#363636] border border-[#424242] box-border flex flex-col items-start justify-center p-[10px] max-w-full cursor-pointer text-left text-[10px] "
                    onClick={() => handleRout("/location")}
                  >
                    <div className="self-stretch flex flex-row items-center justify-start gap-x-1 max-w-full">
                      <LocationIcon />
                      <div className="flex-1 relative leading-[130%] uppercase inline-block max-w-full whitespace-nowrap text-[#fff] text-[10px]">
                        SELECT Location
                      </div>
                    </div>
                    <div className="text-[#fff] text-base gap-x-5 justify-start self-stretch flex">
                      <div className="divider-line flex-1 flex flex-row items-center justify-start">
                        <div className="flex-1 relative leading-[20px] whitespace-nowrap text-base font-normal uppercase font-poppins">
                          Set your location here
                        </div>
                      </div>

                      <div className="bg-[#c21f24] h-7 rounded-md flex flex-row items-center justify-center px-3 py-2 box-border cursor-pointer hover:bg-[#e8454a] hover:border-[#e8454a] hover:box-border">
                        <div className="relative leading-[13px] uppercase text-[#fff] text-[10px] font-normal">
                          LOCATE STORE
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="buttons-states-dark3 h-12 rounded-md flex flex-row items-center justify-start px-3 py-0 box-border cursor-pointer hover:bg-[#424242] hover:border-[#424242] hover:box-border">
                    <div className="relative leading-[130%] uppercase text-[#fff]">
                      LOCATIONS
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="buttons-states-dark3 h-12 rounded-md flex flex-row items-center justify-start px-3 py-0 box-border cursor-pointer hover:bg-[#424242] hover:border-[#424242] hover:box-border">
                    <div className="relative leading-[130%] uppercase text-[#fff]">
                      MENU
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="buttons-states-dark3 h-12 rounded-md flex flex-row items-center justify-start px-3 py-0 box-border cursor-pointer hover:bg-[#424242] hover:border-[#424242] hover:box-border">
                    <div className="relative leading-[130%] uppercase text-[#fff]">
                      ORDER NOW
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
