import React from "react";

const TextInput = ({ type, id, className, placeholder, required }: any) => {
  return (
    <input
      type={type ? type : "text"}
      id={id ? id : "Id"}
      className={
        className
          ? className
          : "border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
      }
      placeholder={placeholder ? placeholder : ""}
      required={required ? true : false}
    />
  );
};

export default TextInput;
