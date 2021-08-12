import React, { useState } from 'react';
import {useCounter} from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

   const {counter, increment} = useCounter();
   const [show, setShow] = useState(true);

   return (
      <div>
         <h1 className="text-white mt-4">Memorize</h1>
         <h3 className="text-white">Counter: <Small value={counter}/> </h3>
         <button 
            className="btn btn-warning"
            onClick={increment}
         >
            +1
         </button>

         <button 
            className="btn btn-info ms-2"
            onClick={function(){
               setShow(!show)
            }}
         >
            Show/Hidden {JSON.stringify(show)}
         </button>

      </div>
   )
}
