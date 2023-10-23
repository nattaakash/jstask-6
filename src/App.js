import React from "react";

const App = () => {
  const portfolioData = {
    name: "NATTA AKASH",
    reg: "21BCE9649",
    place: "Andhra Pradesh, India",
    skills: [
      "Artificial Intelligence",
      "App Development",
      "Web Development",
      "Public Speaking",
      "Debate",
      "Event Management",
    ],
    projects: [
      {
        title: "-SAFEMORE | Plant Disease Detection",
        description:
          "With a commendable accuracy rate of approximately 96%, the project addresses the critical challenge of timely disease detection, enabling efficient disease management and yield optimization.",
      },
      {
        title: "-HIVEMIND | Surveillance Car System",
        description:
          "Combining Raspberry Pi with high-resolution cameras, real-time streaming capabilities, and sensor modules allows users to observe and navigate their surroundings in real-time with an accuracy of 98%",
      },
      {
        title: "-JAM DETECTOR | Robotic Earthquake Management System",
        description:
          "Utilising a Raspberry Pi, heat sensors, and the YOLO (You Only Look Once) algorithm, create an advanced robotic earthquake management system under the guidance of a Professor. By automating damage assessment and earthquake rescue efforts, this creative system seeks to improve disaster response.",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2>
            <u>REGISTRATION NUMBER:</u> {portfolioData.reg}
          </h2>
          <h2>
            <u>PLACE:</u> {portfolioData.place}
          </h2>
        </div>
        <div className="body">
          <div className="about">
            <h3>
              <u>ABOUT ME</u>
            </h3>
            <p>
              I'm a third-year student at Vellore Institute of Technology
              majoring in computer science. I have a solid background in
              software development and computer science as a BTech student.
              Artificial intelligence, web development, and application
              development are just a few of the tech-related topics that I find
              fascinating. Right now, I'm working as an intern in the software
              development industry, where I'm developing my talents and getting
              real-world experience. I'm enthusiastic about how technology is
              advancing and how it will continue to influence our future.
            </p>
          </div>
          <div className="skills">
            <h3>
              <u>SKILLS</u>
            </h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3>
              <u>PROJECTS</u>
            </h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
