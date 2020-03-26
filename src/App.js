import React, { Component } from 'react'
// import HelloWorld from './components/HelloWorld'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import BreakingBenjamin from './components/BreakingBenjamin'
import FrogLeapStudios from './components/FrogLeapStudios'
import Blink182 from './components/Blink182'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/breakingbenjamin">Breaking Benjamin</Link>
          </li>
          <li>
            <Link to="/frogleapstudios">Frog Leap Studios</Link>
          </li>
          <li>
            <Link to="/blink-182">Blink-182</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/breakingbenjamin" component={BreakingBenjamin} />
        <Route exact path="/frogleapstudios" component={FrogLeapStudios} />
        <Route exact path="/blink-182" component={Blink182} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
