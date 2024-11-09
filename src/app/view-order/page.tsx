import BreadCrump from "@/components/BreadCrump";
import React from "react";
import OrderSectionOne from "./_components/OrderSectionOne";
import OrderSectionTwo from "./_components/OrderSectionTwo";
import OrderSectionThree from "./_components/OrderSectionThree";
import OrderSectionFour from "./_components/OrderSectionFour";
const page = () => {
  return (
    <>
      <BreadCrump path="View Inventory" link="/view-order" />
      <div className="bg-grayBackground px-[1.313rem] pt-[1.438rem] h-full pb-[2.313rem]">
        <OrderSectionOne />
        <OrderSectionTwo/>
        <OrderSectionThree/>
        <OrderSectionFour/>
      </div>
    </>
  );
};

export default page;
