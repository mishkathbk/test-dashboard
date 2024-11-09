"use client";
import CustomSelect from "@/components/custom/CustomSelect";
import Image from "next/image";
import React, { useState } from "react";
import QuantitySvg from "@public/svg/quantity.svg";
import Switcher from "@/components/Switcher";
import CustomDatePicker from "@/components/custom/CustomDatePicker";
import TriangleSvg from "@public/svg/triangle.svg";
import Bold from "@public/svg/bold.svg";
import Underline from "@public/svg/underline.svg";
import Italic from "@public/svg/italic.svg";
import AlignCenter from "@public/svg/alignCenter.svg";
import AlignLeft from "@public/svg/alignLeft.svg";
import AlignRight from "@public/svg/alignRight.svg";
import LinkSvg from "@public/svg/link.svg";
import Clock from "@public/svg/clock.svg";
const Form = () => {
  const [enableDiscount, setEnableDiscount] = useState<boolean>(false);
  const [enableExpire, setEnableExpire] = useState<boolean>(false);
  const [enablePolicy, setEnablePolicy] = useState<boolean>(false);
  return (
    <div className="col-span-3 lg:col-span-2 ~pt-[1rem]/[1.75rem] ~pl-[1rem]/[1.875rem] rounded-xl ~pr-[1rem]/[2rem] grid grid-cols-2 ~gap-[2rem]/[4.156rem] bg-white ~pb-[3rem]/[10.375rem]">
      <div className=" col-span-2 lg:col-span-1 flex flex-col ~gap-[1rem]/[1.5rem]">
        <input
          type="text"
          placeholder="Product Name"
          className="~text-global-header2/global-subheading bg-gray7 text-gray8 rounded-lg w-full ~p-[0.7rem]/[1rem]"
        />
        <CustomSelect
          optionsArray={["Select Product Category", "category"]}
          topSectionClassName=" !bg-gray7  !rounded-lg !w-full ~p-[0.7rem]/[1rem] justify-between !text-gray8 !~text-global-header2/global-subheading"
        />
        <div className="flex gap-[0.75rem]">
          <input
            type="text"
            placeholder="Selling Price"
            className="~text-global-header2/global-subheading bg-gray7 text-gray8 rounded-lg w-full ~p-[0.7rem]/[1rem]"
          />
          <input
            type="text"
            placeholder="Cost Price"
            className="~text-global-header2/global-subheading bg-gray7 text-gray8 rounded-lg w-full ~p-[0.7rem]/[1rem]"
          />
        </div>
        <div className="flex py-[0.313rem] ~pl-[0.5rem]/[1rem] pr-[0.25rem] bg-gray7 rounded-lg  w-full justify-between">
          <input
            type="text"
            placeholder="Quantity in Stock"
            className="~text-global-header2/global-subheading  text-gray8 bg-transparent "
          />
          <div className="flex flex-col gap-[0.188rem]">
            <Image
              src={QuantitySvg}
              alt=""
              className="cursor-pointer hover:scale-105 transition-all duration-150 ~w-[2rem]/[2.5rem] ~h-[1rem]/[1.219rem]"
            />
            <Image
              src={QuantitySvg}
              alt=""
              className="rotate-[180deg] cursor-pointer hover:scale-105 transition-all duration-150 ~w-[2rem]/[2.5rem] ~h-[1rem]/[1.219rem]"
            />
          </div>
        </div>
        <CustomSelect
          optionsArray={["Order Type", "category"]}
          topSectionClassName=" !bg-gray7  !rounded-lg !w-full !~p-[0.5rem]/[1rem] justify-between !text-gray8 !~text-global-header2/global-subheading"
        />
        <div className=" flex flex-col md:flex-row justify-between w-full ~gap-[0.8rem]/0">
          <h3 className="~text-global-header2/global-subheading font-medium text-lightGrayText">
            Discount
          </h3>
          <div className="flex gap-[1.25rem]">
            <h3 className="~text-global-header2/global-subheading  text-[#83898C]">
              Add Discount
            </h3>
            <Switcher
              id="discount-switch"
              enabled={enableDiscount}
              setEnabled={setEnableDiscount}
            />
          </div>
        </div>
        {enableDiscount && (
          <div className="grid grid-cols-2 gap-[0.75rem]">
            <CustomSelect
              optionsArray={["Type", "Type"]}
              topSectionClassName=" !bg-gray7  !rounded-lg !w-full !p-[1rem] justify-between !text-gray8 !~text-global-header2/global-subheading"
            />
            <input
              type="text"
              placeholder="Value"
              className="~text-global-header2/global-subheading bg-gray7 text-gray8 rounded-lg w-full p-[1rem]"
            />
          </div>
        )}
        <div className=" flex flex-col md:flex-row justify-between w-full ~gap-[0.8rem]/0">
          <h3 className="~text-global-header2/global-subheading font-medium text-lightGrayText">
            Expiry Date
          </h3>
          <div className="flex gap-[1.25rem]">
            <h3 className="~text-global-header2/global-subheading  text-[#83898C]">
              Add Expiry Date
            </h3>
            <Switcher
              id="expiry-switch"
              enabled={enableExpire}
              setEnabled={setEnableExpire}
            />
          </div>
        </div>
        {enableExpire && <CustomDatePicker />}
      </div>
      <div className="col-span-2 lg:col-span-1 flex flex-col ~gap-[1rem]/[1.5rem]">
        <textarea
          placeholder="Short Description"
          className="w-full bg-gray7 ~h-[9rem]/[10.188rem] text-gray8 rounded-lg border-none p-[1rem] outline-none transition  active:border-primary ~text-global-header2/global-subheading"
        ></textarea>
        <div className="">
          <h2 className="text-global-header2 text-[#5E6366] pb-[0.5rem]">
            Product Long Description
          </h2>
          <div className="relative w-full">
            <textarea
              placeholder="Short Description"
              className="w-full bg-gray7 ~h-[9rem]/[10.188rem] text-gray8 ~pt-[3.5rem]/[3.125rem] rounded-lg border-none p-[1rem] outline-none transition  active:border-primary ~text-global-header3/global-subheading"
            ></textarea>
            <div className="flex flex-col xl:flex-row items-center justify-between w-full absolute top-0 ~p-[0.3rem]/[0.5rem]">
              {/* <Quil/> */}
              <div className="flex ~gap-[0.3rem]/[0.5rem] items-center order-2 xl:order-none justify-start xl:justify-normal w-full xl:w-auto ~pl-[0.2rem]/0 ">
                <div className="rounded-lg border-grayBorder border-[1px] ~gap-[0.5rem]/[1rem] items-center text-global-button2 flex ~py-[0.2rem]/[0.438rem] ~px-[0.3rem]/[0.563rem]">
                  <p className="text-gray8">Roboto</p>
                  <Image
                    src={TriangleSvg}
                    alt="triangle-svg"
                    className="size-[0.5rem]"
                  />
                </div>
                <div className="rounded-lg border-grayBorder border-[1px] ~gap-[0.5rem]/[1rem] text-global-button2 flex ~py-[0.2rem]/[0.438rem] items-center ~px-[0.3rem]/[0.563rem]">
                  <p className="text-gray8">Paragraph</p>
                  <Image
                    src={TriangleSvg}
                    alt="triangle-svg"
                    className="size-[0.5rem]"
                  />
                </div>
              </div>
              <div className="flex ~gap-[1rem]/[0.5rem] order-1 xl:order-none ~pb-[0.5rem]/0 justify-start w-full xl:w-auto xl:justify-normal">
                <Image src={Bold} alt="bold-svg" />
                <Image src={Underline} alt="underline-svg" />
                <Image src={Italic} alt="italic-svg" />
                <Image src={AlignCenter} alt="center-svg" />
                <Image src={AlignLeft} alt="left-svg" />
                <Image src={AlignRight} alt="right-svg" />
                <Image src={LinkSvg} alt="link-svg" />
              </div>
            </div>
            <p className="text-gray8 text-global-header2 pt-[0.25rem]">
              Add a long description for your product
            </p>
          </div>
        </div>
        <div className=" flex justify-between w-full">
          <h3 className="~text-global-header2/global-subheading font-medium text-lightGrayText">
            Return Policy
          </h3>
          <div className="flex gap-[1.25rem]">
            <h3 className="~text-global-header2/global-subheading  text-[#83898C]">
              Add Discount
            </h3>
            <Switcher
              id="policy-switch"
              enabled={enablePolicy}
              setEnabled={setEnablePolicy}
            />
          </div>
        </div>
        <div>
          <p className="text-global-header3 text-darkGray">Date Added</p>
          <div className="grid grid-cols-2 ~gap-[0.3rem]/[0.5rem] pt-[0.5rem]">
            <CustomDatePicker />
            <div className="flex gap-[1rem] ~py-[0.5rem]/[0.875rem] items-center ~px-[0.5rem]/[1rem] w-full rounded-lg bg-gray7">
              <Image src={Clock} alt="clock-svg" className="size-[1.5rem] " />
              <p className="~text-global-header2/global-subheading text-gray8">12:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
