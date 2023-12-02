import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({ onClick }) => {
  return (
    <button className="submit-button" onClick={onClick}>GENERATE A DECK!</button>
  );
};

export default SubmitButton;