import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/containers/Header';
import Main from './components/containers/Main';
import MovieCard from './components/MovieCard';

class App extends Component {
  state = {
    movies: [],
    searchTerm: ''
  }


  //submit request handler for movies from "movieDB" API
  handleSubmit = (e) => {
    e.preventDefault();

    const apiKey = "818d6d814cdf31b86d056b3d64014141";
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${
          this.state.searchTerm
        }&api_key=${apiKey}`
      )
      .then(res => {
        const results = res.data.results;

        this.setState({
          movies: results
        });
        console.log(this.state.movies);
      })
      .catch(err => {
        console.log(err);
      });
  }

  //search input event handler
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <Header 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
        />
        <Main>
          {this.state.movies.map(movie => {
            return (
              <MovieCard
                title={movie.title}
                poster={movie.poster_path === null ? 'https://developersushant.files.wordpress.com/2015/02/no-image-available.png' : `http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                key={movie.id}
                overview={movie.overview.length === 0 ? 'No overview for this movie' : movie.overview }
              />
            );
          })}
        </Main>
      </div>
    );
  }
}

export default App;
