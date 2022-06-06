import React from "react";
import Square from "./Square";

const board = () => {
  return (
    <div>
      <div>
        <Square value={1} />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default board;
