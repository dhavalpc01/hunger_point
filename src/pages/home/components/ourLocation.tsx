import React from "react";
import RightArrowIcon from "../../../assets/rightArrowIcon";
import LocationImg from "../../../assets/locationImg.png";

const OurLocation = () => {
  return (
    <div className="w-[90%]">
      <div className="flex items-center justify-between">
        <div className="font-poppins font-bold text-4xl leading-[57px] text-[#fff] ">
          OUR LOCATIONS
        </div>
        <div className="font-poppins font-normal text-2xl leading-9 text-[#E5B638] flex gap-[10px] items-center justify-center">
          View All Stores
          <span>
            <RightArrowIcon />
          </span>
        </div>
      </div>
      <div>
        <img src={LocationImg} alt="locationImg" className="w-full" />
      </div>
    </div>
  );
};

export default OurLocation;
