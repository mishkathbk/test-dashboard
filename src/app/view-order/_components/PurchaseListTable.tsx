import CustomCheckBox from "@/components/custom/CustomCheckBox";
import CustomSort from "@/components/custom/CustomSort";
import React from "react";

const orderArray = [
  {
    orderDate: "12 Aug 2022 - 12:25 am",
    orderType: "Home Delivery",
    unitPrice: "₦25,000.00",
    qty: 2,
    discount: "₦0.00",
    orderTotal: "₦50,000.00",
    status: "completed",
  },
];
const PurchaseListTable = () => {
  return (
    <div className="overflow-x-auto no-scrollbar">
      <table className="w-full  ">
        <thead>
          <tr className=" border-t-[1px] border-b-[1px] ">
            <td className="py-[1.125rem]">
              <CustomCheckBox />
            </td>
            <td>
              <CustomSort text="Order Date" />
            </td>
            <td>
              <CustomSort text="Order Type" />
            </td>
            <td>
              <CustomSort className="justify-center" text="Unit Price" />
            </td>
            <td>
              <CustomSort text="Qty" />
            </td>
            <td>
              <CustomSort text="Discount" />
            </td>
            <td>
              <CustomSort text="Order Value" className="justify-center" />
            </td>
            <td>
              <CustomSort text="Status" className="justify-center md:justify-normal"/>
            </td>
          </tr>
        </thead>
        <tbody>
          {orderArray.map((item, i) => (
            <tr key={i}>
              <td className="py-[0.75rem]">
                <CustomCheckBox />
              </td>
              <td className="~text-global-button/global-header2 text-tableGrayText">
                {item.orderDate}
              </td>
              <td className="~text-global-button/global-header2 text-tableGrayText">
                {item.orderType}
              </td>
              <td className="~text-global-button/global-header2 text-tableGrayText text-center">
                {item.unitPrice}
              </td>
              <td className="~text-global-button/global-header2 text-tableGrayText text-center md:text-left">
                {item.qty}
              </td>
              <td className="~text-global-button/global-header2 text-tableGrayText text-center">
                {item.discount}
              </td>
              <td className="~text-global-button/global-header2 text-tableGrayText text-center">
                {item.orderTotal}
              </td>
              <td>
                <div className="bg-lighterGreen py-[0.25rem] px-[0.688rem] rounded-lg w-fit">
                  <p className="text-lightGreen ~text-global-button/global-header3">{item.status}</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseListTable;
