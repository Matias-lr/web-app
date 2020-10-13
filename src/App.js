import React from 'react';
import {LoginPage} from './login'
import {Home} from './home'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <LoginPage/>
      </Route>
      <Route exact path="/home">
        <Home/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
