import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { decrement, increment, reset } from './counterSlice';
import '../App.css';

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch: AppDispatch = useDispatch(); // correct implementation of this? is there a need for an individual counter dispatch?

      const handleChange = (increment?: any, decrement?: any, reset?: any) => {
        if(increment) return dispatch(increment)
        else if(decrement) return dispatch(decrement)
        else if(reset) return dispatch(reset)
        else return;
      }
    return (
        <div className="counter-container">
            Count: {count}
            <div className="counter">
                <button 
                aria-label="Increment value by 1"
                onClick={() => handleChange(increment())}
                >Increment</button>
                <span>{count}</span>
                <button 
                aria-label="Decrement value by 1"
                onClick={()=> handleChange(decrement())}
                >Decrement</button>
                  <button 
                aria-label="reset value to 0"
                onClick={()=> handleChange(reset())}
                >reset</button>
            </div>
        </div>
    )
}
