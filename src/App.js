import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Search from './components/Search';
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
        <Navbar />
        <Search 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          />
        {/* wrapper div around MovieCard component which will be replaced later */}
        <div
          style={{
            marginTop: "6rem",
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap"
          }}
        >
          {this.state.movies.map(movie => {
            return (
              <MovieCard
                title={movie.title}
                poster={movie.poster_path}
                key={movie.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
