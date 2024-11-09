import { ButtonAnimation } from "@/components/animation/ButtonAnimation";
import DownArrowSvg from "@/components/svg/DownArrowSvg";
import React from "react";

const SectionOne = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center  pt-[1.438rem] pb-[1.25rem]">
      <h3 className="~text-global-header2/global-subheading  text-grayText font-medium ~pb-[1rem]/0">
        New Inventory Item
      </h3>
      <div className="flex gap-[1.5rem]">
        <ButtonAnimation className="flex py-[0.375rem] px-[1rem] bg-[#1C1D22] rounded-xl text-white gap-[0.813rem] items-center">
          <h3 className="text-white ~text-global-button/global-header2 ">
            Save as Draft
          </h3>
          <p className="text-[#37393F]">|</p>
          <DownArrowSvg className="size-[1.5rem]" />
        </ButtonAnimation>
        <ButtonAnimation className="flex py-[0.594rem] px-[2rem] hover:bg-white text-white hover:text-lightBlue bg-lightBlue rounded-xl  gap-[0.813rem] items-center">
          <h3 className=" ~text-global-button/global-header2">
            Save & Publish
          </h3>
        </ButtonAnimation>
      </div>
    </div>
  );
};

export default SectionOne;
