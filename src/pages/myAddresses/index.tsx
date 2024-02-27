import React from "react";
import SubHeader from "../../common/subHeader";
import EditPen from "../../assets/editPen";
import Button from "../../common/button";

const MyAddresses = () => {
  return (
    <div className="bg-[#252525] h-full min-h-[100vh]">
      <div className="container mx-auto bg-[#252525] h-full min-h-[100vh] flex flex-col gap-4 pt-2">
        <SubHeader
          isIcon={true}
          title={"My Addresses"}
          subTitle={"Address details"}
        />
        {/* Order Details card */}
        <div className="border-2 border-[#5F5F5F] rounded-[10px] p-5 w-[50%] flex flex-row gap-[5px]">
          <div className="flex flex-col gap-[5px] w-[90%]">
            <div className="font-poppins font-bold text-sm leading-5 text-[#E5B638]">
              John Smith
            </div>
            <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
              +1616890234
            </div>
            <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
              12, St churhc street, Vancover
            </div>
            <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
              Canada
            </div>
          </div>
          <div>
            <EditPen />
          </div>
        </div>
        <div>
          <Button
            name={"Add New Address"}
            className={
              "font-inter font-bold text-base leading-5 items-center bg-[#C21F24] rounded-md h-[49px] px-3 text-[#fff]"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MyAddresses;
