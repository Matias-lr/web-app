import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './screens/home'
import User from './screens/usuario'
import Departamento from './screens/Departamento'
import Arriendo from './screens/Arriendo'

export default function Screens() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/user" exact>
                <User />
            </Route>
            <Route path="/edificio/:id">
                <Departamento />
            </Route>
            <Route path="/arriendo/:id">
                <Arriendo />
            </Route>
        </Switch>
    );
  }