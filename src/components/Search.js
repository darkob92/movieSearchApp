import React from 'react';

const Search = (props) => {
  return(
    <div 
      style={{
        textAlign: 'center',
        marginTop: '2rem'
      }}>
      <form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
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
      </form>
    </div>
  );
}

export default Search;