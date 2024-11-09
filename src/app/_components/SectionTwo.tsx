import Image from "next/image";
import React from "react";
import WhiteFolder from "@public/svg/whiteFolder.svg";
import Users from "@public/svg/users.svg";

const SectionTwo = () => {
  return (
    <div className="grid grid-cols-2 gap-[1.188rem] py-[1.25rem]">
      <div className="col-span-2 md:col-span-1 bg-lightBlue rounded-xl py-[0.688rem] px-[0.938rem]">
        <div className="p-[0.5rem] rounded-lg bg-white/15 w-fit">
          <Image src={WhiteFolder} alt="folder-svg" className="size-[1.25rem]" />
        </div>
        <div className="grid grid-cols-2 pt-[2rem]">
          <div className="text-left ">
            <h3 className="~text-global-header3/global-header2 text-white">All Products</h3>
            <h2 className="~text-global-subheading/global-header1 text-white pt-[0.5rem]">350</h2>
          </div>
          <div className="text-left">
            <h3 className="~text-global-header3/global-header2 text-white">Active</h3>
            <div className="flex gap-[0.438rem] pt-[0.5rem] items-center">
              <h2 className="~text-global-subheading/global-header1 text-white">316</h2>{" "}
              <p className="text-global-header3 text-lighterGrayText">86%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 bg-white rounded-xl py-[0.688rem] px-[0.938rem]">
        <div className="p-[0.5rem] rounded-lg bg-lighterPeach w-fit">
          <Image src={Users} alt="folder-svg" className="size-[1.25rem]" />
        </div>
        <div className="grid grid-cols-3 ~gap-[0.3rem]/0 pt-[2rem]">
          <div className="text-left">
            <h3 className="~text-global-header3/global-header2 text-lightRedText">
              Low Stock Alert
            </h3>
            <h2 className="~text-global-subheading/global-header1 text-grayText pt-[0.5rem]">23</h2>
          </div>
          <div className="text-left">
            <h3 className="~text-global-header3/global-header2 text-lightGrayText">Expired</h3>
            <div className="flex gap-[0.438rem]">
              <h2 className="~text-global-subheading/global-header1 text-grayText pt-[0.5rem]">3</h2>
            </div>
          </div>
          <div className="text-left">
            <h3 className="~text-global-header3/global-header2 text-lightGrayText">
              1 Start Rating
            </h3>
            <div className="flex gap-[0.438rem]">
              <h2 className="~text-global-subheading/global-header1 text-grayText pt-[0.5rem]">2</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
