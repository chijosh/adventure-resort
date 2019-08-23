import React from "react";
import "./App.css";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <TransitionGroup component="div" className="App">
        <CSSTransition

        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login/" component={Rooms} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route component={Error} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
