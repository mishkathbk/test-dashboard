import React from "react";
import SectionOne from "./_components/SectionOne";
import SectionTwo from "./_components/SectionTwo";
import SectionThree from "./_components/SectionThree";
import BreadCrump from "@/components/BreadCrump";

const page = () => {
  return (
    <>
      <BreadCrump />
      <div className="bg-grayBackground ~px-[0.5rem]/[1.313rem] h-full pb-[2.875rem]">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </>
  );
};

export default page;
