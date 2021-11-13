import React, { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('1');

  const addCounter = () => {
    setCount(count + Number(inputValue));
  };

  const subtractCounter = () => {
    setCount(count - Number(inputValue));
  };

  return (
    <div>
      <h1 data-testid="header">Counter</h1>
      <h2
        data-testid="counter"
        className={`${count >= 100 ? 'green' : ''}${
          count <= -100 ? 'red' : ''
        }`}
      >
        {count}
      </h2>
      <button data-testid="subtract-btn" onClick={subtractCounter}>
        -
      </button>
      <input
        className="text-center"
        data-testid="input"
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button data-testid="add-btn" onClick={addCounter}>
        +
      </button>
    </div>
  );
}
