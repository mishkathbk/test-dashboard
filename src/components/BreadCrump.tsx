import React from "react";
import HomeSvg from "./svg/HomeSvg";
import Link from "next/link";
import cn from "../../utils/tailwind";

type Props = {
  path?: string;
  link?: string;
};
const BreadCrump = ({ path, link }: Props) => {
  return (
    <div className="py-[0.25rem] bg-white pl-[1.25rem] flex gap-[0.688rem] items-center border-t-[1px] border-slight ">
      <Link href="/">
        <HomeSvg />
      </Link>
      <h3 className="text-lightGrayText text-global-header3">/</h3>
      <Link
        href="/"
        className={cn("text-lightGrayText !text-global-header3", {
          "text-lightBlue": path && link,
        })}
      >
        Inventory
      </Link>
      {path && link && (
        <>
          <h3 className="text-lightGrayText text-global-header3">/</h3>
          <Link href={link} className="text-lightGrayText text-global-header3">
            {path}
          </Link>
        </>
      )}
    </div>
  );
};

export default BreadCrump;
