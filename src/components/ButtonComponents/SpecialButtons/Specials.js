import React, { useState } from "react";

import SpecialButton from './SpecialButton';
//import any components needed

//Import your array data to from the provided data file
import { specials } from '../../../data';

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [spButtons, setSpButtons] = useState(specials);

  return (
    <div>
      {spButtons.map(sp => <SpecialButton key={ sp } special={ sp } /> )}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;
