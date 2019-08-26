import React from "react";

const NumberButton = (props) => {
  // console.log('Number', props, props.numb)
  return (
    <button>
      { props.numb }
    </button>
  );
};

export default NumberButton;