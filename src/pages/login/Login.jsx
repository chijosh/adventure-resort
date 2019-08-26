import React from "react";
import Hero from "../../components/Hero";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaTwitterSquare,
  FaUserAlt,
  FaKey
} from "react-icons/fa";

import "./login-style.css";
// import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="page">
      <Hero hero="loginHero">
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3>Sign In</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span>
                    <FaFacebookSquare />
                  </span>
                  <span>
                    <FaGooglePlusSquare />
                  </span>
                  <span>
                    <FaTwitterSquare />
                  </span>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FaUserAlt />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="username"
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FaKey />
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div className="row align-items-center remember">
                    <input type="checkbox" />
                    <label>Remember Me</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn float-right login_btn"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?
                  <Link to="/register">
                    <label> Sign Up </label>
                  </Link>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="/">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>
    </div>
  );
}
