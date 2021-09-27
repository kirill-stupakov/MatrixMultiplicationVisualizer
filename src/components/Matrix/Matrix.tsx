import React from "react";

import Cell from "../Cell/Cell";
import "./Matrix.scss";

interface Props {
  matrix: number[][];
  mutable: boolean;
  highlightColor: string;
}

const Matrix: React.FC<Props> = ({ matrix, mutable, highlightColor }) => {
  const validator = (str: string) => !isNaN(parseFloat(str));

  return (
    <div className="matrix">
      {matrix.map((row, i) => (
        <div className="row">
          {row.map((cell, j) => (
            <Cell value={cell ? cell.toString() : ""} state="default" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Matrix;
