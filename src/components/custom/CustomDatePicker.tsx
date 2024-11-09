import flatpickr from "flatpickr";
import { useEffect } from "react";
import CalenderSvg from "../svg/CalenderSvg";

const CustomDatePicker = () => {
  useEffect(() => {
    // Init flatpickr
    flatpickr(".form-datepicker", {
      mode: "single",
      static: true,
      monthSelectorType: "static",
      dateFormat: "M j, Y",
      prevArrow:
        '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
      nextArrow:
        '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    });
  }, []);

  return (
    <div>
      <div className="relative flex items-center bg-gray7 rounded-lg">
        <input
          className=" w-full  text-gray8  bg-transparent  ~py-[0.8rem]/[1rem] font-normal ~pl-[2.2rem]/[3.5rem] outline-none transition ~text-global-header2/global-subheading "
          placeholder="12/12/2020"
          data-class="flatpickr-right"
        />
        <div className="pointer-events-none absolute inset-0 right-auto text-lightGray ~left-[0.5rem]/[1rem] flex items-center">
          <CalenderSvg className="size-[1.5rem]" />
        </div>
      </div>
    </div>
  );
};

export default CustomDatePicker;
