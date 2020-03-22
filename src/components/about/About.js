import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section className="about dd-sec bg--light">
      <div className="container">
        <h1 className="dd-sec__title">About</h1>
        <div className="row">
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
      </div>
    </section>
  );
};

export default About;
