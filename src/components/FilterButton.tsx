import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  text: string;
};
const FilterButton = ({ children, text }: Props) => {
  return (
    <button className="flex py-[0.4rem] px-[0.5rem] gap-[0.5rem] items-center border-[1px] border-darkGray rounded-[0.25rem]">
      {children}
      <p className="text-global-button text-darkGray">{text}</p>
    </button>
  );
};

export default FilterButton;
