import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
  let currentDisplay = useSelector(selectDisplay);
  return (
    <div classname="symbols">
      <h1>{currentDisplay.name.official}</h1>
      <h2>{currentDisplay.name.common}</h2>
      <br></br>
      <div classname="stack">
        <h2>Flag</h2>
        <img src={currentDisplay?.flags.png} alt="flag-img" />
      </div>
      <div classname="stack"></div>
      <h2>Coat of Arms</h2>
      <img src={currentDisplay?.coatOfArms.png} alt="coa-img" />
    </div>
  );
};

export default Symbols;
