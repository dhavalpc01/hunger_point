import React from "react";

const TextInputArea = ({ id, className, placeholder, required }: any) => {
  return (
    <textarea
      id={id ? id : "Id"}
      className={
        className
          ? className
          : "border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
      }
      placeholder={placeholder ? placeholder : ""}
      required={required ? true : false}
      rows={4}
    ></textarea>
  );
};

export default TextInputArea;
