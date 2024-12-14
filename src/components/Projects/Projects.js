import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/P1.png";
import istore from "../../Assets/Projects/iStore.png";
import emotion from "../../Assets/Projects/P2.png";
import editor from "../../Assets/Projects/P3.png";

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
              imgPath={istore}
              isBlog={false}
              title="3D iStore"
              description="Designed and developed a 3D iStore website with a modern UI/UX, featuring interactive 3D elements using Three.js and smooth animations via GSAP.
              Built with React and Tailwind CSS for responsiveness and performance. 
              Optimized for seamless user experience and cross-browser compatibility, showcasing advanced frontend development skills."
              ghLink="https://github.com/Pranavchaure/iStore"
              demoLink="https://istore-pranav.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Live Crypto Tracker"
              description="created a real-time crypto tracker website using Tailwind CSS and React.js. It fetches data via APIs, providing real-time insights into cryptocurrency prices and centralizing the tracking of multiple cryptocurrencies across exchanges for user convenience."
              ghLink="https://github.com/Pranavchaure/Live-Crypto-Tracker.git"
              demoLink="https://livecryptodashboard.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Live Chat App"
              description="I developed a real-time chat app using React, Vite, and Node.js, incorporating JavaScript, HTML, and CSS for frontend design. I implemented RESTful API endpoints for seamless database integration and used Postman for thorough API testing. The app is optimized for responsive design, ensuring a smooth user experience across all devices."
              ghLink="https://github.com/Pranavchaure/Live-Chat-App.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
