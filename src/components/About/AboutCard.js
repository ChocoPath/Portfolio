import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Quaye Worsley </span>
            from <span className="purple"> Accra, Ghana.</span>
            <br />
            I am currently a DevOps Engineer with extensive experience in cloud infrastructure and automation.
            <br />
            I have completed BSc Computer Science Degree at Ghana Institute of Management and Public Administration (GIMPA).
            <br />
            <br />
            Apart from DevOps work, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Speaking at Tech Conferences
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Volunteering at Tech Events
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Automate everything and build systems that scale!"{" "}
          </p>
          <footer className="blockquote-footer">Quaye</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
