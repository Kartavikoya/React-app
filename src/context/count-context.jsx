import { createContext, useContext, useState } from "react";

const initialValue ={
    count:0
}

const countContecxt = createContext(initialValue);

// console.log(countContecxt);



//provider
const CountProvider =({children}) =>{
    const [count, setCount] = useState(111);

    return(
        <countContecxt.Provider value={{count, setCount}}>
            {children}
        </countContecxt.Provider>
    )

}

//consumer
const useCount =() => useContext (countContecxt)

export {useCount, CountProvider}

//custom hook
//  function useCount(){
//     return useContext(countContecxt)
//  }