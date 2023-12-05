import React, { useState } from 'react';
import './App.css';
import SwiperComponent from './components/SwiperComponent';
import InputBox from './components/InputBox';
import SubmitButton from './components/SubmitButton';
import BufferComponent from './components/BufferComponent';

function App() {
  const [inputValue, setInputValue] = useState(""); // Separate state for input value
  const [deckData, setDeckData] = useState(null);   // Separate state for deck data
  const [loading, setLoading] = useState(false);    // Separate state for loading


  const handleSubmit = async () => {    // Remove inputValue from here
    setLoading(true); 
    console.log("Submitted Value:", inputValue);

    try {
      const response = await fetch('https://llmcards.safakan.com/create_deck_from_input', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: inputValue })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response Data:", data);
      setDeckData(data.deck); // Update state with API response data

    } catch (error) {
      console.error("Error during API call:", error);
    }    

    setLoading(false);
  };

  return (
    <div className="App">
      <h1 className="heading">LLM CARDS</h1>
      <p> it's time for you to have fun</p>

      <BufferComponent loading={loading} />    
      <InputBox setInputValue={setInputValue} onSubmit={handleSubmit} />      

      <p> </p>

      <SubmitButton onClick={handleSubmit} />

      <SwiperComponent deckData={deckData} /> {/* Pass API response data to SwiperComponent */}


    </div>
  );
}

export default App;