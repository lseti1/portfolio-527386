import React, { useState } from "react";
import { Mail } from "lucide-react";
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
        return <div className="updateContentDiv">
        <p class="aboutMe"> Hi, I'm Lucas, a 3rd year Computer Science student majoring in Software Development, studying online at Griffith University. I am currently looking
        for Real-World Experience in the field of Web & Application Development and would greatly appreciate any considerations to take me in as one of your team members.</p>
        <div class="potraitContainer">
          <img class="potrait" src="PotraitMySelf.jpg" alt="myself"/>
        </div>
        <p class="aboutMe">Please feel free to navigate around my digital portfolio to see the Web Apps & Web Designs I've worked on, along with my personal contact information/social networks.
          </p>
        </div>;
      case "resume":
        return <div className="updateContentDiv">
        <div className="imageCarousel">
          
          <div className ="individualAppContainers">
            <a href="https://drive.google.com/file/d/1EVnFoxOuXq_0qvpaLY5eHc02KuJm6Rao/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className ="individualAppLinkImage resume">
                <p className="imageTextOverlay">Resume</p>
              </button>
            </a>
            <p>(Updated on the 12/03)</p>
          </div>

          <div className ="individualAppContainers">
            <a href="https://drive.google.com/file/d/1csel03zxJA76Y9ueQyO46-9wynmcfIGV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className ="individualAppLinkImage transcript">
                <p className="imageTextOverlay">Academic Transcript</p>
              </button>
            </a>
            <p>(Unofficial)</p>
          </div>

        </div>
        </div>;
      case "experience":
        return <div className="updateContentDiv">
        <div className = "experience">
          University Projects Include: 
          <ul>
            <li>AI Development</li><li>Client-Server Systems</li><li>OOP Encoder/Decoder </li>
          </ul>
          Languages/Tools/Frameworks:
          <ul>
            <li>Python</li><li>C/C++</li><li>Java</li>
            <li>JavaScript</li><li>Swift</li><li>PHP</li>
            <li>GitHub</li><li>VS Code</li><li>XCode</li>
            <li>Vercel</li><li>React</li><li>WordPress</li>
            <li>Elementor</li><li>HTML5</li><li>CSS3</li>
          </ul>
        </div>
        </div>;
      case "Web Apps":
        return <div className="updateContentDiv">
          <div className="imageCarousel">

            <div className="individualAppContainers">
              <a href="https://planner773629-tau-three.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className ="individualAppLinkImage lifePlanner">
                  <p className="imageTextOverlay">Life Planner</p>
                </button>
              </a>
              <p>Life Planner is an Interactive One-Page Planning Website To Store Plans & See Upcoming Plans (Built in React)</p>
            </div>

            <div className="individualAppContainers">
              <a href="https://holidaysearcher198302.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className ="individualAppLinkImage planFinder">
                      <p className="imageTextOverlay">Plan Finder</p>
                  </button>
              </a>
              <p>Plan Finder is a website that utilises Wikipedia's Free API to quickly show information about things to do while on holidays (Built in React) </p>
            </div>

            <div className="individualAppContainers">
              <a href="https://drive.google.com/file/d/1T2SmYEaAI4DeYY82r85d8H4FaafUAUr6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className ="individualAppLinkImage brainBoost">
                  <p className="imageTextOverlay">Brain Boost</p>
                </button>
              </a>
              <p>Brain Boost is a simple App that uses various games to keep the brain active & improve overall function (Built in XCode with Swift)</p>
            </div>
          </div>
          <p className = "projectDisclaimer">Please Note: Not All Features May Work</p>
          </div>;
      case "Web Design":
        return <div  className="updateContentDiv">
        <div className="imageCarousel">

          <div className ="individualAppContainers">
            <a href="https://lucas-websitedesign1.in/" target="_blank" rel="noopener noreferrer">
              <button className ="individualAppLinkImage tourism">
                <p className="imageTextOverlay">Tourism Site</p>
              </button>
            </a>
            <p>This is a website design of a Tourism Site for the city of London (Designed in WordPress with Elementor)</p>
          </div>

          <div className ="individualAppContainers">
            <a href="https://lucas.websitedesign2.in/" target="_blank" rel="noopener noreferrer">
              <button className ="individualAppLinkImage restaurant">
                <p className="imageTextOverlay">Restaurant</p>
              </button>
            </a>
            <p>This website style is for a Japanese Restaurant (Designed in WordPress with Elementor)</p>
          </div>

          <div className ="individualAppContainers">
            <a href="https://portfolio-design-478053.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className ="individualAppLinkImage portfolioDesign">
                <p className="imageTextOverlay">Portfolio</p>
              </button>
            </a>
            <p>This is a website design for a Photography Portfolio (Designed with HTML5/CSS3)</p>
          </div>

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
        return <h1>Web Designs</h1>;
      default:
        return <h1>No Page Found!</h1>;
    }
  }

  return (
    <div className="App">
      <div className="title">{updateTitle()}</div>
      <div className="mainContent">{updateContent()}
      </div>
      <div className="logo"></div>
      <div className="navigationBar">
        <div className={currentPage === "home" ? "active" : "navigationItem"} onClick={() => handlePageChange("home")}>Home</div>
        <div className={currentPage === "resume" ? "active" : "navigationItem"} onClick={() => handlePageChange("resume")}>Resume</div>
        <div className={currentPage === "experience" ? "active" : "navigationItem"} onClick={() => handlePageChange("experience")}>Experience</div>
        <div className={currentPage === "Web Apps" ? "active" : "navigationItem"} onClick={() => handlePageChange("Web Apps")}>Apps</div>
        <div className={currentPage === "Web Design" ? "active" : "navigationItem"} onClick={() => handlePageChange("Web Design")}>Designs</div>
      </div> 
      <div class="mailIconContainer">
        
      </div>
      <div className = "portfolioDisclaimer">Note: Portfolio is best viewed in Full Screen.</div>
      <div className="quickLinks">
        <a class="linkedIn" href="https://www.linkedin.com/in/lucassetiady" target="_blank" rel="noopener noreferrer"></a>
        <a class="GitHub" href="https://github.com/lseti1" target="_blank" rel="noopener noreferrer"></a>
        <a class="mailIcon" href="mailto:luca.setia@gmail.com"></a>
      </div>

    </div>
  );
}

export default App;