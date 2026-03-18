import { useReducer, useState } from "react";
import { Button } from "../../components/Buttons";

function Demo(){

    const [count, SetCount] = useState(0);

    const onButtonClick = () =>{
        SetCount(count + 1);
    }
    return(
        <>
            <Button count={count} onButtonClick={onButtonClick}/>
        </>
    );
}

export default function useContext() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Use Context</h1>
      <Demo />
    </div>
  );
}