import React from "react";

function Button(props) {
  const { type, className } = props;
  return (
    <button
      type={type ? type : "button"}
      className={className ? className : ""}
    >
      {props.children}
    </button>
  );
}

export default Button;
