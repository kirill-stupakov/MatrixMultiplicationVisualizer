import { useState } from "react";

import Matrix from "./components/Matrix/Matrix";
import "./App.scss";

const App = () => {
  const multiplyMatrices = (a: number[][], b: number[][]): number[][] => {
    let res = [];

    for (let i = 0; i < a.length; i++) {
      let newRow = [];
      for (let j = 0; j < b[0].length; j++) {
        let newCell = 0;
        for (let k = 0; k < a[0].length; k++) {
          newCell += a[i][k] * b[k][j];
        }
        newRow.push(newCell);
      }
      res.push(newRow);
    }

    return res;
  };

  const [a, setA] = useState([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]);
  const [b, setB] = useState([
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
  ]);

  return (
    <div className="App">
      <header>
        <span>Matviz</span> - a matrix multiplication visualizer
      </header>

      <Matrix matrix={a} mutable highlightColor="ff0000"></Matrix>
      <Matrix matrix={b} mutable highlightColor="00ff00"></Matrix>
      <Matrix
        matrix={multiplyMatrices(a, b)}
        mutable
        highlightColor="00ff00"
      ></Matrix>
      <footer>
        See this project on{" "}
        <a href="https://github.com/kirill-stupakov/matrix-multiplication-visualizer">
          GitHub
        </a>
      </footer>
    </div>
  );
};

export default App;
