import "./App.css";
import Square from "./componets/Square";
import { useState, useEffect } from "react";
import { pattern } from "./general/Pattern";

function App() {
  const [currentPlayer, setPlayer] = useState("X");
  const [value, setValue] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentSquare, setCurSqr] = useState(-1);
  const [score, setScore] = useState({ X: 0, O: 0 });

  const updateSquare = (index) => {
    if (value[index] == "") {
      value[index] = currentPlayer;
      setValue(value);

      setCurSqr(index);
      if (currentPlayer === "X") {
        setPlayer("O");
      } else {
        setPlayer("X");
      }
    }
  };

  const isWinner = (currentIndex) => {
    let returnFlag = false;
    pattern.forEach((singlePattern, index) => {
      if (singlePattern.includes(currentIndex)) {
        let tempIndex_0 = singlePattern[0];
        let tempIndex_1 = singlePattern[1];
        let tempIndex_2 = singlePattern[2];

        if (
          value[tempIndex_0] == value[tempIndex_1] &&
          value[tempIndex_1] == value[tempIndex_2]
        ) {
          // console.log("finish");
          returnFlag = true;
        }
      }
    });
    return returnFlag;
  };

  useEffect(() => {
    if (currentSquare >= 0) {
      let winFlag = isWinner(currentSquare);
      if (winFlag) {
        setScore((prev) => {
          let temp = currentPlayer;
          currentPlayer == "X" ? (temp = "O") : (temp = "X");

          return { ...prev, temp: ++prev[temp] };
        });

        alert("won");
        console.log(score);
        console.log(currentPlayer);
      }
    }
  }, [currentSquare, value]);

  const n = 9;

  // Square boxex in board iterated 9 times
  let nineSquares = [...Array(n)].map((elementInArray, i) => {
    return (
      <Square
        key={i}
        value={value[i]}
        updateSquare={() => {
          updateSquare(i);
        }}
      ></Square>
    );
  });

  // reset game
  const resetGame = () => {
    setValue(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
    setCurSqr(-1);
  };

  return (
    <div className="App">
      <div className="board">{nineSquares}</div>
      <div className="game-data">
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame} className="reset-btn">
          Reset
        </button>
        <h2>Score Board</h2>
        <h3> Player-X: {score.X} </h3>
        <h3> Player-O: {score.O} </h3>
      </div>
    </div>
  );
}

export default App;
