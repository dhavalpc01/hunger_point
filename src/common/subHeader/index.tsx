import React from "react";
import LeftArrowIcon from "../../assets/leftArrowIcon";

interface subHeader {
  isIcon: boolean;
  title: string;
  subTitle: string;
}

const SubHeader = ({ isIcon, title, subTitle }: subHeader) => {
  return (
    <div>
      <div className="border-b-2 border-b-[#E6E6E6] gap-5 flex flex-col">
        {isIcon && <LeftArrowIcon />}
        <div className="font-poppins font-normal text-4xl leading-10 text-[#fff]">
          {title}
        </div>
        <div className="font-poppins font-light text-xl leading-[26px] text-[#fff] mb-5">
          {subTitle}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
