import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

   const {state, increment, decrement, reset} = useCounter(100)

   return (
      <>
        <h1 className="mt-3">Counter with Hook {state}</h1> 
        <hr />
        <button className="btn btn-danger me-5" onClick={() => increment(10)}>+1</button>
        <button className="btn btn-info me-5" onClick={reset}>Reset</button>
        <button className="btn btn-success" onClick={() => decrement(10)}>-1</button>
      </>
   )
}
