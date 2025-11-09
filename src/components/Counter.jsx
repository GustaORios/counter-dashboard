import React from "react";

export default function Counter({ index, count, onUpdate, timestamp }) {
  const increment = () => onUpdate(index, count + 1);
  const decrement = () => onUpdate(index, Math.max(0, count - 1));

  return (
    <div className="counter">
      <h2>Counter {index + 1}</h2>
      <p>Count: {count}</p>
      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      {timestamp && <p className="timestamp">Last updated: {timestamp}</p>}
    </div>
  );
}
