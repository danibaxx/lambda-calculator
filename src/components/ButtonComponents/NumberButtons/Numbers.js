import React, { useState } from "react";

import NumberButton from './NumberButton';

import { numbers } from '../../../data';

const Numbers = () => {
  const [numButtons, setNumButtons] = useState(numbers);

  return (
    <div>
      {numButtons.map(number => <NumberButton key={ number } numb={ number } /> )}
    </div>
  );
};

export default Numbers;
