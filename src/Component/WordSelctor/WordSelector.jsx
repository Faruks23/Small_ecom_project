import React, { useState } from "react";

function WordSelector({ words, onWordSelect }) {
  const [draggedWord, setDraggedWord] = useState(null);

  const handleDragStart = (event, word) => {
    setDraggedWord(word);
  };

  const handleDragEnd = () => {
    setDraggedWord(null);
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    onWordSelect(index, draggedWord);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="word-selector">
      <h3>Word Selector</h3>
      <div className="word-list">
        {words.map((word, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, word)}
            onDragEnd={handleDragEnd}
            className="draggable-word"
          >
            {word}
          </div>
        ))}
      </div>
      <div className="sentence-slots">
        {words.map((_, index) => (
          <div
            key={index}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
            className="sentence-slot"
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WordSelector;
