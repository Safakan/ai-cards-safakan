import React, { useState } from 'react';
import './App.css';
import SwiperComponent from './components/SwiperComponent';
import InputBox from './components/InputBox';
import SubmitButton from './components/SubmitButton';
import BufferComponent from './components/BufferComponent';

function App() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (inputValue) => {
    setLoading(true); // Start loading
    console.log("Submitted Value:", inputValue);
    // Here, call your API or perform actions, then stop loading
    // For demonstration, stopping loading after 3 seconds
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="App">
      <h1 className="heading">LLM CARDS</h1>
      <div>
      <InputBox onSubmit={handleSubmit} />
      </div>
      <div>
      <SubmitButton onClick={handleSubmit} />
      </div>
      <div>
      <BufferComponent loading={loading} />
      <SwiperComponent />
      </div>
    </div>
  );
}

export default App;
