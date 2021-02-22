import { createSlice } from '@reduxjs/toolkit';

// interface ICounter  {
//     increment: (state: <{ value: number; }>) => void; decrement: (state: WritableDraft<{ value: number; }>) => void; incrementByAmount: (state: any, action: any) => void; }
// } would you need to type this?? how would I type it if I wanted to/needed to?

export const counter = createSlice({
    name: 'counter',
    initialState:  {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state: any, action: any) => {
            state.value += action.payload
        }
    }
})
export const { increment, decrement, incrementByAmount } = counter.actions;

export default counter.reducer;