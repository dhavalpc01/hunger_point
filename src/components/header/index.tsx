import React, { useCallback } from "react";
import HeaderLogo from "../../assets/headerLogo.png";
import LocationIcon from "../../assets/location";
import BasketIcon from "../../assets/basket";
import UserIcon from "../../assets/userIcon";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onTextInstanceContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 bg-gradient-to-r from-[#252525] to-[#380000] w-full min-w-fit">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <img
            className="mr-3 h-20 w-20"
            loading="eager"
            alt=""
            src={HeaderLogo}
            onClick={onLogoImageClick}
          />

          <div className="flex items-center lg:order-2 flex-1 justify-end gap-x-[30px]">
            <div
              className="buttons-states w-[400px] rounded-[5px] bg-[#363636] border border-[#424242] box-border flex flex-col items-start justify-center p-[10px] max-w-full cursor-pointer text-left text-[10px] "
              onClick={onButtonsStatesContainerClick}
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

            <div className="buttons-states-dark3 h-12 rounded-md flex flex-row items-center justify-end px-3 py-0 box-border cursor-pointer hover:bg-[#424242] hover:border-[#424242] hover:box-border">
              <div className="relative leading-[130%] uppercase text-[#fff]">
                LOCATIONS
              </div>
            </div>
            <div className="buttons-states-dark3 h-12 rounded-md flex flex-row items-center justify-end px-3 py-0 box-border cursor-pointer hover:bg-[#424242] hover:border-[#424242] hover:box-border">
              <div className="relative leading-[130%] uppercase text-[#fff]">
                MENU
              </div>
            </div>
            <div className="buttons-states-dark3 h-12 rounded-md flex flex-row items-center justify-end px-3 py-0 box-border cursor-pointer hover:bg-[#424242] hover:border-[#424242] hover:box-border">
              <div className="relative leading-[130%] uppercase text-[#fff]">
                ORDER NOW
              </div>
            </div>
            <div className="h-[63px] justify-end gap-x-5 font-inter flex">
              <div className="buttons-states-dark7 h-[49px] rounded-[56px] border-[3px] border-[#e5b638] box-border flex flex-row items-center justify-end py-0 pl-[10px] pr-4 relative gap-x-[5px] hover:bg-[#b38205] hover:border-[#b38205]">
                <BasketIcon />
                <div className="relative leading-[130%] text-[#fff]">2</div>
              </div>
              <div
                className="h-[49px] gap-x-[5px] justify-end cursor-pointer font-poppins flex items-center"
                onClick={onTextInstanceContainerClick}
              >
                <button className="cursor-pointer px-[13px] bg-[#e5b638] self-stretch rounded-[56px] flex flex-row items-center justify-end gap-x-[10px] hover:bg-[#b38205]">
                  <UserIcon />
                </button>
                <div className="relative uppercase whitespace-nowrap leading-[130%] text-[#fff]">
                  JOHN SMITH
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
