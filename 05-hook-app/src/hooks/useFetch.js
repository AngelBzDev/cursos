import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
   
   const isMouted = useRef(true);

   const [state, setState] = useState({
      data: null, 
      loading: true,
      error: null
   })

   useEffect(() => {
      return () => {
         isMouted.current = false;
      }
   }, []);

   useEffect(() => {

      fetch(url)
         .then(response => response.json())
         .then(data => {            
            if(isMouted.current) {
               setState({ 
                  loading: false, 
                  error: null, 
                  data: data 
               });
            }
         });
         
   }, [url]);

   return state;

}
