import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    count:0
}

const counterSlice =  createSlice({
    name : 'counter',
    initialState,
    reducers:{ 
        increment: state => { state.count++; },// ---> 'counter/incerement' done by createslice iteself
        decrement: state => { state.count--; },// ---> 'counter/decrement'
    }
})

// const createSlice.actions ={
//     increment,
//     decrement
// }
export const {increment,decrement } = counterSlice.actions;

export default counterSlice.reducer;