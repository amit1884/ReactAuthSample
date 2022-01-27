import React from "react";

function Container(props) {
  return (
    <div
      className={`d-flex justify-content-center align-items-center page-min-height`}
    >
      {props.children}
    </div>
  );
}

export default Container;
