import React from "react";
import LocationFlyIcon from "../../../assets/locationFly";
import SubHeader from "../../../common/subHeader";

const OrderDetail = () => {
  return (
    <div className="bg-[#252525] h-full min-h-[100vh]">
      <div className="container mx-auto bg-[#252525] h-full min-h-[100vh] flex flex-col gap-4 pt-2">
        <SubHeader isIcon={true} title={"#123"} subTitle={"Order details"} />
        {/* Order Details card */}
        <div className="flex flex-col gap-8">
          <div className="border-2 border-[#5F5F5F] rounded-[10px] p-5 w-[30%] flex flex-col gap-[10px]">
            <div className="font-poppins font-normal text-sm leading-5 text-[#fff]">
              Location
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
            <div className="border-b border-b-[#E6E6E6]"></div>
            <div className="flex flex-col gap-[30px]">
              <div className="flex justify-between font-poppins font-normal text-base leading-5 text-[#fff]">
                <div className="">Subtotal</div>
                <div>$27.44</div>
              </div>

              <div className="flex justify-between font-poppins font-normal text-base leading-5 text-[#E5B638]">
                <div>
                  Shipping
                  <div className="text-xs leading-4 text-[#fff]">Delivery</div>
                </div>
                <div>$10.00</div>
              </div>

              <div className="flex justify-between font-poppins font-normal text-base leading-5 text-[#fff]">
                <div className="">Tax</div>
                <div>$2.00</div>
              </div>

              <div className="flex justify-between font-poppins font-normal text-base leading-5 text-[#fff]">
                <div className="">Total</div>
                <div>$34.93</div>
              </div>

              <div className="flex justify-between font-poppins font-normal text-base leading-5 text-[#fff]">
                <div className="">Amount</div>
                <div className="text-[#FF1010]">Paid</div>
              </div>

              <div className="flex justify-between font-poppins font-normal text-base leading-5 text-[#fff]">
                <div className="">Payment Method</div>
                <div>UPI</div>
              </div>

              <div className="flex justify-between font-poppins font-normal text-base leading-5 text-[#fff]">
                <div className="">Delivery person</div>
                <div>Sugan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
