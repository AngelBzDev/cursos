import React, { useRef } from 'react'

export const FocusScreen = () => {

   const ref = useRef()

   const handleClick = () => {
      ref.current.select();
   }

   return (
      <div>
         <h1 className="text-white">Focus Screen</h1>
         <input className="form-control mt-4 bg-transparent text-white" placeholder="Name" ref={ref}/>
         <button className="btn btn-info mt-4" onClick={handleClick}>Focus</button>
      </div>
   )
}
