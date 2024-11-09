import { ButtonAnimation } from "@/components/animation/ButtonAnimation";
import PlusSvg from "@/components/svg/PlusSvg";
import Link from "next/link";
import React from "react";

const SectionOne = () => {
    
  return (
    <div className="flex justify-between items-center  pt-[1.438rem]">
      <h3 className="~text-global-header2/global-subheading font-medium text-grayText">
        Inventory Summary
      </h3>
      <Link href='/new-inventory' >
        <ButtonAnimation className="flex py-[0.375rem] px-[1.375rem] hover:bg-white transition-all duration-150 bg-lightBlue text-white hover:text-lightBlue rounded-xl gap-[0.5rem] items-center">
          <PlusSvg className="~size-[1.2rem]/[1.5rem]" />
          <h3 className=" ~text-global-header3/global-header2">Add a New Product</h3>
        </ButtonAnimation>
      </Link>
    </div>
  );
};

export default SectionOne;
