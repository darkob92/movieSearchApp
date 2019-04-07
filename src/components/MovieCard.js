import React, { Component } from 'react';
import '../css/movieCard.css';

class MovieCard extends Component {
  render() {
    const { poster, title, overview} = this.props;
    return (
      <div className="card">
        <img src={poster} alt="placeholder" />
        <div className="text-box">
          <h3>{title}</h3>
          <p>{overview}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;