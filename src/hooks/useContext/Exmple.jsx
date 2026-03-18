import { useReducer, useState } from "react";
import { Button } from "../../components/Buttons";
import { useCount } from "../../context/count-context";

function Demo(){
    
    // const {count, SetCount} = useCount();

    // global
    const {count, setCount} = useCount();


    // console.log(value);
    

    // const [count, SetCount] = useState(0);

    const onButtonClick = () =>{
        setCount(count + 1);
    }
    return(
        <>
            {/* <Button count={count} onButtonClick={onButtonClick}/> */}

            {/* global */}
            <Button />
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