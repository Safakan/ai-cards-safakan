import React, { useState } from 'react';
import './App.css';
import SwiperComponent from './components/SwiperComponent';
import InputBox from './components/InputBox';
import SubmitButton from './components/SubmitButton';
import BufferComponent from './components/BufferComponent';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {    // Remove inputValue from here
    setLoading(true); 
    console.log("Submitted Value:", inputValue);

    try {
      const response = await fetch('https://llmcards.safakan.com/', {
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

    } catch (error) {
      console.error("Error during API call:", error);
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <h1 className="heading">LLM CARDS</h1>
      <p> it's time for you to have fun</p>

      <SwiperComponent />

      <BufferComponent loading={loading} />    
      <InputBox setInputValue={setInputValue} onSubmit={handleSubmit} />      

      <p> </p>

      <SubmitButton onClick={handleSubmit} />
    </div>
  );
}

export default App;