import React from 'react';
import './BufferComponent.css';

function BufferComponent({ loading }) {
  return (
    <div className={`buffer ${loading ? 'show' : ''}`}>
      <div className="buffer-circle"></div>
    </div>
  );
}

export default BufferComponent;