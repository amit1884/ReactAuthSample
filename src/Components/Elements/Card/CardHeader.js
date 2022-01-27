import React from "react";

function CardHeader(props) {
  return (
    <div className={`card-header ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  );
}

export default CardHeader;
