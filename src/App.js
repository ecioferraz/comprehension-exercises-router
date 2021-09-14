import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/strict-access"
            render={ () =>
              <StrictAccess user={ {
                username: "joao",
                password: "1234",
                }
              }/>
            }
          /> 
          <Route
            path="/users/:id"
            render={ (props) => <Users { ...props } greetingsMessage={ "Good morning" } /> }
          />
          <Route path="/about" component={ About } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
