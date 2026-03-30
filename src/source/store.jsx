import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counterSlice';

export const store = configureStore({
    reducer :{
        counter : counterReducer,
    }//state variable

    
})

console.log(store.getState());

