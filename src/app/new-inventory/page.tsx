import BreadCrump from "@/components/BreadCrump";
import React from "react";
import SectionOne from "./_components/InventorySectionOne";
import ProductForm from "./_components/ProductForm";

const page = () => {
  return (
    <>
      <BreadCrump path="New Inventory" link="/new-inventory" />
      <div className="bg-grayBackground px-[1.313rem] pb-[3rem] h-full">
        <SectionOne />
        <ProductForm/>
      </div>
    </>
  );
};

export default page;
