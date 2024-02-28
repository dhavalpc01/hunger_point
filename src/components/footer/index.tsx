import React from "react";
import FooterLogo from "../../assets/footerLogo.svg";
import InstagramDarkFooter from "../../assets/instagramDarkFooter.svg";
import FacebookDarkFooter from "../../assets/facebookDarkFooter.svg";
import MailDarkFooter from "../../assets/mailDarkFooter.svg";
import CopyrightIcon from "../../assets/copyrightIcon.svg";
import FooterMark from "../../assets/footerMark.svg";
import FooterLineMark from "../../assets/footerLineMark.svg";

const Footer = () => {
  return (
    <div style={{ background: "radial-gradient(#252525, #4A0000)" }} className="w-[100vw]">
      <img src={FooterLineMark} alt="footerLogo" className="absolute mt-7" />
      <img src={FooterMark} alt="footerLogo" className="absolute " />
      <div className="px-20 flex flex-col gap-[70px]">
        <div className="flex justify-between flex-col sm:flex-col md:flex-col lg:flex-row ">
          <img src={FooterLogo} alt="footerLogo" />
          <div className="flex gap-[15px]">
            <img
              src={InstagramDarkFooter}
              alt="footerLogo"
              className="cursor-pointer"
            />
            <img
              src={FacebookDarkFooter}
              alt="footerLogo"
              className="cursor-pointer"
            />
            <img
              src={MailDarkFooter}
              alt="footerLogo"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex gap-[30px] flex-wrap">
          <div className="font-poppins font-normal text-lg text-[#fff] cursor-pointer">
            Locations
          </div>
          <div className="font-poppins font-normal text-lg text-[#fff] cursor-pointer">
            Pickup & Delivery
          </div>
          <div className="font-poppins font-normal text-lg text-[#fff] cursor-pointer">
            Menu
          </div>
          <div className="font-poppins font-normal text-lg text-[#fff] cursor-pointer">
            Privacy
          </div>
          <div className="font-poppins font-normal text-lg text-[#fff] cursor-pointer">
            Policies
          </div>
          <div className="font-poppins font-normal text-lg text-[#fff] cursor-pointer">
            Terms and conditions
          </div>
        </div>
        <div className="font-poppins font-normal text-lg text-[#fff] flex justify-center items-center gap-[10px]">
          <img src={CopyrightIcon} alt="footerLogo" />
          2024, Hunger Points, All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
