import React, { useState } from "react";
import Counter from "./Counter";

export default function Dashboard() {
  const [counts, setCounts] = useState([0, 0]);
  const [timestamps, setTimestamps] = useState([null, null]);

  const updateCounter = (index, newCount) => {
    const newCounts = [...counts];
    newCounts[index] = newCount;
    setCounts(newCounts);

    const newTimestamps = [...timestamps];
    newTimestamps[index] = new Date().toLocaleTimeString();
    setTimestamps(newTimestamps);
  };

  const resetCounters = () => {
    setCounts([0, 0]);
    setTimestamps([null, null]);
  };

  const total = counts.reduce((sum, c) => sum + c, 0);

  return (
    <div className="dashboard">
      <div className="counters">
        {counts.map((count, index) => (
          <Counter
            key={index}
            index={index}
            count={count}
            timestamp={timestamps[index]}
            onUpdate={updateCounter}
          />
        ))}
      </div>

      <div className="dashboard-footer">
        <h3>Total: {total}</h3>
        <button onClick={resetCounters}>Reset All</button>
      </div>
    </div>
  );
}
