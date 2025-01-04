import React from "react";
import "./About.css";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about} alt="Image" className="about-img" />
      </div>

      <div className="about-right">
        <h3>Who We Are ?</h3>
        <p>
          At ApnaSwad, we believe in the comfort of home-cooked meals and the
          power of community. Our platform is designed to bridge the gap between
          students and professionals looking for affordable, healthy meals and
          housewives seeking opportunities to showcase their culinary skills and
          earn an income. </p> <p>We aim to create a system where users can discover
          delicious, home-cooked meals made with love by verified housewives
          within their local area. By connecting these two groups, we not only
          solve the challenge of meal accessibility but also empower housewives
          to contribute to their families' financial well-being while staying at
          home.</p><p> Through innovative technology and a focus on quality, trust, and
          sustainability, ApnaSwad fosters a community-driven approach to food
          delivery.
        </p>
      </div>
    </div>
  );
};

export default About;
