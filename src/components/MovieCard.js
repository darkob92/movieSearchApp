import React, { Component } from 'react';
import '../css/movieCard.css';

class MovieCard extends Component {
  render() {
    return (
      <div className="card">
        <img
          src="https://via.placeholder.com/150C/FF00FF"
          alt="placeholder"
        />
        <h3>{this.props.movie.title}</h3>
        <p>just some random text</p>
      </div>  
    );
  }
}

export default MovieCard;