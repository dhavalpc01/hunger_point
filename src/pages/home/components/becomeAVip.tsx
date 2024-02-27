import React from "react";
import Button from "../../../common/button";

const BecomeAVip = () => {
  return (
    <div className="w-[70%] mt-40">
      <div className=" flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-10  justify-between items-center w-full">
        <div className="font-poppins font-bold text-4xl leading-[57px] text-[#E5B638] flex flex-col w-[50%]">
          BECOME A VIP
          <span className="font-poppins text-2xl font-normal text-[#fff]">
            Recieve updates on special events, Menu items, menu reviews and more
            !
          </span>
        </div>
        <div className="w-[50%]">
          <Button
            name={"Order Online Now!"}
            className={
              "border-[3px] border-[#E5B638] text-[#fff] text-2xl px-16 rounded-md hover:bg-[#E5B638] hover:text-[#000] py-4 flex justify-end"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BecomeAVip;
