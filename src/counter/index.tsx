import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { decrement, increment } from './counterSlice';

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button 
                aria-label="Increment value by 1"
                onClick={()=> dispatch(increment())}
                >Increment</button>
                <span>{count}</span>
                <button 
                aria-label="Decrement value by 1"
                onClick={()=> dispatch(decrement())}
                >Decrement</button>
            </div>
        </div>
    )
}
