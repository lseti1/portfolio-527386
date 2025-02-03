import React, { useState } from "react";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isContactInfo, setContactInfo] = useState(true);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleContactInfo = () => {
    setContactInfo((prevState) => !prevState);
  };


  // To Adjust Content When Navigation Bar is Used
  const updateContent = () => {
    switch (currentPage) {
      case "home":
        return <p>"I'm a 3rd year Computer Science student majoring in Software Development, studying online at Griffith University. I am currently looking
        for Internships and would greatly appreciate any considerations to take me in as a team member. Please feel free to navigate around my digital portfolio
        to see the projects I've worked on, along with my personal contact information/social networks.</p>;
      case "more":
        return <p>More About Me!</p>;
      case "projects":
        return <p>The first project I have prepared is a Yearly Planner, and the second is a Holiday Activity Searcher. Click one of the two icons below to view them:<br />
          <div className ="projectOneIcon">
            <a href="https://planner773629-tau-three.vercel.app/" target="_blank" rel="noopener noreferrer">Project 1</a>
          </div>
          <div className ="projectTwoIcon">
            <a href="https://holidaysearcher198302.vercel.app/" target="_blank" rel="noopener noreferrer">Project 2</a>
          </div>
          </p>;
      case "resume":
        return <p> Here is a link to my virtual Resume: 
          <div className ="resumeIcon">Resume</div>
        </p>;
      default:
        return <p>No page found!</p>;
    }
  }

  // To Adjust Titles Accordingly to the selected page
  const updateTitle = () => {
    switch (currentPage) {
      case "home":
        return <h1>Hi, my name is Lucas Setiady</h1>;
      case "more":
        return <h1>More About Myself</h1>;
      case "projects":
        return <h1>My Personal Projects </h1>;
      case "resume":
        return <h1>My Resume</h1>;
      default:
        return <h1>No Page Found!</h1>;
    }
  }

  // To allow the pop up to change
  const updateContactInfo = () => {
    if (isContactInfo) {
      return <p>Contact Info</p>;
    }
    else
      return <p>Phone Number: 0439629899<br />Email: luca.setia@gmail.com</p>
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
      <div className={isContactInfo ? "contactInfo" : "openContactInfo"} hover-text="Click to Minimise" onClick={handleContactInfo}>{updateContactInfo()}</div>
      <div className="logo"></div>
      <div className="linkedIn"><a href="https://www.linkedin.com/in/lucassetiady" target="_blank" rel="noopener noreferrer"></a></div>
      <div className="GitHub"><a href="https://github.com/lseti1" target="_blank" rel="noopener noreferrer"></a></div>
    </div>
  );
}

// 
// 

export default App;
