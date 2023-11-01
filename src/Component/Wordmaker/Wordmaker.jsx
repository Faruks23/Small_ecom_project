import React, { useState } from "react";

function SentenceUnscramble({ sentence }) {
  const words = sentence.split(" ");
  const [selectedWords, setSelectedWords] = useState(
    new Array(words.length).fill(null)
  );
  const originalWords = sentence.split(" ");

  const handleWordSelect = (index) => {
    const updatedSelectedWords = [...selectedWords];
    updatedSelectedWords[index] = words[index];
    setSelectedWords(updatedSelectedWords);
  };

  const isSentenceComplete = selectedWords.every((word) => word !== null);
  const isMatch = selectedWords.join(" ") === sentence;

  return (
    <div className="sentence-unscramble">
      {words.map((word, index) => (
        <>
          <span>{ word}</span>
          <span
            key={index}
            onClick={() => handleWordSelect(index)}
            className={selectedWords[index] ? "selected" : ""}
          >
            {selectedWords[index] || "_____"}
          </span>
        </>
      ))}
      {isSentenceComplete && (
        <p>
          {isMatch ? "Congratulations! You earned 5 points." : "Try again."}
        </p>
      )}
    </div>
  );
}

export default SentenceUnscramble;
