import React, { useState } from 'react';

const Home = () => {
  const [inputValue, setInputValue] = useState(0);

  const increment = () => {
    setInputValue(prev => prev + 1);
  };

  const decrement = () => {
    setInputValue(prev => prev - 1);
  };

  const btnStyle = {
    backgroundColor: "lightgrey",
    margin: 10,
    padding: 20,
    border: "none",
    fontSize: 20,
    cursor: "pointer"
  };

  return (
    <div>
      <input
        style={{ padding: 20, border: "1px solid grey", color: "grey" }}
        type="number"
        placeholder="Enter Something"
        value={inputValue}
        readOnly
      />
      <br />
      <button style={btnStyle} onClick={increment}>+</button>
      <button style={btnStyle} onClick={decrement}>-</button>
    </div>
  );
};

export default Home;
