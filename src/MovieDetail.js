import React, { Component } from 'react'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=8690f370c8f6e1a60ea70be93de20895&language=en-US`)
      const movie = await res.json()
      this.setState({
        movie
      })
    } catch (e) { 
      console.log(e)
    }
  }

  render() {  
    const { movie } = this.state
    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title}/>
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
        <h1>{movie.title }</h1>
        <p>{movie.release_date }</p>
        <p>{movie.overview }</p>
      </div>
    )
  }
}

export default MovieDetail
