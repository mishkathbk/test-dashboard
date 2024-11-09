import BagSvg from "@/components/svg/BagSvg";
import DownArrowSvg from "@/components/svg/DownArrowSvg";
import React from "react";

const OrderSectionThree = () => {
  return (
    <div className="grid grid-cols-2 w-full gap-[1.188rem] pb-[1.25rem]">
      <div className="bg-white rounded-xl flex flex-col items-center w-full px-[0.938rem] py-[0.688rem]">
        <div className="flex justify-between w-full items-center">
          <div className="p-[0.5rem] bg-lighterPeach rounded-lg">
            <BagSvg className="~size-[1rem]/[1.25rem]" />
          </div>
          <div className="flex text-[#BEC0CA] gap-[0.438rem] items-end">
            <p className="~text-global-button/global-header3 ">All-time</p>
            <DownArrowSvg className="~size-[0.8rem]/[1rem]" />
          </div>
        </div>
        <div className="grid grid-cols-3 ~pt-[1rem]/[2rem] ~gap-[0.5rem]/0 w-full">
          <div className="col-span-3 md:col-span-1 flex flex-col gap-[0.5rem] items-center md:items-start">
            <h3 className="~text-global-header3/global-header2 text-lightGrayText">
              All Orders
            </h3>
            <h2 className="~text-global-header2/global-header1 text-grayText font-medium">1</h2>
          </div>
          <div className="col-span-3 md:col-span-1 flex flex-col gap-[0.5rem] items-center md:items-start">
            <h3 className="~text-global-header3/global-header2 text-lightGrayText">Pending</h3>
            <h2 className="~text-global-header2/global-header1 text-grayText font-medium">0</h2>
          </div>
          <div className=" col-span-3 md:col-span-1 flex flex-col gap-[0.5rem] items-center md:items-start">
            <h3 className="~text-global-header3/global-header2 text-lightGrayText">
              Completed
            </h3>
            <h2 className="~text-global-header2/global-header1 text-grayText font-medium">1</h2>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl w-full px-[0.938rem] py-[0.688rem]">
        <div className="flex justify-between w-full items-center">
          <div className="p-[0.5rem] bg-lighterPeach rounded-lg">
            <BagSvg className="~size-[1rem]/[1.25rem]" />
          </div>
          <div className="flex text-[#BEC0CA] gap-[0.438rem] items-end">
            <p className="~text-global-button/global-header3 ">All-time</p>
            <DownArrowSvg className="~size-[0.8rem]/[1rem]" />
          </div>
        </div>
        <div className="grid grid-cols-3 ~gap-[0.5rem]/0 ~pt-[1rem]/[2rem]">
          <div className="col-span-3 md:col-span-1 flex flex-col gap-[0.5rem] items-center md:items-start">
            <h3 className="~text-global-header3/global-header2 text-lightGrayText">
              Canceled
            </h3>
            <h2 className="~text-global-header2/global-header1 text-grayText font-medium">0</h2>
          </div>
          <div className="col-span-3 md:col-span-1 flex flex-col gap-[0.5rem] items-center md:items-start">
            <h3 className="~text-global-header3/global-header2 text-lightGrayText">Returned</h3>
            <h2 className="~text-global-header2/global-header1 text-grayText font-medium">0</h2>
          </div>
          <div className="col-span-3 md:col-span-1 flex flex-col gap-[0.5rem] items-center md:items-start">
            <h3 className="~text-global-header3/global-header2 text-lightGrayText">
              Damaged
            </h3>
            <h2 className="~text-global-header2/global-header1 text-grayText font-medium">1</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSectionThree;
