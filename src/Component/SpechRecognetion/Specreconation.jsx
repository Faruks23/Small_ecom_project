import React, { useEffect, useState } from "react";

function SpeechRecognition() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [Time, setTime] = useState(30)
  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;
 const start = () => {
   let interval;
   if (Time > 0) {
     interval = setInterval(() => {
       setTime(Time - 1);
     }, 1000);
   }
   return () => clearInterval(interval);
 };
  recognition.onstart = () => {
      start()
    setListening(true);
  };

  recognition.onresult = (event) => {
    const newTranscript = event.results[event.results.length - 1][0].transcript;
    setTranscript(newTranscript);
  };
  
  //   if (Time <= 0) {
  //     recognition.stop();
  // }
 
  const toggleRecognition = () => {
    if (listening) {
      recognition.stop();
      
    } else {
      recognition.start();
        
   
    }
    setListening(!listening);
  };

  useEffect(() => {
   
    // setTime(Time-1)
   }, [Time]);


  return (
    <div>
      <button onClick={toggleRecognition}>
        {listening ? "Stop" : "Start"} Listening
      </button>
      <p>Transcript:{transcript}</p>
      <p className="text-3xl font-bold">{ Time}</p>
    </div>
  );
}

export default SpeechRecognition;
