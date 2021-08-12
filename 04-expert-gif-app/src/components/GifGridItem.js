import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ( { title, url } ) => {

   return (
      <div className="card">
         <img src={ url } alt={ title }/>
         <p>{ title ? title : '????' }</p>
      </div>
   )
}

export default GifGridItem

GifGridItem.propTypes = {
   title: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired
}