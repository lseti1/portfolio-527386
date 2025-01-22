import React, { useState } from "react";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const updateContent = () => {
    switch (currentPage) {
      case "home":
        return <p>"I'm a 3rd year Computer Science student majoring in Software Development, studying online at Griffith University. I am currently looking
        for Internships and would greatly appreciate any considerations to take me in as a team member. Please feel free to navigate around my digital portfolio
        to see the projects I've worked on, along with my personal contact information/social networks.</p>;
      case "more":
        return <p>More About Me!</p>;
      case "projects":
        return <p>The two projects I have worked on are a yearly planner and a holiday activity searcher. Click one of the two icons below to open them:<br />
          <div className ="projectOneIcon">Project 1</div><div className ="projectTwoIcon">Project 2</div></p>;
      case "resume":
        return <p> Here is a link to my virtual Resume: 
          <div className ="resumeIcon">Resume</div>
        </p>;
      default:
        return <p>No page found!</p>;
    }
  }

  const updateTitle = () => {
    switch (currentPage) {
      case "home":
        return <h1>Hi, my name is Lucas Setiady</h1>;
      case "more":
        return <h1>More about myself</h1>;
      case "projects":
        return <h1>My personal projects </h1>;
      case "resume":
        return <h1>My Resume</h1>;
      default:
        return <h1>No page found!</h1>;
    }
  }

  return (
    <div className="App">
      <div className="geometricBackground"></div>
      <div className="greetingName">{updateTitle()}</div>
      <div className="aboutMe">{updateContent()}
      </div>
      <div className="myPhoto"></div>
      <div className="navigationBar">
        <div className={currentPage === "home" ? "active" : "navigationItem"} onClick={() => handlePageChange("home")}>Home</div>
        <div className={currentPage === "more" ? "active" : "navigationItem"} onClick={() => handlePageChange("more")}>More About Me</div>
        <div className={currentPage === "projects" ? "active" : "navigationItem"} onClick={() => handlePageChange("projects")}>Projects</div>
        <div className={currentPage === "resume" ? "active" : "navigationItem"} onClick={() => handlePageChange("resume")}>Resume</div>
      </div> 
      <div className="contactInfo">
        <p>Contact Info</p>
      </div>
      <div className="logo"></div>
      <div className="linkedIn"><a href="https://www.linkedin.com/in/lucassetiady" target="_blank" rel="noopener noreferrer"></a></div>
      <div className="GitHub"><a href="https://github.com/lseti1" target="_blank" rel="noopener noreferrer"></a></div>
    </div>
  );
}

export default App;
