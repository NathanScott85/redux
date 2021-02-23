import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { decrement, increment, reset } from './counterSlice';
import '../App.css';

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch: AppDispatch = useDispatch(); // correct implementation of this? is there a need for an individual counter dispatch?
    const mapDispatchToProps = (dispatch: any) => {
        return {
          // dispatching plain actions
          increment: () => dispatch({ type: 'INCREMENT' }),
          decrement: () => dispatch({ type: 'DECREMENT' }),
          reset: () => dispatch({ type: 'RESET' })
        }
      }
    return (
        <div className="counter-container">
            <div className="counter">
                <button 
                aria-label="Increment value by 1"
                onClick={()=> mapDispatchToProps(dispatch(increment()))}
                >Increment</button>
                <span>{count}</span>
                <button 
                aria-label="Decrement value by 1"
                onClick={()=> dispatch(decrement())}
                >Decrement</button>
                  <button 
                aria-label="reset value to 0"
                onClick={()=> mapDispatchToProps(dispatch(reset()))}
                >reset</button>
            </div>
        </div>
    )
}
