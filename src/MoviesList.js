import React, { Component } from 'react'
import Movie from './Movie'

class MoviesList extends Component {
  state = {
    movies: [],
    loading: false
  }

  
  componentWillMount() {
    // this.setState({
    //   loading: true
    // })
  }

  async componentDidMount() {
    // this.setState({
    //   loading: false
    // })
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=8690f370c8f6e1a60ea70be93de20895&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      const movies = await res.json()
      this.setState({
        movies: movies.results
      })
    } catch (e) { 
      console.log(e)
    }
  }

  render() {  
    return (
      <div className="c-movieList">
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    )
  }
}

export default MoviesList
