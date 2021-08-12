import React, { useMemo, useState } from 'react';
import {useCounter} from '../../hooks/useCounter';

export const MemoHook = () => {

   const {counter, increment} = useCounter(1000);
   const [show, setShow] = useState(true);

   const procesoPesado = (ite) => {
      for(let i = 0; i < ite; i++) {
         console.log('Perrako');
      }

      return `${ite} iteraciones realizadas`;
   }


   const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

   return (
      <div>
         <h1 className="text-white mt-4">MemoHook</h1>
         <h3 className="text-white">Counter: <small>{counter}</small> </h3>
         <p>{memoProcesoPesado}</p>
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
