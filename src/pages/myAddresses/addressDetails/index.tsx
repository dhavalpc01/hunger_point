import React from "react";
import SubHeader from "../../../common/subHeader";
import Button from "../../../common/button";
import TextInput from "../../../common/textInput";
import SelectInput from "../../../common/selectInput";

const AddressDetails = () => {
  return (
    <div className="bg-[#252525] h-full min-h-[100vh]">
      <div className="container mx-auto bg-[#252525] h-full min-h-[100vh] flex flex-col gap-4 pt-2">
        <SubHeader
          isIcon={true}
          title={"My Addresses"}
          subTitle={"Address details"}
        />
        {/* Address from */}

        <div className="w-[70%] flex gap-5 flex-col">
          <div className="flex gap-[10px] w-full">
            <TextInput
              type={"text"}
              id={"First_Name"}
              className={
                "w-[50%] border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
              }
              placeholder={"First Name"}
              required={true}
            />
            <TextInput
              type={"text"}
              id={"Last_Name"}
              className={
                "w-[50%] border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
              }
              placeholder={"Last Name"}
              required={true}
            />
          </div>
          <div className="flex gap-[10px] w-full">
            <TextInput
              type={"text"}
              id={"address"}
              className={
                "w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
              }
              placeholder={"Address"}
              required={true}
            />
          </div>
          <div className="flex gap-[10px] w-full">
            <TextInput
              type={"text"}
              id={"address"}
              className={
                "w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
              }
              placeholder={""}
              required={true}
            />
          </div>
          <div className="flex gap-[10px] w-full">
            <SelectInput
              id={"store"}
              className={
                "w-[50%] border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
              }
            />
            <SelectInput
              id={"store"}
              className={
                "w-[50%] border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
              }
            />
          </div>
          <div className="flex gap-[10px] w-full">
            <TextInput
              type={"text"}
              id={"contact_umber*"}
              className={
                "w-[50%] border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
              }
              placeholder={"Contact Number*"}
              required={true}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            name={"Back"}
            className={
              "font-inter font-bold text-base leading-5 items-center border border-[#fff] rounded-md h-[49px] px-3 text-[#fff]"
            }
          />
          <Button
            name={"Add Address"}
            className={
              "font-inter font-bold text-base leading-5 items-center bg-[#C21F24] rounded-md h-[49px] px-3 text-[#fff]"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
