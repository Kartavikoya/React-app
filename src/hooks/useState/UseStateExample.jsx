import { useState } from 'react';

// Example 1: Simple Counter
export function Counter() {
  // useState returns [current value, function to update value]
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}


// Main component combining all examples
export default function UseStateExamples() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>useState Hook Examples</h1>
      <Counter />

    </div>
  );
}
