import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColour, color }) {
  console.log(onChangeColour);

  // function to invoke onChangeColour and pass random color as argument. onClick takes in that new function
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColour(newColor);
  }
  return <div 
            className="child" 
            // using the color props passed down from Parent
            style={{ backgroundColor: color }} 
            onClick={handleClick}
          />;
}

export default Child;
