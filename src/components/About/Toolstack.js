import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiLinux,
  SiGrafana,
  SiPrometheus,
  SiKibana,
  SiSplunk,
  SiGithub,
  SiBitbucket,
  SiArgocd,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKibana />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSplunk />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
    </Row>
  );
}

export default Toolstack;
