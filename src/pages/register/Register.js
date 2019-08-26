import React from "react";
import Hero from "../../components/Hero";
// import Banner from "../../components/Banner";
import { Link } from "react-router-dom";
import "./register-style.css";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleInputChange = e => {
    this.setState({
      firstName: e.target.value,
      lastName: e.target.value,
      password: e.target.value
    });
  };
  render() {
    return (
      <div className="page">
        <Hero hero="signUpHero">
          <div className="container register">
            <div className="row">
              <div className="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                <h3>Welcome</h3>
                <p>
                  You are 30 seconds away booking unique places to stay and have
                  amazing experience!
                </p>
                <Link to="/login">
                  <input type="submit" name="" value="Login" />
                </Link>

                <br />
              </div>
              <div className="col-md-9 register-right">
                <ul
                  className="nav nav-tabs nav-justified"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Host
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Guest
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h3 className="register-heading">Apply as a Host</h3>
                    <div className="row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="firstName"
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password *"
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password *"
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <div className="maxl">
                            <label className="radio inline">
                              <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked
                              />
                              <span> Male </span>
                            </label>
                            <label className="radio inline">
                              <input
                                type="radio"
                                name="gender"
                                value="female"
                              />
                              <span>Female </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email *"
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            minlength="10"
                            maxlength="10"
                            name="txtEmpPhone"
                            className="form-control"
                            placeholder="Your Phone *"
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <select className="form-control">
                            <option className="hidden" selected disabled>
                              Select Security Question
                            </option>
                            <option>What is your Birthdate?</option>
                            <option>What is Your old Phone Number</option>
                            <option>What is your Pet Name?</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Answer *"
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <input
                          type="submit"
                          className="btnRegister"
                          value="Register"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <h3 className="register-heading">Apply as a Guest</h3>
                    <div className="row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name *"
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name *"
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email *"
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            maxlength="10"
                            minlength="10"
                            className="form-control"
                            placeholder="Phone *"
                            onChange={this.handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password *"
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password *"
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <select className="form-control">
                            <option className="hidden" selected disabled>
                              Please select your Sequrity Question
                            </option>
                            <option>What is your Birthdate?</option>
                            <option>What is Your old Phone Number</option>
                            <option>What is your Pet Name?</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="`Answer *"
                            onChange={this.handleInputChange}
                          />
                        </div>
                        <input
                          type="submit"
                          className="btnRegister"
                          value="Register"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Hero>
      </div>
    );
  }
}
