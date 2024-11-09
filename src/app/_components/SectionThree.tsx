import Image from "next/image";
import React from "react";
import SearchSvg from "@public/svg/Search.svg";
import FilterButton from "@/components/FilterButton";
import FilterSvg from "@/components/svg/FilterSvg";
import CalenderSvg from "@/components/svg/CalenderSvg";
import ShareSvg from "@/components/svg/ShareSvg";
import DownArrowSvg from "@/components/svg/DownArrowSvg";
import ItemsList from "./ItemsList";

const SectionThree = () => {
  return (
    <div className="bg-white rounded-xl w-full ~pl-[0.6rem]/[1.313rem] ~pr-[0.6rem]/[1.75rem] pt-[1.375rem]">
      <div className="flex flex-col  md:flex-row md:justify-between  items-center">
        <h3 className=" hidden md:block text-grayText text-global-subheading">
          Inventory Items
        </h3>
        <div className="flex ~gap-[0.3rem]/[0.438rem] flex-wrap ">
          <div className="flex justify-between md:block w-full md:w-auto ~px-[0.5rem]/0 items-center ~pb-[0.5rem]/0">
            <h3 className="block md:hidden text-grayText text-global-subheading">
              Inventory Items
            </h3>

            <div className="flex py-[0.281rem] ~px-[0.3rem]/[0.5rem] ~gap-[0.5rem]/[1.169rem] items-center !~w-[6rem]/[11rem] border-[1px] border-grayBorder rounded-[0.25rem]">
              <Image
                src={SearchSvg}
                alt="search-svg"
                className="~size-[1rem]/[1.25rem]"
              />
              <input
                type="text"
                placeholder="Search"
                className="text-[#ABAFB1] outline-none w-full"
              />
            </div>
          </div>
          <div className="flex gap-[0.75rem] flex-wrap ">
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
              <DownArrowSvg className="size-[1rem]" />
            </button>
          </div>
        </div>
      </div>
      <ItemsList />
    </div>
  );
};

export default SectionThree;
