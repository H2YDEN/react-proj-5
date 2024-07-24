import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  let currentDisplay = useSelector(selectDisplay);
  return (
    <div classname="stack">
      <h1>{currentDisplay.name.official}</h1>
      <h2>{currentDisplay.name.common}</h2>
      <h2>Capital: {currentDisplay.capital}</h2>
      <h2>Population: {currentDisplay.population}</h2>
    </div>
  );
};

export default Overview;
