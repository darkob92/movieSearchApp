import React from 'react';

const Search = () => {
  return(
    <div 
      style={{
        textAlign: 'center',
        marginTop: '2rem'
      }}>
      <input 
        type="text" 
        placeholder="Enter movie name" 
        style={{
          fontSize: 20,
          padding: '5px',
          border: '1px solid #FEFEFE',
          borderRadius: '5px',
          color: '#000'
        }}
        />
    </div>
  );
}

export default Search;