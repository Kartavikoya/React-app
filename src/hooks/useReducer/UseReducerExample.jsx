import { useReducer, useState } from "react";

function Demo(){

    // const [price, Setprice] = useState();
    // const [discount, Setdiscount] = useState();
    // const [rating, Setrating] = useState();
   
    const initialState ={
        // price : '',
        // discount : '',
        // rating : 4.5
        count : 0
    }

    const reducerFun = (state, action) =>{
        switch (action.type) {
            case 'Increment':
                return{
                    ...state,
                    count: state.count +1
                }
            case 'Decrement':
                return{
                    ...state,
                    count: state.count -1
                }
            default:
                return state;
        }
        // if (action.type === 'Increment') {
        //     return{
        //         ...state,
        //         count:state.count+1
        //     }
        // }
        // console.log(state);
        // console.log(action)
        
    }
    
    const [state, dispatch] = useReducer (reducerFun, initialState);
    console.log(state);
    

    return(
        <div>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({type: 'Increment', payload: 1234})}>Increment</button>
            <button onClick={() => dispatch({type: 'Decrement', payload: 1234})}>Decrement</button>
        </div>
    );
}

export default function UseReducerExamples() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Use Reducer</h1>
      <Demo />
    </div>
  );
}