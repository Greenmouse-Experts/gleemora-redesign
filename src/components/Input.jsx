import React from "react";

const Input = ({ labelText, value, onChange, name, type = "text" }) => {
  return (
    <div className="w-full">
      <label className="label_class text-black">{labelText}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="input_class h-[4rem]"
      />
    </div>
  );
};

export default Input;
