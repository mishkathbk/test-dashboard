"use client"
import DownArrowSvg from "@/components/svg/DownArrowSvg";
import NotificationSvg from "@/components/svg/NotificationSvg";
import Image from "next/image";
import ProfileImage from "@public/image/profile.png";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Logo from "@public/svg/logo.svg";
import SmallMenuSvg from "@/components/svg/SmallMenuSvg";
import Sidebar from "./Sidebar";
import { ButtonAnimation } from "@/components/animation/ButtonAnimation";
type Props = {
  children: ReactNode;
};
const Header = ({ children }: Props) => {
  const [enable, setEnable] = useState(false);
  return (
    <>
      <div className="hidden lg:block"><Sidebar /></div>
      <div className="flex flex-col w-full">
        <div className=" w-full">
          <div className="flex justify-between items-center py-[0.875rem] ~px-[1rem]/[1.313rem] w-full ">
            <Link href="/" className=" block lg:hidden">
              <Image src={Logo} alt="" className="size-[3rem]" />
            </Link>
            <Link href="/" className="block text-grayText text-global-header font-medium">
              Inventory
            </Link>
            <div className="flex gap-[1.25rem] items-center">
              <ButtonAnimation className="hidden md:flex ~gap-[1rem]/[1.25rem] py-[0.375rem] px-[0.75rem] rounded-lg bg-lightPeach items-center">
                <h3 className="text-global-header2 text-darkBlueText cursor-pointer">
                  Nanny’s Shop
                </h3>
                <DownArrowSvg className="size-[1.25rem]" />
              </ButtonAnimation>
              <NotificationSvg className="size-[1.25rem] hover:scale-110 transition-all duration-150" />
              <Image
                src={ProfileImage}
                alt="profile-image"
                className="size-[2rem] object-cover cursor-pointer"
              />
              <div
                onClick={() => setEnable(!enable)}
                className="block lg:hidden text-lightBlue"
              >
                <SmallMenuSvg className="size-[2rem]" />
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
      {enable && (
        <div className="fixed top-0 inset-0 flex w-full h-full">
          <Sidebar />
          <div
            onClick={() => setEnable(!enable)}
            className="bg-transparent w-full "
          ></div>
        </div>
      )}
    </>
  );
};

export default Header;
