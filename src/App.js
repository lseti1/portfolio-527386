import React, { useState } from "react";
import './App.css';

function App() {
  const designPages = ["Web Design", "Photoshop Design"];

  const [currentPage, setCurrentPage] = useState("home");
  const [currentDesignPage, setCurrentDesignPage] = useState(designPages[0]);

  const handlePageChange = (page) => {
    setCurrentPage(page);

    if (page === "Web Design") {
      setCurrentDesignPage("Web Design");
    }
  };

  const handleArrowClick = (direction) => {
    const currentIndex = designPages.indexOf(currentDesignPage);
    let newIndex;

    if (direction === "left") {
      newIndex = (currentIndex - 1 + designPages.length) % designPages.length;
    } else if (direction === "right") {
      newIndex = (currentIndex + 1) % designPages.length;
    }

    setCurrentDesignPage(designPages[newIndex]);
    handlePageChange(designPages[newIndex]);
  }

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
            <p>(Last updated on the 12th March)</p>
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
          Other Skills:
          <ul>
            <li>Photoshop</li>
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
              <p>Life Planner is an interactive one-page Planning Website to store plans & see upcoming plans (Built in React)</p>
            </div>

            <div className="individualAppContainers">
              <a href="https://holidaysearcher198302.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className ="individualAppLinkImage planFinder">
                      <p className="imageTextOverlay">Plan Finder</p>
                  </button>
              </a>
              <p>Plan Finder is a website that utilises Wikipedia's free API to quickly show information about things to do while on holidays (Built in React) </p>
            </div>

            <div className="individualAppContainers">
              <a href="https://drive.google.com/file/d/1T2SmYEaAI4DeYY82r85d8H4FaafUAUr6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className ="individualAppLinkImage brainBoost">
                  <p className="imageTextOverlay">Brain Boost</p>
                </button>
              </a>
              <p>Brain Boost is a simple mobile app that uses various games to keep the brain active & improve overall function (Built in XCode with Swift)</p>
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

      case "Photoshop Design":
        return <div  className="updateContentDiv">
          <div className="imageCarousel">

            <div className ="individualAppContainers">
              <a href="https://drive.google.com/file/d/1NmnxRHusrDO2pTVMdH5tQUefhb_rZb39/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className ="individualAppLinkImage CMC">
                  <p className="imageTextOverlay">49ers Graphic</p>
                </button>
              </a>
              <p>This graphic is of 49ers Running Back, Christian McCaffrey (Made with Photopea, a Photoshop alternative)</p>
            </div>

            <div className ="individualAppContainers">
              <a href="https://drive.google.com/file/d/1h3WnoFQTOdoTyfF3HU8OqpgL4J3kk6vY/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className ="individualAppLinkImage Steph">
                  <p className="imageTextOverlay">GSW Graphic</p>
                </button>
              </a>
              <p>This is a graphic made for Golden State Warriors Point Guard, Stephen Curry (Made with Photopea, a Photoshop alternative)</p>
            </div>

          </div>
          <p className = "projectDisclaimer">Please Note: These were made using a Free Version of Photopea</p>
        </div>;
      default:
        return <p>No page found!</p>;
    }
  }

  // To Adjust Titles Accordingly to the selected page
  const updateTitle = () => {
    switch (currentPage) {
      case "home":
        return <h1>About Myself</h1>;
      case "resume":
        return <h1>My Resume</h1>;
      case "experience":
        return <h1>My Coding Experience</h1>;
      case "Web Apps":
        return <h1>Web & Mobile Apps</h1>;
      case "Web Design":
        return <div class="designsPageTitle"> 
          <button class="designsPageButton LeftButton" onClick={() => handleArrowClick("left")}>&lt;</button>
          {updateDesignPageTitle()}
          <button class="designsPageButton RightButton" onClick={() => handleArrowClick("right")}>&gt;</button>
        </div>;     
      case "Photoshop Design":
        return <div class="designsPageTitle"> 
          <button class="designsPageButton LeftButton" onClick={() => handleArrowClick("left")}>&lt;</button>
          {updateDesignPageTitle()}
          <button class="designsPageButton RightButton" onClick={() => handleArrowClick("right")}>&gt;</button>
        </div>;  
      default:
        return <h1>No Page Found!</h1>;
    }
  }

  const updateDesignPageTitle = () => {
    switch(currentDesignPage) {
      case "Web Design":
        return <h1>Web Designs</h1>;
      case "Photoshop Design":
        return <h1>Photoshop Designs</h1>
      default: 
        return <h1>Web Designs</h1>;
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
        <div className={(currentPage === "Web Design") | (currentPage === "Photoshop Design") ? "active" : "navigationItem"} onClick={() => handlePageChange("Web Design")}>Designs</div>
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