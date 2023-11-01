import React, { useState } from "react";

function UserInput() {
  const [userSentence, setUserSentence] = useState("");

  const handleUserSentenceChange = (event) => {
    setUserSentence(event.target.value);
  };

  const handleUserSentenceSubmit = () => {
    // Implement logic to compare userSentence with expected sentence
    // Provide feedback to the user
    // Reset the timer
  };

  return (
    <div>
      <h2>Your Sentence</h2>
      <textarea
        value={userSentence}
        onChange={handleUserSentenceChange}
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={handleUserSentenceSubmit}>Submit</button>
    </div>
  );
}

export default UserInput;
