import React, { useState } from 'react';
import './InputBox.css';

const InputBox = ({ onSubmit, setInputValue }) => {
  const [inputValue, setInput] = useState(''); // Changed setInputValue to setInput

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents the default form submission on Enter key
      setInputValue(inputValue); // This setInputValue is from props
      onSubmit(); // Calls the onSubmit function passed from the parent component
    }
  };

  return (
    <input 
      type="text" 
      className="cool-input" 
      placeholder="Enter your prompt and hit enter!"
      value={inputValue}
      onChange={(e) => setInput(e.target.value)}  // Changed setInputValue to setInput
      onKeyDown={handleEnter}
    />
  );
};

export default InputBox;