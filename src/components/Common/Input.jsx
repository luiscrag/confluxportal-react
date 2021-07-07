import * as React from "react";
import "../../styles/Input.css";

const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      className="Input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
