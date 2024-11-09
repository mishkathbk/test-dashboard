"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import DownArrowSvg from "../svg/DownArrowSvg";
import cn from "../../../utils/tailwind";

type Props = {
  optionsArray: string[];
  topSectionClassName?: string;
};
const CustomSelect = ({ topSectionClassName, optionsArray }: Props) => {
  const [selected, setSelected] = useState(optionsArray[0]);

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={`relative flex bg-[#5E636614] py-[0.25rem] px-[0.688rem] items-center w-full rounded-lg border-none text-global-header3 text-lightGrayText h-full ${topSectionClassName}`}
        >
          {selected}
          <DownArrowSvg className="size-[1rem] group " />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={cn(
            "w-[var(--button-width)] rounded-xl  bg-lightGray p-[0.4rem] [--anchor-gap:var(--spacing-1)] focus:outline-none",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {optionsArray.map((options: string, i: number) => (
            <ListboxOption
              key={i}
              value={options}
              className="group flex cursor-pointer items-center  gap-[0.5rem]  py-1.5 px-3 select-none  z-50"
            >
              <div className="text-global-header3 text-lightGrayText">
                {options}
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default CustomSelect;
