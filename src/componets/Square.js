import React from "react";

function Square(prop) {
  let valueColor = "classx";
  prop.value == "X" ? (valueColor = "classx") : (valueColor = "classo");
  return (
    <div className="square" onClick={prop.updateSquare}>
      {prop.value}
    </div>
  );
}

export default Square;
