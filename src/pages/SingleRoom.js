import React, { Component } from "react";
import defaultBcg from "../images/Adventure-Island-01/Adventure-Island-01.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyleHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>Room not found...</h3>
          <Link to="/rooms" className="btn-primary">
            Return to rooms
          </Link>
        </div>
      );
    }
    const {
      name
      // description,
      // capacity,
      // size,
      // price,
      // extras,
      // breakfast,
      // pets,
      // images
    } = room;

    return (
      <Hero hero="roomsHero">
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Return to rooms
          </Link>
        </Banner>
      </Hero>
    );
  }
}
