import React, { useEffect, useState } from 'react'

export const Message = () => {

   const [coords, setCoords] = useState({x:0, y:0})
   const {x, y} = coords;

   const mostrarCoordenadas = (e) =>{
      const coors = {
         x: e.x,
         y: e.y
      }
      setCoords(coors);
   }

   useEffect(() => {
      
      window.addEventListener('mousemove', mostrarCoordenadas)
      
      return () => {
         window.removeEventListener('mousemove', mostrarCoordenadas)
      }
   }, [coords])

   return (
      <div>
         <h3>Te kiero nene</h3>
         <p>x: {x}, y: {y}</p>
      </div>
   )
}