import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { StateContext } from './providers/StateProvider'
import { Link } from "react-router-dom";
import Page2 from "./components/page2"

const App = () => {
    const { name, nameHandler } = useContext(StateContext)
    return (
        <div>
      <Switch>
        {/* <Route exact path="/" /> */}
        <Route exact path="/page-2" component={Page2}></Route>
      </Switch>

        </div>
)}

export default App;