import { useRef } from "react";
import { useState } from "react";

function Demo(){

    const [count, setCount] = useState(0);
    const timerref = useRef('mk');

    // const letTimerid =''


    // console.log(ref.current);
    const onStartClick = () =>{
        timerref.current = setInterval(() =>{
        setCount (count => count + 1)
        }, 100)
        console.log({timerref});
        
    }
    const onStopClick = () =>{
        clearInterval(timerref.current);
        console.log({timerref})
    }

    return(
        <>
        <p> Count - {count} </p>
        <button onClick={onStartClick}>Start</button>
        <button onClick={onStopClick}>Stop</button>
        </>
    );
}

export default function UseRefExamples() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Use Ref</h1>
      <Demo />
    </div>
  );
}