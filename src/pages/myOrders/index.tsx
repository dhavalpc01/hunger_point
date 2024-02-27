import React from "react";
import SubHeader from "../../common/subHeader";
import LocationFlyIcon from "../../assets/locationFly";

const MyOrders = () => {
  return (
    <div className="bg-[#252525] h-full min-h-[100vh]">
      <div className="container mx-auto bg-[#252525] h-full min-h-[100vh] flex flex-col gap-4 pt-2">
        <SubHeader
          isIcon={true}
          title={"My Orders"}
          subTitle={"Order details"}
        />
        {/* Order Details card */}
        <div className="flex flex-col gap-8">
          <div className="border-2 border-[#5F5F5F] rounded-[10px] p-5 w-[30%] flex flex-col gap-[10px]">
            <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
              Order details
            </div>
            <div className="flex justify-between">
              <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
                Order no #123
              </div>
              <div className="font-poppins font-bold text-sm leading-5 text-[#5F5F5F]">
                DELIVERED
              </div>
            </div>

            <div className="flex gap-[5px]">
              <LocationFlyIcon />
              <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
                ALBERTA
              </div>
            </div>
            <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
              Orders
            </div>
            <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
              1 x Chola Puri
            </div>
            <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
              1 x Oreo Shake
            </div>
            <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
              4 x Mango Shake
            </div>
          </div>
          <div className="border-2 border-[#5F5F5F] rounded-[10px] p-5 w-[30%] flex flex-col gap-[10px]">
            <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
              Order details
            </div>
            <div className="flex justify-between">
              <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
                Order no #22
              </div>
              <div className="font-poppins font-bold text-sm leading-5 text-[#5F5F5F]">
                TAKEAWAY
              </div>
            </div>

            <div className="flex gap-[5px]">
              <LocationFlyIcon />
              <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
                Location 2
              </div>
            </div>
            <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
              Orders
            </div>
            <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
              1 x Chola Puri
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
