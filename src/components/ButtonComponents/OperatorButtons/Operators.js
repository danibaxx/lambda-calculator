import React, { useState } from "react";

import OperatorButton from './OperatorButton';

import { operators } from '../../../data';

const Operators = () => {
  const [opButtons, setOpButtons] = useState(operators);

  return (
    <div>
    {opButtons.map(op => <OperatorButton key={ op.value } op={ op }/> )}
    </div>
  );
};

export default Operators;
