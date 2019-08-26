import React from "react";

const SpecialButton = (props) => {
  // console.log("Special", props)
  return (
    <button>
      { props.special }
    </button>
  );
};

export default SpecialButton;
