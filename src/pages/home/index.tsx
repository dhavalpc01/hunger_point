import React from "react";
import HomePageImg from "../../assets/homePageImg.png";
import Button from "../../common/button";
import OurLocation from "./components/ourLocation";
import Review from "./components/review";
import BecomeAVip from "./components/becomeAVip";

const Home = () => {
  return (
    <div className="bg-[#252525] h-fit  w-[100vw]">
      <div className="w-[100vw] relative flex flex-col items-center justify-center bg-[#252525]">
        <img src={HomePageImg} alt="homePageImg" className="h-[630px] w-full" />
        <div className="w-full sm:w-full md:w-[50%] lg:w-[40%] xl:w-[40%] gap-5 text-[#fff] bg-[#0000004D] font-poppins font-normal text-2xl leading-9 flex flex-col absolute top-[10%]  xl:top-[35%] lg:top-[35%] md:top-[20%] xl:left-[10%] lg:left-[10%] md:left-[10%] px-20 py-10 rounded-[10px]">
          Lorem ipsum dolor sit amet consectetur. Ante eget vel dis Lorem ipsum
          dolor Ante eget vel dis
          <span>
            <Button
              name={"Order Online Now!"}
              className={
                "border-[3px] border-[#E5B638] px-16 rounded-md hover:bg-[#E5B638] hover:text-[#000] py-2"
              }
            />
          </span>
        </div>
        <div className="w-[90%] bg-[#1D1D1D] px-20 py-[50px] rounded-[30px] flex sm:flex-col md:flex-row lg:flex-row flex-col items-center justify-between absolute bottom-[-60%] sm:bottom-[-60%] md:bottom-[-45%] lg:bottom-[-30%]">
          <div className="w-[45%] text-[#fff] text-4xl font-poppins font-bold leading-[57px] flex flex-col">
            WHAT WE BELIEVE
            <span className="text-[#fff] text-[25px] font-normal font-poppins leading-10">
              We believe in produce. Tasty produce. Produce like:
            </span>
          </div>
          <div className="w-[45%] text-[#fff] font-normal text-2xl leading-9 font-poppins">
            Lorem ipsum dolor sit amet consectetur. Ante eget vel dis Lorem
            ipsum dolor Ante eget vel dis
          </div>
        </div>
      </div>
      <div className="mt-96 sm:mt-96 md:mt-80 lg:mt-56 items-center flex justify-center flex-col">
        <OurLocation />
        <Review />
        <BecomeAVip />
      </div>
    </div>
  );
};

export default Home;
