import React, { useState } from "react";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  // To Adjust Content When Navigation Bar is Used
  const updateContent = () => {
    switch (currentPage) {
      case "home":
        return <div>I'm a 3rd year Computer Science student majoring in Software Development, studying online at Griffith University. I am currently looking
        for Real-World Experience in the field of Web & Application Development and would greatly appreciate any considerations to take me in as one of your team members. <br/><br/>
        Please feel free to navigate around my digital portfolio to see the Web Apps & Web Designs I've worked on, along with my personal contact information/social networks.
        </div>;
      case "resume":
        return <div> Link to digital Resume (also includes Academic Transcript): 
          <button className ="buttonLink">
            <a href="https://drive.google.com/file/d/1EVnFoxOuXq_0qvpaLY5eHc02KuJm6Rao/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          </button>
        </div>;
      case "experience":
        return <div className = "experience">
          University Projects Include: 
          <ul>
            <li>AI Development</li>
            <li>Client-Server Systems</li>
            <li>OOP Encoder/Decoder </li>
          </ul>
          Languages/Tools/Frameworks:
          <ul>
            <li>Python</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Swift</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>XCode</li>
            <li>Vercel</li>
            <li>React</li>
            <li>WordPress</li>
            <li>Elementor</li>
          </ul>
        </div>;
      case "Web Apps":
        return <div>The first app is a Yearly Planner, and the second is a Holiday Activity Searcher (Both made using React). The third is a video of an early build of a Mobile 
          Gaming App (Made using XCode/Swift)
            <div className ="buttonContainers"> 
              <button className ="buttonLink">
                <a href="https://planner773629-tau-three.vercel.app/" target="_blank" rel="noopener noreferrer">Web App 1</a>
              </button>
              <button className ="buttonLink">
                <a href="https://holidaysearcher198302.vercel.app/" target="_blank" rel="noopener noreferrer">Web App 2</a>
              </button>
              <button className ="buttonLink">
                <a href="https://drive.google.com/file/d/1T2SmYEaAI4DeYY82r85d8H4FaafUAUr6/view?usp=sharing" target="_blank" rel="noopener noreferrer">Mobile App</a>
              </button>
            </div>
            <p className = "projectDisclaimer">Please Note: Not All Features May Work</p>
          </div>;
      case "Web Design":
        return <div>The first design is for a Tourism Website, and the second is one for a Restaurant (Both made using Elementor/WordPress)
          <div className ="buttonContainers"> 
            <button className ="buttonLink">
              <a href="https://lucas-websitedesign1.in/" target="_blank" rel="noopener noreferrer">Design 1</a>
            </button>
            <button className ="buttonLink">
              <a href="https://lucas.websitedesign2.in/" target="_blank" rel="noopener noreferrer">Design 2</a>
            </button>
          </div>
          <p className = "projectDisclaimer">Please Note: Not All Features May Work.</p>
          </div>;
      default:
        return <p>No page found!</p>;
    }
  }

  // To Adjust Titles Accordingly to the selected page
  const updateTitle = () => {
    switch (currentPage) {
      case "home":
        return <h1>About Me</h1>;
      case "resume":
        return <h1>My Resume</h1>;
      case "experience":
        return <h1>My Coding Experience</h1>;
      case "Web Apps":
        return <h1>Web & Mobile Apps</h1>;
      case "Web Design":
        return <h1>Web Design</h1>;
      default:
        return <h1>No Page Found!</h1>;
    }
  }

  return (
    <div className="App">
      <div className="geometricBackground"></div>
      <div className="title">{updateTitle()}</div>
      <div className="mainContent">{updateContent()}
      </div>
      <div className="mainImage"></div>
      <div className="navigationBar">
        <div className={currentPage === "home" ? "active" : "navigationItem"} onClick={() => handlePageChange("home")}>Home</div>
        <div className={currentPage === "resume" ? "active" : "navigationItem"} onClick={() => handlePageChange("resume")}>Resume</div>
        <div className={currentPage === "experience" ? "active" : "navigationItem"} onClick={() => handlePageChange("experience")}>Experience</div>
        <div className={currentPage === "Web Apps" ? "active" : "navigationItem"} onClick={() => handlePageChange("Web Apps")}>Apps</div>
        <div className={currentPage === "Web Design" ? "active" : "navigationItem"} onClick={() => handlePageChange("Web Design")}>Web-Design</div>
      </div> 
      <div className="logo"></div>
      <div className = "portfolioDisclaimer">Note: Portfolio is best viewed in Full Screen.</div>
      <div className="linkedIn"><a href="https://www.linkedin.com/in/lucassetiady" target="_blank" rel="noopener noreferrer"></a></div>
      <div className="GitHub"><a href="https://github.com/lseti1" target="_blank" rel="noopener noreferrer"></a></div>
    </div>
  );
}

export default App;
