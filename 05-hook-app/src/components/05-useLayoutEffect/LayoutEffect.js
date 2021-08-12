import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

export const LayoutEffect = () => {

   const ref = useRef();

   const {counter, increment} = useCounter(1);
   const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
   const {data} = useFetch(url);
   const {quote} = !!data && data[0];//null | !null = true | !!null = false

   const [boxSizing, setBoxSizing] = useState({});

   useLayoutEffect(() => {
      setBoxSizing(ref.current.getBoundingClientRect())
   }, [quote]);


   return (
      <div className="mt-3">
         <h1 className="text-white">LayoutEffect</h1>
         <hr />
         
         <figure className="mt-3">
            <blockquote className="blockquote d-flex">
               <p 
                  className="text-white"
                  ref={ref}
               >
                  {quote}
               </p>
            </blockquote>
            {/* <figcaption className="blockquote-footer">
               <cite title="Source Title" className="text-light">{author}</cite>
            </figcaption> */}
         </figure>

         <button 
            className="btn btn-info" 
            onClick={increment}
         >
            Next quote
         </button>

         <p className="mt-3 text-white">{boxSizing.width}</p>

      </div>
   )
}
