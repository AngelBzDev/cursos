import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

   const [ counter, setCounter ] = useState(5);

   /* const increment = () => {
      setCounter( counter + 1);
   } */


   const increment = useCallback(() => {
      setCounter(c => c + 1);
   }, [ setCounter ]);

   return (
      <div>
         <h1 className="text-white">Use Callback Hook: {counter}</h1>
         <ShowIncrement increment={increment} />
      </div>
   );
};
