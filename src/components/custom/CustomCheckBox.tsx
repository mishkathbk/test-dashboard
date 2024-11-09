"use client"
import React from "react";
import { Checkbox } from "@headlessui/react";
import { useState } from "react";
const CustomCheckBox = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <Checkbox
      checked={enabled}
      onChange={setEnabled}
      className="group block cursor-pointer ~size-[1.2rem]/[1.5rem] rounded-lg border-[1px] border-grayBorder bg-white data-[checked]:bg-blue-500"
    >
      <svg
        className="stroke-white opacity-0 group-data-[checked]:opacity-100"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M3 8L6 11L11 3.5"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Checkbox>
  );
};

export default CustomCheckBox;
