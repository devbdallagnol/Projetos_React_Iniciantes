import React from "react";
import "./Clock.css";
import { useState } from "react";
import { useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="Clock">
      <h2>Relógio Digital</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
