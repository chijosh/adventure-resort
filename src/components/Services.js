import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Quisque tempor, ligula pharetra luctus elementum, arcu nisl suscipit ante, pharetra commodo dui est et enim."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Quisque tempor, ligula pharetra luctus elementum, arcu nisl suscipit ante, pharetra commodo dui est et enim."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Quisque tempor, ligula pharetra luctus elementum, arcu nisl suscipit ante, pharetra commodo dui est et enim."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Quisque tempor, ligula pharetra luctus elementum, arcu nisl suscipit ante, pharetra commodo dui est et enim."
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((items, index) => {
            return (
              <article key={index} className="service">
                <span>{items.icon}</span>
                <h6>{items.title}</h6>
                <p>{items.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
