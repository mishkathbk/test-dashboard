import Image from "next/image";
import React from "react";
import Tshirt from "@public/image/tshirt.png";
import PieChart from "@public/svg/pieChart.svg";
import DownArrowSvg from "@/components/svg/DownArrowSvg";
import Eye from "@public/svg/eye.svg";
const OrderSectionTwo = () => {
  return (
    <div className="py-[1.25rem] flex flex-col md:flex-row gap-[1.188rem] ">
      <div className="py-[0.688rem] px-[1.938rem] w-full md:w-[11.625rem] shrink-0 bg-white rounded-xl flex justify-center items-center">
        <Image
          src={Tshirt}
          alt=""
          className="size-[7.75rem]  text-grayBorder object-cover"
        />
      </div>
      <div className="bg-white rounded-xl w-full px-[0.938rem] py-[0.688rem] flex flex-col justify-between ~gap-[1rem]/0">
        <div className="flex justify-between w-full items-center">
          <h3 className="text-lightBlackText ~text-global-button/global-header3">
            <span className="text-lightGrayText">Last Order</span> 12 Sept 2022
          </h3>
          <div className="bg-lighterGreen ~text-global-button/global-header3 rounded-lg">
            <h3 className=" text-lightGreen py-[0.25rem] px-[0.688rem] ">
              Published
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 md:gap-[2rem] lg:gap-0 ">
          <div className=" flex flex-col gap-[0.5rem]">
            <h3 className=" text-lightGrayText ~text-global-button/global-header3 ">Price</h3>
            <h3 className=" text-grayText ~text-global-header3/global-header2 font-medium  ">
              ₦25,000.00
            </h3>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <h3 className=" text-lightGrayText ~text-global-button/global-header3 ">
              In-Stock
            </h3>
            <h3 className=" text-grayText ~text-global-header3/global-header2 font-medium  ">
              20
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl w-full px-[0.938rem] py-[0.688rem] flex flex-col justify-between ~gap-[1rem]/0">
        <div className="flex w-full justify-between items-center">
          <div className="~p-[0.3rem]/[0.5rem] rounded-lg bg-lighterBlue">
            <Image src={PieChart} alt="" className="~size-[1rem]/[1.25rem]" />
          </div>
          <div className="flex text-[#BEC0CA] gap-[0.438rem] items-end">
            <p className="~text-global-button/global-header3 ">All-time</p>
            <DownArrowSvg className="~size-[0.8rem]/[1rem]" />
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <h3 className="~text-global-button/global-header2 text-lightGrayText">
            Total Orders
          </h3>
          <h2 className="~text-global-header2/global-header1 text-grayText font-medium">
            ₦50,000.00
          </h2>
        </div>
      </div>
      <div className="bg-white rounded-xl w-full px-[0.938rem] py-[0.688rem] flex flex-col justify-between">
        <div className="flex w-full justify-between items-center">
          <div className="p-[0.5rem] rounded-lg bg-lighterPeach">
            <Image src={Eye} alt="" className="~size-[1rem]/[1.25rem]" />
          </div>
          <div className="flex text-[#BEC0CA] gap-[0.438rem] items-end">
            <p className="~text-global-button/global-header3 ">All-time</p>
            <DownArrowSvg className="~size-[0.8rem]/[1rem]" />
          </div>
        </div>
        <div className="grid grid-cols-2  ~pt-[1rem]/0">
          <div className="flex flex-col gap-[0.5rem]">
            <h3 className="~text-global-header3/global-header2 text-lightGrayText">Views</h3>
            <h2 className="~text-global-header3/global-header1 text-grayText font-medium">
              1200
            </h2>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <h3 className="~text-global-header3/global-header2 text-lightGrayText">
              Favourite
            </h3>
            <h2 className="~text-global-header3/global-header1 text-grayText font-medium">
              23
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSectionTwo;
