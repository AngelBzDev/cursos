import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

   const {counter, increment} = useCounter(1);
   const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
   const {data, loading} = useFetch(url);
   const {author, quote} = !!data && data[0];//null | !null = true | !!null = false


   return (
      <div className="mt-3">
         <h1 className="text-white">Breaking Bad</h1>
         <hr />
         {
            loading 
               ? 
                  (
                     <div className="alert alert-warning">
                           Loading...
                     </div>
                  )
               : 
                  (
                     <figure className="mt-3">
                        <blockquote className="blockquote">
                           <p className="text-white">{quote}</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                           <cite title="Source Title" className="text-light">{author}</cite>
                        </figcaption>
                     </figure>
                  )
         }

         <button 
            className="btn btn-info" 
            onClick={increment}
         >
            Next quote
         </button>

      </div>
   )
}
