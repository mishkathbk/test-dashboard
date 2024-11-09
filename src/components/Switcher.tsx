"use client";
import cn from "../../utils/tailwind";

type Props={
  id:string
  setEnabled:(value:boolean)=>void;
  enabled:boolean
}
const Switcher = ({enabled,setEnabled,id}:Props) => {
  
  return (
    <div>
      <label
        htmlFor={id}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative h-full flex items-center">
          <input
            type="checkbox"
            id={id}
            className="sr-only"
            onChange={() => {
              setEnabled(!enabled);
            }}
          />
          <div className={cn("block h-[1.25rem] w-[2.5rem] rounded-full bg-gray10 dark:bg-primary",{" !bg-[#5570F166] ":enabled})}></div>
          <div
            className={`absolute left-[0.25rem]  flex h-[1rem] w-[1rem] items-center justify-center rounded-full bg-gray9 transition ${
              enabled && "!right-[0.125rem] !translate-x-full !bg-[#5570F1]"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default Switcher;
