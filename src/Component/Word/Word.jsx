import React, { useState } from "react";
import WordSelector from "../WordSelctor/WordSelector";



function Word() {
  const sentenceSlots = new Array(5).fill(null);
  const [selectedWords, setSelectedWords] = useState(sentenceSlots);

  const handleWordSelect = (index, word) => {
    const updatedSelectedWords = [...selectedWords];
    updatedSelectedWords[index] = word;
    setSelectedWords(updatedSelectedWords);
  };

  return (
    <div className="App">
      <h1>Sentence Unscramble Game</h1>
      <WordSelector
        words={[
          "The",
          "quick",
          "brown",
          "fox",
          "jumps",
          "over",
          "the",
          "lazy",
          "dog",
        ]}
        onWordSelect={handleWordSelect}
      />
      <div className="sentence">
        {selectedWords.map((word, index) => (
          <span key={index}>{word || "_____"} </span>
        ))}
      </div>
    </div>
  );
}

export default Word;
