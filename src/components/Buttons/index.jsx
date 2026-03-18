import { useState } from "react";
import { Text } from "../Text";

export const Button = ({count, onButtonClick}) =>{
    

    return(
        <>
            <button onClick={onButtonClick}>Click to increment</button>
            <Text count={count}/> 
        </>
    )
}