import { useState } from 'react';

// Example 1: Simple Counter with Const Functions
export function Counter() {
  // useState returns [current value, function to update value]
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  // Condition: check if count is positive
  const isPositive = count > 0;

  return (
    <div>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      {isPositive && <p style={{ color: 'green' }}>Positive Count!</p>}
      {count < 0 && <p style={{ color: 'red' }}>Negative Count!</p>}
      {count === 0 && <p style={{ color: 'blue' }}>Count is Zero</p>}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}


// Example 2: Login with Condition Functions


// Example 3: Age Checker with Const Functions


// Main component combining all examples
export default function UseStateExamples() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>useState with Const Functions & Conditions</h1>
      <Counter />
    </div>
  );
}
