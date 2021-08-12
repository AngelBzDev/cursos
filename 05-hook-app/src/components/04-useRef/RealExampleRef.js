import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {
   
   const [show, setShow] = useState(false);
   
   return (
      <div>
         <h1 className="text-white">RealExampleRef</h1>
         {show && <MultipleCustomHooks />}
         <button 
            className="btn btn-warning mt-4"
            onClick={ () => setShow(!show) }
         >
            Show/Hidden
         </button>
      </div>
   )
}
