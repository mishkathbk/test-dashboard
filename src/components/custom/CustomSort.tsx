import React from "react";
import SortSvg from "../svg/SortSvg";
type Props = {
  text: string;
  className?: string;
};
const CustomSort = ({ text,className }: Props) => {
  return (
    <div className={`flex items-center ~gap-[0.2rem]/[0.5rem] ${className}`}>
      <p className="~text-global-button/global-header2 text-lightBlackText">{text}</p>
      <SortSvg className="size-[1rem]" />
    </div>
  );
};

export default CustomSort;
