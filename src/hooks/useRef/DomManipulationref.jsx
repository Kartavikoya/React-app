import { useRef, forwardRef } from "react";


//passing ref to component
const MyButton =  forwardRef(
    (props, ref) => {
        console.log(props);
        return(
            <input ref={ref} placeholder="ssss"/>
        )
    }
)

function DOMEx() {
    
    const inputRef = useRef();

    const onfocusClick = () => {
        inputRef.current.focus();
    }

    return(
        <>
            <MyButton placeholder = "somethinggg" ref={inputRef}/>
            <button onClick={onfocusClick}>Focus on Input</button>
        </>
    );
}

export default function DomManipu () {

    return(
        <div>
            <p>DOM Manipulation Example</p>
            <DOMEx/>
        </div>
    );
}