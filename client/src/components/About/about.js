import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <div>
      <Jumbotron fluid className="pricing">
        <Container>
          <h1 className="title">About</h1>
        </Container>
      </Jumbotron>
      <h5 className="bodyText">
        A Movie App, which Allows Users to view best rated movies and add new
        movies.
        <br />
        <br />
      </h5>
    </div>
  );
};


export default About;
