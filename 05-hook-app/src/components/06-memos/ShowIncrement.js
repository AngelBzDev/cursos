import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
   
   console.log('Hay xc')
   
   return (
      <button className="btn btn-danger" onClick={() => {increment()}}>
         Increment
      </button>
   )
})
