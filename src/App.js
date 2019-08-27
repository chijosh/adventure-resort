import React from "react";
import "./App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Loader from '../src/components/loader/loader';

import { Route, Switch, withRouter } from "react-router-dom";

import "./pageTransitions/slideTransition.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevDepth: this.getPathDepth(this.props.location),
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000);
  }
  componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) });
  }

  getPathDepth(location) {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter(n => n !== "");
    return pathArr.length;
  }
  render() {
    const { location } = this.props;

    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = {
      enter: 800,
      exit: 400
    };
    return (
      <div>
        <Navbar />

        <TransitionGroup component="div" className="App">
          <CSSTransition
            key={currentKey}
            timeout={timeout}
            classNames="pageSlider"
            mountOnEnter={false}
            unmountOnExit={true}
          >
            <div
              className={
                this.getPathDepth(location) - this.state.prevDepth >= 0
                  ? "left"
                  : "right"
              }
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/rooms/" render={() => (
                  this.state.loading ?
                    <Loader /> : <Rooms />)} />
                <Route exact path="/register/" render={() => (
                  this.state.loading ?
                    <Loader /> : <Register />)} />
                <Route exact path="/login/" render={() => (
                  this.state.loading ?
                    <Loader /> : <Login />)} />
                <Route exact path="/rooms/:slug" component={SingleRoom} />
                <Route component={Error} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(App);
