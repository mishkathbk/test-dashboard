import React from "react";
import PurchaseListTable from "./PurchaseListTable";
import DownArrowSvg from "@/components/svg/DownArrowSvg";
import ShareSvg from "@/components/svg/ShareSvg";
import CalenderSvg from "@/components/svg/CalenderSvg";
import FilterSvg from "@/components/svg/FilterSvg";
import FilterButton from "@/components/FilterButton";
import SearchSvg from "@public/svg/Search.svg";

import Image from "next/image";

const OrderSectionFour = () => {
  return (
    <div className="bg-white rounded-xl w-full ~pl-[1rem]/[1.313rem] ~pr-[1rem]/[1.75rem] pt-[1.375rem] min-h-[70vh]">
      <div className="flex flex-col  md:flex-row md:justify-between  items-center pb-[1.25rem]">
        <h3 className="text-global-subheading text-grayText ~pb-[0.7rem]/0">Purchases</h3>
        <div className="flex ~gap-[0.3rem]/[0.438rem] flex-wrap">
          <div className="flex py-[0.281rem] ~px-[0.3rem]/[0.5rem] ~gap-[0.5rem]/[1.169rem] items-center !~w-[6rem]/[11rem] border-[1px] border-grayBorder rounded-[0.25rem]">
            <Image
              src={SearchSvg}
              alt="search-svg"
              className="~size-[1rem]/[1.25rem] "
            />
            <input
              type="text"
              placeholder="Search"
              className="text-[#ABAFB1] outline-none w-full ~text-global-header2/global-subheading"
            />
          </div>
          <div className="flex gap-[0.75rem] flex-wrap ~pt-[0.4rem]/0">
            <FilterButton text="Filter">
              <FilterSvg className="size-[1rem]" />
            </FilterButton>
            <FilterButton text="Filter">
              <CalenderSvg className="size-[1rem]" />
            </FilterButton>
            <FilterButton text="Filter">
              <ShareSvg className="size-[1rem]" />
            </FilterButton>
            <button className="flex py-[0.4rem] px-[0.5rem] gap-[0.5rem] items-center border-[1px] border-darkGray rounded-[0.25rem]">
              <p className="text-global-button text-darkGray">Bulk Action</p>
              <DownArrowSvg className="~size-[0.8rem]/[1rem]" />
            </button>
          </div>
        </div>
      </div>
      <PurchaseListTable />
    </div>
  );
};

export default OrderSectionFour;
