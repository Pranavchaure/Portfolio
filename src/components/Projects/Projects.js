import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/P1.png";
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
              imgPath={leaf}
              isBlog={false}
              title="Live Crypto Tracker"
              description="I created a real-time crypto tracker website using Tailwind CSS and React.js. It fetches data via APIs, providing real-time insights into cryptocurrency prices and centralizing the tracking of multiple cryptocurrencies across exchanges for user convenience."
              ghLink="https://github.com/Pranavchaure/Live-Crypto-Tracker.git"
              demoLink="https://livecryptotracker-cxtp8die2-pranav-chaures-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Travel Website"
              description="I developed a travel website's front-end using JavaScript, CSS, and HTML, featuring intuitive navigation menus for an enhanced user experience. The design is fully responsive, optimized for desktops, tablets, and mobile phones, ensuring accessibility across all platforms."
              ghLink="https://github.com/Pranavchaure/Travel-Website.git"
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
