import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import quizzical from "../../Assets/Projects/quizzical.png";
import calculator from "../../Assets/Projects/calculator.png";
import tenzies from "../../Assets/Projects/tenzies.png";

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
              imgPath={quizzical}
              isBlog={false}
              title="Quizzical"
              description="Quizzical is an educational web app that makes learning fun. It lets users explore interactive quizzes on various topics, with the option to choose difficulty levels. I built Quizzical to promote continuous learning using modern web technologies. This project highlights my web development skills and my passion for creating engaging user experiences."
              ghLink="https://github.com/komalgill0310/quizzical_web_app"
              demoLink="https://quizzical03.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tenzies}
              isBlog={false}
              title="Tenzies"
              description="In my quest to master React, JavaScript, HTML, and CSS, I embarked on a thrilling journey: creating a responsive version of the beloved Tenzi game. Through this project, I honed my skills in React, leveraged useState and useEffect, and mastered the art of event handling. It was more than code; it was an interactive adventure in digital dice rolling."
              ghLink="https://github.com/komalgill0310/tenzies_game"
              demoLink="https://tenziesgame03.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator Web App"
              description="A user-friendly web-based calculator designed with a singular purpose: to simplify basic mathematical operations for users of all levels. This intuitive tool also offers memory functionality, ensuring you have a reliable mathematical companion whenever you need it."
              ghLink="https://github.com/komalgill0310/calculator-app-second-time-"
              demoLink="https://webcalculator03.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
