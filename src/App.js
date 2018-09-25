import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'
import './App.css'

import MoviesList from './MoviesList'
import MovieDetail from './MovieDetail'

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/" className="noLink">
          <h1 className="c-header__title">
            <code>lumdbmovies</code>
          </h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList}/>
        <Route path="/:id" component={MovieDetail}/>
      </Switch>
    </div>
  </Router>
)

export default App

