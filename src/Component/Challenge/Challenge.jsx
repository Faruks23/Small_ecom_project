import React, { useState, useEffect } from "react";

function Challenge() {
  const [challengeWord, setChallengeWord] = useState("");
  const [timer, setTimer] = useState(5000);

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      <h2>Challenge</h2>
      <p>Challenge Word: {challengeWord}</p>
      <p>Time Left: {timer} seconds</p>
    </div>
  );
}

export default Challenge;
