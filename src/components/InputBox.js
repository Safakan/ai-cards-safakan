import React, { useState } from 'react';
import './InputBox.css';

const InputBox = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents the default form submission on Enter key
      onSubmit(inputValue); // Calls the onSubmit function passed from the parent component
    }
  };

  return (
    <input 
      type="text" 
      className="cool-input" 
      placeholder="Enter your prompt and hit enter!"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleEnter}
    />
  );
};

export default InputBox;
