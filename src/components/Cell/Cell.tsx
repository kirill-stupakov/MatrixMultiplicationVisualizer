import React from "react";

import "./Cell.scss";

interface Props {
  value: string;
  state: "error" | "highlight" | "default";
}

const Cell: React.FC<Props> = ({ value, state }) => {
  return (
    <input
      type="text"
      placeholder="0"
      value={value}
      className={`cell ${state}`}
    />
  );
};

export default Cell;
