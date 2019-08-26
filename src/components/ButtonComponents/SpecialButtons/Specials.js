import React, { useState } from "react";

import SpecialButton from './SpecialButton';

import { specials } from '../../../data';

const Specials = () => {
  const [spButtons, setSpButtons] = useState(specials);

  return (
    <div>
      {spButtons.map(sp => <SpecialButton key={ sp } special={ sp } /> )}
    </div>
  );
};

export default Specials;
