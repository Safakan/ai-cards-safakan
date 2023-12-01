import React from 'react';
import './BufferComponent.css';

function BufferComponent({ loading }) {
  return (
    <div className={`buffer ${loading ? 'show' : ''}`}>
      <div className="buffer-circle"></div>
      {/* Add more elements or animations as needed */}
    </div>
  );
}

export default BufferComponent;
