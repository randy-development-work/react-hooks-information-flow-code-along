import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor); // initial value for color state

  // store color of the Children in the Parent state
  const [childrenColor, setChildrenColor] = useState('#FFF');

  // newChildColor argument to update Child, and send data back to Parent
  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); // update color state to a new value
    setChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      {/* data of the Child color passed down as props */}
      <Child color={childrenColor} onChangeColour={handleChangeColor}/>
      <Child color={childrenColor} onChangeColour={handleChangeColor}/>
    </div>
  );
}

export default Parent;
