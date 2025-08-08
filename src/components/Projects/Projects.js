import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Log Monitoring Project"
              description="A complete log monitoring and observability stack using Grafana, Loki, Prometheus, and Fluent Bit, all containerized with Docker Compose. Provides centralized logging and visualization for microservices infrastructure."
              ghLink="https://github.com/ChocoPath/log-monitoring-stack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Microservice Deployment with k3d"
              description="Automate deployment pipelines with Kubernetes and ArgoCD. Written endpoints with FastAPI to check status of microservices and deploy microservices using k8s manifest files. Demonstrates GitOps practices."
              ghLink="https://github.com/ChocoPath/Fido/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="DigitalOcean Kubernetes Challenge"
              description="Automate deployment pipelines with Kubernetes and ArgoCD. Install and create CI pipeline using Tekton. Demonstrates cloud-native CI/CD practices on DigitalOcean Kubernetes."
              ghLink="https://github.com/ChocoPath/DigOcean"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Navigation Assistant For the Visually Impaired"
              description="Leverages Artificial Intelligence to identify objects. With the help of Text to Speech and Speech to Text helps the visually impaired navigate to an object. Integrated with Raspberry Pi for AI-based object tracking and speech capabilities."
              ghLink="https://github.com/ChocoPath/Navigation-Assistant-for-visually-impaired"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
