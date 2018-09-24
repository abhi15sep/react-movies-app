import React, { Component } from 'react'
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
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Link to="/" className="noLink">
          <h1>
            <code>lumdb</code>
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

const Test = ({ match }) => (
  <h1>{match.params.id}</h1>
)

