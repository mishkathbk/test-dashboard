import { Field, Select } from "@headlessui/react";
import DownArrowSvg from "../svg/DownArrowSvg";
import cn from "../../../utils/tailwind";

type Props = {
  optionArray: string[];
  selectedOption: string;
  setSelectedOption: (value: string) => void;
};

const CustomActionSelect = ({ optionArray, selectedOption, setSelectedOption }: Props) => {
  return (
    <div>
      <Field>
        <div className="relative flex bg-[#5E636614] py-[0.25rem] ~px-[0.5rem]/[0.688rem] items-center w-fit rounded-lg">
          <Select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className={cn(
              "rounded-lg bg-transparent block appearance-none border-none !~text-global-button/global-header3 text-lightGrayText",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          >
            {optionArray.map((option, i) => (
              <option
                key={i}
                value={option}
                className="~text-global-button/global-header3 text-lightGrayText"
              >
                {option}
              </option>
            ))}
          </Select>
          <div className="text-lightGrayText">
            <DownArrowSvg className="~size-[0.8rem]/[1rem]" />
          </div>
        </div>
      </Field>
    </div>
  );
};

export default CustomActionSelect;
