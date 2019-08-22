import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
// import Header from "../components/Header";
import { Link } from "react-router-dom";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="main-btn slide-btn">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
}
