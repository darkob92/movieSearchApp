import React from 'react';
import '../css/search.css';

const Search = (props) => {
  return(
    <div className="search-container" >
      <form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
          type="text"
          placeholder="Enter movie name"
        />
      </form>
    </div>
  );
}

export default Search;