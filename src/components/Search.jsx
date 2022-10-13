import React, { useEffect, useState } from 'react';

function Search() {

  return <div>
    <input 
      type='text' 
      placeholder='Pesquisar' 
      className='input'
    />
    <button className='submit-lente' type="submit">
        <i className='fa fa-search'></i>
    </button>
  </div>

}

export default Search