import React from "react";
// import logo from "../images/Adventure-Island-01/Adventure-Island-01.svg";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content row">
        <div className="header__logo">
          <a className="logo" href="index.html">
            <img src={logo} alt="homepage" />{" "}
          </a>
        </div>

        <Navbar />
      </div>
    </header>
  );
}
