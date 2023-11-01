import React, { useState } from "react";
import axios from "axios";

function ChatBot() {
  const [word, setWord] = useState("");
  const [generatedSentence, setGeneratedSentence] = useState("");

  const handleWordSubmit = async () => {
    try {
      // Fetch sentences from Datamuse API based on the word
      const response = await axios.get(
        `https://api.datamuse.com/words?rel=sentences&max=1&word=${word}`
      );
      const sentence = response.data[0]?.sentence || "No sentence found.";
      
   console.log(`Sentence: ${sentence}`);
      // Update the generatedSentence state
      setGeneratedSentence(sentence);
    } catch (error) {
      console.error("Error fetching sentences:", error);
    }
  };

  return (
    <div>
      <h2>Chat Bot</h2>
      <div>
        <label>Enter a Word:</label>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={handleWordSubmit}>Generate Sentence</button>
      </div>
      <p>Generated Sentence: {generatedSentence}</p>
    </div>
  );
}

export default ChatBot;
