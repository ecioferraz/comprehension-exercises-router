import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path="/about" component={ About } />
          <Route path="/users" >
            <Users greetingsMessage={ "Good morning" } />
          </Route>
          <Route exact path="/" component={ Home } />
      </BrowserRouter>
    );
  }
}

export default App;
