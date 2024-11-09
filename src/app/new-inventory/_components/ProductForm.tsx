"use client";
import React, { useRef, useState } from "react";
import Form from "./Form";
import Upload from "@public/image/upload.png";
import Image from "next/image";
import UploadSvg from "@/components/svg/UploadSvg";
import TrashSvg from "@/components/svg/TrashSvg";

const ProductForm = () => {
  const [imageUrl, setImageUrl] = useState<string | null>();
  const [addImage, setAddImage] = useState<string | null>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileAddInputRef = useRef<HTMLInputElement>(null);
  const handleFileClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };
  const handleAddFileClick = () => {
    if (imageUrl) {
      if (fileAddInputRef.current) {
        fileAddInputRef.current.click();
      }
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };
  const handleAddFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileTwo = event.target.files?.[0];
    if (fileTwo) {
      const url = URL.createObjectURL(fileTwo);
      setAddImage(url);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-[1.25rem] w-full ">
      <Form />
      <div className=" col-span-3 lg:col-span-1 bg-white rounded-xl pt-[1.25rem] ~px-[1rem]/[1.23rem] ">
        <div className=" pb-[0.75rem]">
          {!imageUrl ? (
            <div
              onClick={handleFileClick}
              className="col-span-2 w-full border-[1px] border-[#E1E2E9] bg-grayBackground h-[18.875rem] rounded-xl flex justify-center items-center"
            >
              <div className="flex flex-col items-center justify-center cursor-pointer ~px-[0.2rem]/0">
                <Image
                  src={Upload}
                  alt=""
                  className="~size-[2.5rem]/[2.917rem]"
                />
                <div className="flex text-lightBlue gap-[0.75rem] ~pt-[1.2rem]/[1.875rem] ">
                  <UploadSvg className="size-[1.25rem]" />
                  <h3 className=" font-medium ~text-global-header2/global-subheading">
                    Upload Image
                  </h3>
                </div>
                <h3 className="~text-global-header3/global-header2 text-lightGrayText pt-[0.75rem]">
                  Upload a cover image for your product.
                </h3>
                <p className="text-lightGrayText text-center text-global-header3 pt-[0.25rem]">
                  File Format
                  <span className="text-darkBlueText">&nbsp;jpeg, png </span>
                  Recommended Size
                  <span className="text-darkBlueText">&nbsp;600x600 (1:1)</span>
                </p>
              </div>
            </div>
          ) : (
            <div className="relative h-[18.875rem] col-span-2 rounded-xl flex justify-center items-center overflow-hidden">
              <Image
                src={imageUrl}
                alt=""
                fill
                className="  w-full  h-full object-cover"
              />
              <div className="absolute top-[1rem] right-[1.18rem] flex gap-[0.313rem]">
                <div className="bg-peach4 text- p-[0.375rem] rounded-lg">
                  <UploadSvg className="size-[1.25rem]" />
                </div>
                <div className="bg-peach4 p-[0.375rem] rounded-lg">
                  <TrashSvg
                    onClick={() => setImageUrl(null)}
                    className="size-[1.25rem]"
                  />
                </div>
              </div>
            </div>
          )}
          <input
            type="file"
            accept="image/jpeg, image/png"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <h2 className="text-grayText text-global-subheading py-[0.75rem]">
            Additional Images
          </h2>
          <div className="grid grid-cols-2 gap-[1.75rem]">
            {!addImage ? (
              <div
                onClick={handleAddFileClick}
                className="col-span-1 cursor-pointer w-full h-[10.438rem]  border-[1px] flex justify-center items-center border-[#E1E2E9] bg-grayBackground rounded-xl "
              >
                <div className="flex flex-col items-center w-full ~px-[0.2rem]/0">
                  <Image
                    src={Upload}
                    alt=""
                    className="~size-[2.3rem]/[2.917rem]"
                  />
                  <div className="flex text-lightBlue gap-[0.75rem] pt-[0.75rem] ">
                    <UploadSvg className="size-[1rem]" />
                    <h3 className="font-medium  ~text-global-header3/global-header2">
                      Upload Image
                    </h3>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative col-span-1 h-[10.438rem]  rounded-xl flex justify-center items-center overflow-hidden">
                <Image
                  src={addImage}
                  alt="additional-image"
                  fill
                  className="  w-full  h-full object-cover"
                />
                <div className="absolute top-[1rem] right-[1.18rem] flex gap-[0.313rem]">
                  <div className="bg-peach4 p-[0.375rem] rounded-lg">
                    <UploadSvg className="size-[1.25rem]" />
                  </div>
                  <div className="bg-peach4 p-[0.375rem] rounded-lg">
                    <TrashSvg
                      onClick={() => setAddImage("")}
                      className="size-[1.25rem]"
                    />
                  </div>
                </div>
              </div>
            )}
            <input
              type="file"
              accept="image/jpeg, image/png"
              ref={fileAddInputRef}
              onChange={handleAddFileChange}
              className="hidden"
            />
            {addImage && (
              <div className="col-span-1  w-full h-[10.438rem]  border-[1px] flex justify-center items-center border-[#E1E2E9] bg-grayBackground rounded-xl ">
                <div className="flex flex-col items-center">
                  <Image src={Upload} alt="" className="size-[2.917rem]" />
                  <div className="flex gap-[0.75rem] pt-[0.75rem] ">
                    <UploadSvg className="size-[1rem]" />
                    <h3 className="text-lightBlue font-medium  text-global-header2">
                      Upload Image
                    </h3>
                  </div>
                </div>
              </div>
            )}
            <div className="col-span-1 border-dashed border-[1px] h-[10.438rem] border-[#E1E2E9] rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
