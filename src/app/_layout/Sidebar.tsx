import React from "react";
import MenuSvg from "@/components/svg/MenuSvg";
import BagSvg from "@/components/svg/BagSvg";
import UsersSvg from "@/components/svg/UsersSvg";
import FolderSvg from "@/components/svg/FolderSvg";
import ChatSvg from "@/components/svg/ChatSvg";
import SettingsSvg from "@/components/svg/SettingsSvg";
import HeadPhoneSvg from "@/components/svg/HeadPhone";
import GiftSvg from "@/components/svg/GiftSvg";
import BackSvg from "@/components/svg/BackSvg";
import Link from "next/link";
import Image from "next/image";
import Logo from "@public/svg/logo.svg";

const Sidebar = () => {
  return (
    <div className="bg-white flex flex-col justify-between items-center  px-[1rem] ~pt-[1rem]/[1.5rem] pb-[3rem]  w-fit h-screen md:h-[64rem]">
      <div className="flex flex-col ~gap-[3rem]/[4.438rem]">
        <Link href="/" className="">
          <Image src={Logo} alt="" className="size-[3rem]" />
          {/* <LogoSvg className="size-[3rem]" /> */}
        </Link>
        <div className=" flex flex-col  items-center">
          <Link
            href="#"
            className="hover:scale-110 transition-all duration-150"
          >
            <MenuSvg className="!~size-[1rem]/[1.5rem] ~mb-[1.5rem]/[2.844rem]" />
          </Link>
          <Link
            href="#"
            className="hover:scale-110 transition-all duration-150 relative"
          >
            <div className="absolute ~top-[-0.9rem]/[-1.1rem] ~right-[-0.7rem]/[-0.9rem] ~size-[1.2rem]/[1.5rem] flex justify-center items-center text-darkBlueText bg-[#FFCC91] rounded-full ~text-global-button2/global-header3">
              3
            </div>
            <BagSvg className="~size-[1rem]/[1.5rem] ~mb-[1.5rem]/[2.844rem]" />
          </Link>
          <Link
            href="#"
            className="hover:scale-110 transition-all duration-150"
          >
            <UsersSvg className="~size-[1rem]/[1.5rem] mb-[1.75rem]" />
          </Link>
          <Link
            href="#"
            className="~p-[0.5rem]/[1rem] bg-lightBlue rounded-xl ~mb-[1.3rem]/[1.75rem]"
          >
            <FolderSvg className="~size-[1rem]/[1.5rem] hover:scale-110 transition-all duration-150" />
          </Link>
          <Link
            href="#"
            className="hover:scale-110 transition-all duration-150 relative"
          >
            <div className="absolute ~top-[-0.9rem]/[-1.1rem] ~right-[-0.7rem]/[-0.9rem] ~size-[1.2rem]/[1.5rem] flex justify-center items-center text-darkBlueText bg-[#FFCC91] rounded-full ~text-global-button2/global-header3">
              16
            </div>
            <ChatSvg className="~size-[1rem]/[1.5rem]  ~mb-[2rem]/[2.844rem]" />
          </Link>
          <Link
            href="#"
            className="hover:scale-110 transition-all duration-150"
          >
            <SettingsSvg className="~size-[1rem]/[1.5rem]" />
          </Link>
        </div>
      </div>
      <div className=" flex flex-col gap-[3.75rem] items-center">
        <div className="flex flex-col gap-[0.875rem]">
          <Link
            href="#"
            className="py-[0.688rem] ~px-[0.688rem]/[1rem] flex justify-center rounded-2xl bg-lightGray hover:scale-110 transition-all duration-150"
          >
            <HeadPhoneSvg className="~size-[1rem]/[1.5rem]" />
          </Link>
          <Link
            href="#"
            className="~p-[0.5rem]/[1rem] rounded-2xl flex justify-center items-center bg-peach hover:scale-110 transition-all duration-150"
          >
            <GiftSvg className="~size-[1rem]/[1.5rem]" />
          </Link>
        </div>
        <BackSvg className="~size-[1rem]/[1.5rem] cursor-pointer hover:scale-105 transition-all duration-150" />
      </div>
    </div>
  );
};

export default Sidebar;
