import React from "react";

const OperatorButton = (props) => {
  // console.log("Operator", props)
  return (
    <button>
      { props.op.char }
    </button>
  );
};

export default OperatorButton;