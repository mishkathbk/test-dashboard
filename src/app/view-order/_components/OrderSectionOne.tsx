import DownArrowSvg from "@/components/svg/DownArrowSvg";
import Image from "next/image";
import React from "react";
import PdfSvg from "@public/svg/pdf.svg";

const OrderSectionOne = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between items-center">
      <div className="flex flex-col lg:flex-row ~gap-[0.8rem]/[1.5rem]">
        <h3 className="~text-global-header2/global-subheading text-grayText">Polo T-Shirt</h3>
        <h3 className="~text-global-header2/global-subheading text-lightGrayText">
          <span className="font-medium text-grayText">Date Added</span> 12 Sept
          2022 - 12:55 pm
        </h3>
        <div className="flex gap-[0.75rem] items-center">
          <h3 className="~text-global-header2/global-subheading text-lightGrayText">
            <span className="font-medium text-grayText">Product URL </span>
            1nancystores.com/polot-shirt
          </h3>
          <Image
            src={PdfSvg}
            alt="pdf-svg"
            className="size-[1.25rem] cursor-pointer"
          />
        </div>
      </div>
      <div className="flex gap-[1.5rem] ~pt-[1rem]/0">
        <div className=" cursor-pointer flex py-[0.375rem] ~px-[0.6rem]/[1rem] bg-[#1C1D22] rounded-xl text-white gap-[0.813rem] items-center">
          <h3 className="text-white ~text-global-button/global-subheading">Edit Product</h3>
          <p className="text-[#37393F]">|</p>
          <DownArrowSvg className="size-[1.5rem]" />
        </div>
        <button className="flex py-[0.594rem] ~px-[1rem]/[2rem] bg-lightRedText rounded-xl text-white gap-[0.813rem] items-center">
          <h3 className="text-white ~text-global-button/global-subheading">Save & Publish</h3>
        </button>
      </div>
    </div>
  );
};

export default OrderSectionOne;
