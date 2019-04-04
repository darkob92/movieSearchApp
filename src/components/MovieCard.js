import React, { Component } from 'react';
import '../css/movieCard.css';

class MovieCard extends Component {
  render() {
    // const for fetching image url from "MovieDB" API
    const imgUrl = `http://image.tmdb.org/t/p/w185/${this.props.poster}`;
    return (
      <div className="card">
        <img src={imgUrl} alt="placeholder" />
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default MovieCard;