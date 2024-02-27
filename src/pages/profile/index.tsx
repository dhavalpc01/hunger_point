import React, { useEffect } from "react";
import SubHeader from "../../common/subHeader";
import ProfileImg from "../../assets/profileImg.png";
import MyOrderIcon from "../../assets/myOrderIcon";
import RightArrowIcon from "../../assets/rightArrowIcon";
import AddressCardIcon from "../../assets/addressCardIcon";
import LogoutIcon from "../../assets/logoutIcon";

const Profile = () => {
  return (
    <div className="bg-[#252525] h-full min-h-[100vh]">
      <div className="container mx-auto bg-[#252525] h-full min-h-[100vh] flex flex-col gap-4 pt-2">
        <SubHeader
          isIcon={false}
          title={"Profile"}
          subTitle={"Your profile details"}
        />
        {/* Your profile details  */}
        <div className="">
          <div className="h-[320px] w-[75%] flex gap-8 ">
            <div className="w-[30%] h-full  bg-[#363636] rounded-3xl border-2 border-[#5F5F5F]">
              <img
                src={ProfileImg}
                alt="profileImg"
                className="h-[210px] w-full rounded-t-3xl"
              />
              <div className="flex flex-col justify-center items-center gap-[10px] pt-4 font-semibold font-poppins text-2xl text-[#fff]">
                John Smith
                <span className="font-normal font-poppins text-sm text-[#fff]">
                  +1 636(972)4601
                </span>
              </div>
            </div>
            <div className="w-[60%] h-fit  bg-[#363636] rounded-3xl border-2 border-[#5F5F5F] p-5">
              <div className="flex items-center justify-between p-5 cursor-pointer">
                <div className="flex gap-[10px] items-center">
                  <MyOrderIcon />
                  <span className="font-poppins font-normal text-lg text-[#fff]">
                    My Orders
                  </span>
                </div>
                <RightArrowIcon />
              </div>
              <div className="flex items-center justify-between p-5 cursor-pointer">
                <div className="flex gap-[10px] items-center">
                  <AddressCardIcon />
                  <span className="font-poppins font-normal text-lg text-[#fff]">
                    My Addresses
                  </span>
                </div>
                <RightArrowIcon />
              </div>
              <div className="flex items-center justify-between p-5 cursor-pointer">
                <div className="flex gap-[10px] items-center">
                  <LogoutIcon />
                  <span className="font-poppins font-normal text-lg text-[#fff]">
                    Logout
                  </span>
                </div>
                <RightArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
