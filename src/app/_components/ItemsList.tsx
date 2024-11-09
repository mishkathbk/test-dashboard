"use client";
import CustomCheckBox from "@/components/custom/CustomCheckBox";
import CustomActionSelect from "@/components/custom/CustomActionSelect";
import CustomSort from "@/components/custom/CustomSort";
import Iphone13 from "@public/image/iphone13.png";
import Image from "next/image";
import React, { useState } from "react";
import CustomSelect from "@/components/custom/CustomSelect";
import Arrow from "@public/svg/arrowDown.svg";
import cn from "../../../utils/tailwind";

const itemsArray = [
  {
    name: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    inStock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
  {
    name: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    inStock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
  {
    name: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    inStock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
  {
    name: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    inStock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
  {
    name: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    inStock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
  {
    name: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    inStock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
  {
    name: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    inStock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
  {
    name: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    inStock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
  {
    name: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    inStock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
  {
    name: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    inStock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
];

const optionArray = ["Publish", "UnPublish"];
const ItemsList = () => {
  const [selectedOptions, setSelectedOptions] = useState(
    itemsArray.map((items, i) =>
      i === 2 || i === 3 || i === 4 || i === 9 ? optionArray[1] : optionArray[0]
    )
  );

  const handleSelectChange = (value: string, index: number) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.map((option, i) => (i === index ? value : option))
    );
  };
  const quantityArray = ["10", "20", "30"];
  return (
    <div className="pt-[1.25rem] overflow-x-auto no-scrollbar">
      <table className="w-full  ">
        <thead>
          <tr className=" border-t-[1px] border-b-[1px] ">
            <td className="py-[1.125rem]">
              <CustomCheckBox />
            </td>
            <td></td>
            <td>
              <CustomSort text="Product Name" />
            </td>
            <td>
              <CustomSort text="Category" />
            </td>
            <td>
              <CustomSort className="justify-center" text="Unit Price" />
            </td>
            <td>
              <CustomSort text="In-Stock" />
            </td>
            <td>
              <CustomSort text="Discount" />
            </td>
            <td>
              <CustomSort text="Total Value" className="justify-center" />
            </td>
            <td>
              <CustomSort
                text="Action"
                className="justify-center lg:justify-normal"
              />
            </td>
            <td>
              <CustomSort
                text="Status"
                className="justify-center lg:justify-normal"
              />
            </td>
          </tr>
        </thead>
        <tbody className="border-b-[1px]">
          {itemsArray.map((item, i) => (
            <tr key={i} className="">
              <td className="py-[0.75rem]">
                <CustomCheckBox />
              </td>
              <td className="">
                <div className="size-[2.25rem] rounded-lg border-[1px] border-slight">
                  <Image src={Iphone13} alt="item-image" className=" " />
                </div>
              </td>
              <td className="~text-global-header3/global-header2 text-tableGrayText">
                {item.name}
              </td>
              <td className="~text-global-header3/global-header2 text-tableGrayText text-center lg:text-left">
                {item.category}
              </td>
              <td className="~text-global-header3/global-header2 text-tableGrayText text-center">
                {item.unitPrice}
              </td>
              <td className="~text-global-header3/global-header2 text-tableGrayText text-center lg:text-left">
                {item.inStock}
              </td>
              <td className="~text-global-header3/global-header2 text-tableGrayText text-center">
                {item.discount}
              </td>
              <td className="~text-global-header3/global-header2 text-tableGrayText text-center">
                {item.totalValue}
              </td>
              <td className="">
                <CustomActionSelect
                  selectedOption={selectedOptions[i]}
                  setSelectedOption={(value) => handleSelectChange(value, i)}
                  optionArray={optionArray}
                />
              </td>
              <td>
                <div
                  className={cn(
                    "text-lightBlue !~text-global-button/global-header3 py-[0.25rem] px-[0.688rem] bg-lightBlue/15 w-fit rounded-lg",
                    {
                      " bg-peach4 text-darkBlueText":
                        selectedOptions[i] != "Publish",
                    }
                  )}
                >
                  {selectedOptions[i] === "Publish"
                    ? "Published"
                    : "Unpublished"}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pt-[0.563rem] pb-[0.938rem] flex flex-col md:flex-row justify-between items-center w-full ~gap-[0.5rem]/0 ">
        <div className="flex items-center w-full md:w-auto justify-between md:justify-normal">
          <CustomSelect
            optionsArray={quantityArray}
            topSectionClassName="gap-[0.5rem]"
          />
          <p className="~text-global-button/global-header2 text-gray6 pl-[0.625rem]">
            Items per page
          </p>
          <p className="~text-global-button/global-header2 text-gray5 pl-[1.375rem]">
            1-10 of 200 items
          </p>
        </div>
        <div className="flex items-center w-full md:w-auto justify-between md:justify-normal">
          <CustomSelect
            optionsArray={["1", "2", "3"]}
            topSectionClassName="gap-[0.5rem]"
          />
          <p className="~text-global-button/global-header2 text-gray5 pl-[0.5rem]">
            of 44 pages
          </p>
          <div className="~text-global-button/global-header2  pl-[1.5rem] flex gap-[0.5rem]">
            <Image
              src={Arrow}
              alt="arrow"
              className="size-[1rem] cursor-pointer"
            />
            <Image
              src={Arrow}
              alt="arrow"
              className="size-[1rem] rotate-[180deg]  cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
