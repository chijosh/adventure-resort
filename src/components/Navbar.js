import React, { Component } from "react";
import Logo from "../images/logo.svg";
// import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div className="header__content">
        <nav className="header__nav-wrap">
          <h2 className="header__nav-heading h6">Site Navigation</h2>

          <Link to="/">
            <img src={Logo} alt="Beach Resort" />
          </Link>

          <ul className="header__nav">
            <li className="current"><a href="/" title="">Home</a></li>
            <li className="has-children">
              <a href="#0" title="">Rooms</a>
              <ul className="sub-menu">
                <li><a href="/category">Lifestyle</a></li>
                <li><a href="/category">Health</a></li>
                <li><a href="/category">Family</a></li>
                <li><a href="/category">Management</a></li>
                <li><a href="/category">Travel</a></li>
                <li><a href="/category">Work</a></li>
              </ul>
            </li>

            <li><a href="/register" title="">Sign Up</a></li>
            <li><a href="/login" title="">Login</a></li>
          </ul>

          <a href="#0" title="Close Menu" className="header__overlay-close close-mobile-menu">Close</a>
        </nav>
      </div>
    );
  }
}
