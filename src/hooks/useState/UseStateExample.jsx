import { useState, useEffect } from 'react';

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

export function Switch(){
      const [isOn, SetSwitch] = useState(false);

      const handle = ()=>{
         SetSwitch(!isOn);
      }

   return (
    <div>
      <h2>Switch</h2>
        <button onClick={handle} style={{ padding: '10px 20px', marginRight: '10px' }}>
          {isOn ? 'Turn Off' : 'Turn On'}
        </button>   
        {/* <p>
          Switch Status: <strong>{isOn ? 'ON' : 'OFF'}</strong>
        </p> */}
        <p> 
            <button style={{backgroundColor: isOn ? 'green' : 'red'}} variant="success">Switch</button>
        </p>
        
    </div>
    
  );
}

export function Stopwatch(){
    const [minutes, setMins] = useState(1);
    const [seconds, setSeconds] = useState(0);

    const handleDecrement = () => {
        setSeconds(prevSeconds => {
            if (prevSeconds === 0) {
                setMins(prevMins => {
                    if (prevMins === 0) {
                        return 0;
                    }
                    return prevMins - 1;
                });
                return 59;
            }
            return prevSeconds - 1;
        });
    };

    const handleReset = () => {
        setMins(0);
        setSeconds(0);
    };

  return(
    <div>
        <h2>Stopwatch</h2>
        <input type="number" value={minutes} onChange={(e) => setMins(Number(e.target.value))} placeholder="Minutes" />
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button> <br/>
        <p>{minutes.toString().padStart(2, "0")} : {seconds.toString().padStart(2, "0")}</p><br/>
    </div>
  ) 

}

// Main component combining all examples
export default function UseStateExamples() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>useState with Const Functions & Conditions</h1>
      <Counter />
      <hr />
      <Switch/>
      <hr />
      <Stopwatch/>
    </div>
  );
}
