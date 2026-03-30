import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const cartContext = createContext();

const cartProvider = ({childern}) =>{
    const initalState ={
        cart:[]
    }
    const [{cart}, cartDispatch] = useReducer(cartReducer, initalState);

    return(
        <cartContext.Provider value={{cart, cartDispatch}}>
            {childern}
        </cartContext.Provider>
    )
}

const useCart = () => useContext(cartContext); 

export {useCart, cartProvider}