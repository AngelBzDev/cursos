import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

   const [values, handleInputChange] = useForm({
      name: '',
      email: '',
      password: ''
   });

   const {name, email, password} = values;

   useEffect(() => {
      console.log('Otro name');
   }, [name])

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(values)
   }

   return (
      <form onSubmit={handleSubmit}>
         <h1>FormWithCustomHook</h1>
         <hr /> 
         <div className="mb-3">
            <label className="form-label">Name:</label>
            <input 
               type="text" 
               name="name" 
               className="form-control" 
               placeholder="Your name" 
               autoComplete="off"
               value={name}
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
               value={email}
               onChange={ handleInputChange }/>
         </div>
         <div className="mb-3">
            <label className="form-label">Password:</label>
            <input 
               type="password" 
               name="password" 
               className="form-control" 
               placeholder="Your password"
               autoComplete="off"
               value={password}
               onChange={ handleInputChange }/>
         </div>
         <div className="mb-6">
            <input type="submit" value="Enviar" className="btn btn-primary"/>
         </div>
      </form>
   )
}
