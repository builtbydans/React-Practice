import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count-1);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">
        Click Counter!
      </div>
      <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        <button className="btn btn-primary" onClick={clickHandler}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
