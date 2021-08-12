import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

   const [formState, setFormState] = useState({
      name: '',
      email: ''
   })

   const {name, email} = formState;

   useEffect(() => {
      //console.log('Chavales')
   }, [formState])

   const handleInputChange = ({target}) => {
      setFormState({
         ...formState,
         [target.name]: target.value
      })
   }

   return (
      <div>
         <h1>useEffect</h1>
         <hr /> 
         <div className="mb-3">
            <label className="form-label">Name:</label>
            <input 
               type="text" 
               name="name" 
               className="form-control" 
               placeholder="Your name" 
               autoComplete="off"
               onChange={ handleInputChange }/>
         </div>
         <div className="mb-3">
            <label className="form-label">Email:</label>
            <input 
               type="email" 
               name="email" 
               className="form-control" 
               placeholder="name@example.com"
               autoComplete="off"
               onChange={ handleInputChange }/>
         </div>

         {name === 'Angelo' && <Message />}
      </div>
   )
}
