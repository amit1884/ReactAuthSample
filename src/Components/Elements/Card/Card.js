import React from "react";
import "../../../assets/styles/Card.css";
function Card(props) {
  const { className } = props;
  return (
    <div className={`custom-card ${className ? className : ""}`}>
      {props.children}
    </div>
  );
}

export default Card;
