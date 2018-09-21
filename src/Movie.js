import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'

const Movie = ({ movie }) => 
  <div className="margin-bottom-medium">
    <h3 className="margin-bottom-small">{movie.title}</h3>
    <Link to="/test">
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
    </Link>
  </div>
  
export default Movie

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired,
  desc: PropTypes.string
}

// static defaultProps = {
//   // desc: 'not available'
// };