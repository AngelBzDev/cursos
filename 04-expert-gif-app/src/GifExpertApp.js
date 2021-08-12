import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []}) => {
   
   //const [categories, setCategories] = useState( ['Pokemon'] );
   const [categories, setCategories] = useState( defaultCategories );
   
   /* const handleAdd = () => {
      setCategories( [...categories, 'El chavo'] ); 
   } */

   return (
      <>
         <h2 className="titulo">Gif App</h2>
         <AddCategory setCategories={ setCategories } />
         <ul>
            { categories.map(catg => 
                  <GifGrid 
                     category={ catg }
                     key={ catg }
                  />
               )
            }
         </ul>
      </>
   );
}

export default GifExpertApp;