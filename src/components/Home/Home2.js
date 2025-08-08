import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about DevOps and infrastructure automation, with extensive experience in cloud technologies… 🚀
              <br />
              <br />I am proficient in technologies like
              <i>
                <b className="purple"> Python, Java, Shell Scripting, and Linux. </b>
              </i>
              <br />
              <br />
              My field of interests are building scalable &nbsp;
              <i>
                <b className="purple">Cloud Infrastructure and CI/CD Pipelines </b> and
                also in areas related to{" "}
                <b className="purple">
                  Kubernetes and Microservices.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for automating deployments
              with <b className="purple">Docker, Kubernetes</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern DevOps Tools and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Terraform and Jenkins</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="avatar-container">
              <img src={myImg} className="img-fluid" alt="avatar" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ChocoPath"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/quayeworsley"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/worsley-quaye/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/quayeworsley"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
