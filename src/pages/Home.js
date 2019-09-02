import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
// import Header from "../components/Header";
import { Link } from "react-router-dom";
import Services from "../components/Services";
// import Navbar from "../components/Navbar";
import FeaturedRooms from "../components/FeaturedRooms/FeaturedRooms";


export default function Home() {
  return (
    <div className="page">
      <Hero hero="defaultHero">
        <Banner
          title="Best Resort Services"
          subtitle="deluxe rooms starting at $500"
        >
          <Link to="/rooms" className="main-btn slide-btn">
            Book Now
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </div>
  );
}
