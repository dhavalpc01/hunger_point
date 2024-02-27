import React from "react";
import HeaderHeadBlackDot from "../../assets/headerHeadBlackDot.svg";
import HeaderHeadDish from "../../assets/headerHeadDish.svg";
import InstaIcon from "../../assets/instagramIcon.svg";
import FacebookOIcon from "../../assets/facebookIcon.svg";
import CloseIcon from "../../assets/closeIcon.svg";

const HeaderHead = () => {
  return (
    <div
      className="px-4 h-[60px] w-full flex justify-between"
      style={{ background: "radial-gradient(#C21F1F, #C29E1FBA)" }}
    >
      <img alt="HeaderHeadBlackDotImg" src={HeaderHeadBlackDot} />
      <div className="basket-button flex">
        <div className="flex items-center text-[#fff] font-poppins text-base leading-4 font-normal h-full">
          Lorem ipsum dolor sit amet consectetur. At dictumst mattis eget
          convallis id adipiscing libero libero.
        </div>
        <img className="" loading="eager" alt="" src={HeaderHeadDish} />
      </div>
      <div className="relative h-full flex items-center">
          <img className="mt-3 rotate-180" alt="" src={HeaderHeadBlackDot} />
        <div className="alberta-container1 flex absolute h-full items-center gap-5">
          <img
            className="instagram-icon"
            loading="eager"
            alt=""
            src={InstaIcon}
          />
          <img
            className="facebook-icon2"
            loading="eager"
            alt=""
            src={FacebookOIcon}
          />
          <img className="close-icon2" loading="eager" alt="" src={CloseIcon} />
        </div>
      </div>
    </div>
  );
};

export default HeaderHead;
