import logo from "./logo.svg";
import "./App.css";
import Square from "./componets/Square";
import { useState, useEffect } from "react";
import { pattern } from "./general/Pattern";

function App() {
  const [currentPlayer, setPlayer] = useState("X");
  const [value, setValue] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentSquare, setCurSqr] = useState(-1);

  const updateSquare = (index) => {
    setValue(
      value.map((elem, i) => {
        if (i == index && elem == "") {
          let temp = currentPlayer;
          setCurSqr(index);
          if (currentPlayer === "X") {
            setPlayer("O");
          } else {
            setPlayer("X");
          }
          return temp;
        }
        return elem;
      })
    );
  };

  const isWinner = (currentIndex) => {
    pattern.forEach((singlePattern, index) => {
      if (singlePattern.includes(currentIndex)) {
        let tempIndex_0 = singlePattern[0];
        let tempIndex_1 = singlePattern[1];
        let tempIndex_2 = singlePattern[2];

        if (
          value[tempIndex_0] == value[tempIndex_1] &&
          value[tempIndex_1] == value[tempIndex_2]
        ) {
          console.log("finish");
          return true;
        }
      }
    });
    return false;
  };

  useEffect(() => {
    if (currentSquare >= 0) {
      console.log("bie");
      let winFlag = isWinner(currentSquare);
      console.log(winFlag);
      if (winFlag) {
        alert("won");
      }
    }
  }, [currentSquare, value]);

  return (
    <div className="App">
      <div className="board">
        <Square
          value={value[0]}
          updateSquare={() => {
            updateSquare(0);
          }}
        ></Square>

        <Square
          value={value[1]}
          updateSquare={() => {
            updateSquare(1);
          }}
        ></Square>

        <Square
          value={value[2]}
          updateSquare={() => {
            updateSquare(2);
          }}
        ></Square>

        <Square
          value={value[3]}
          updateSquare={() => {
            updateSquare(3);
          }}
        ></Square>

        <Square
          value={value[4]}
          updateSquare={() => {
            updateSquare(4);
          }}
        ></Square>

        <Square
          value={value[5]}
          updateSquare={() => {
            updateSquare(5);
          }}
        ></Square>

        <Square
          value={value[6]}
          updateSquare={() => {
            updateSquare(6);
          }}
        ></Square>

        <Square
          value={value[7]}
          updateSquare={() => {
            updateSquare(7);
          }}
        ></Square>

        <Square
          value={value[8]}
          updateSquare={() => {
            updateSquare(8);
          }}
        ></Square>
      </div>
    </div>
  );
}

export default App;
