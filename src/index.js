import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import { RoomProvider } from './Context'

ReactDOM.render(
  <RoomProvider>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);
