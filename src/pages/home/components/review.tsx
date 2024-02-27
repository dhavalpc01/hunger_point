import React from "react";
import ReviewIconHome from "../../../assets/reviewIconHome.svg";
import SelectInput from "../../../common/selectInput";
import TextInput from "../../../common/textInput";
import TextInputArea from "../../../common/textInputArea";
import Button from "../../../common/button";

const Review = () => {
  return (
    <div className="w-[90%] mt-40">
      <div className="flex items-center justify-start">
        <div className="font-poppins font-bold text-4xl leading-[57px] text-[#fff] flex justify-start ">
          GIVE US YOUR REVIEW
        </div>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-10  justify-between items-center">
        <div>
          <img src={ReviewIconHome} alt="reviewicon" />
        </div>
        <div className="w-[50%] px-10 py-[30px] border border-[#C1C1C1] rounded-[10px] bg-[#363636] flex flex-col gap-[30px]">
          <SelectInput
            id={"store"}
            name={"Which location did you visits"}
            className={
              "w-full border border-[#A7A7A7] rounded-[5px] h-[58px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-base outline-none"
            }
          />
          <TextInput
            type={"text"}
            id={"address"}
            className={
              "w-full border border-[#A7A7A7] rounded-[5px] h-[58px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-base outline-none"
            }
            placeholder={"Which Item did you try"}
            required={true}
          />
          <TextInputArea
            id={"address"}
            className={
              "w-full border border-[#A7A7A7] rounded-[5px] h-[58px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-base outline-none"
            }
            placeholder={"Comment your review"}
            required={true}
          />
          <TextInput
            type={"text"}
            id={"address"}
            className={
              "w-full border border-[#A7A7A7] rounded-[5px] h-[58px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-base outline-none"
            }
            placeholder={"Email ID"}
            required={true}
          />
          <Button
            name={"Submit your details"}
            className={
              "font-inter font-bold text-base leading-5 items-center bg-[#C21F24] rounded-md h-[49px] px-3 text-[#fff]"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
