import React from "react";

const SelectInput = ({id, className}:any) => {
  return (
    <select
      id="countries"
      className={className}
    >
      <option selected>Choose a country</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
    </select>
  );
};

export default SelectInput;
