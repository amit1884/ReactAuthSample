import React from "react";

function Input(props) {
  const { id, type, required, placeholder, value, onChange, className } = props;
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder ? placeholder : ""}
      value={value}
      onChange={(e) => onChange(e, id)}
      className={`custom-input ${className ? className : ""}`}
      required={required}
    />
  );
}

export default Input;
