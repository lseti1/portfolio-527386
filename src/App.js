import React, { useState, useEffect, useRef } from "react";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CSSTransition } from 'react-transition-group';


function App() {
	// This is for the contact info
	const [isInfoPopupVisible, setIsInfoPopupVisible] = useState(false);
	const nodeRef = useRef(null);
	const togglePopup = () => {
		setIsInfoPopupVisible(prev => !prev);
		console.log("Info Pop Up: ", isInfoPopupVisible);
	}

	// This is for animation effects (fade ins)
	useEffect(() => {
		AOS.init({duration: 1800, once: true});
	}, []);

	// This is for moving to different sections of the screen with a slight offset when selecting them in the NavBar
	const jumpTo = (id) => {
		const element = document.getElementById(id);
		if (element) {
			const offset = element.getBoundingClientRect().top + window.scrollY - 70;
			window.scrollTo({ top: offset, behavior: 'smooth' });
		}
	};

	const WebApps = ['InfoMovie', 'PlanFinder', 'LifePlanner', 'Skycast', 'JobRecorderNet'];
	const [currentIndex, setCurrentIndex] = useState(0);
	const increment = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === WebApps.length - 1 ? 0 : prevIndex + 1
		);
	};
	const decrement = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? WebApps.length - 1 : prevIndex - 1
		);
	};

	const WebAppRender = () => {
		switch (WebApps[currentIndex]) {
			case 'InfoMovie':
				return <div className="ApplicationsContent">
					<div className="ApplicationImage" >
						<button onClick={decrement} className="ApplicationsCarouselButton">&lt;</button>
						<div className="ImageWrapper">
							<a href="https://info-movie-513258.vercel.app/" target="_blank" rel="noopener noreferrer" title="Info Movie App">
								<img className="SourceImage" src="/infoMovie.png" alt="InfoMovieApp"/>
							</a>
							<a className="GitHubLink" href="https://github.com/lseti1/InfoMovie-513258" target="_blank" rel="noopener noreferrer"  title="Plan Finder Repository">
								<img className="GitHubImage" src="/GitHub Logo.png" alt="GitHubLink"/>
							</a>
						</div>
						<button onClick={increment} className="ApplicationsCarouselButton">&gt;</button>
					</div >
					<div className="ApplicationDescription" data-aos="fade-up" data-aos-offset="600">
						<h1 className="ApplicationTitle">Info Movie</h1>
						<p>This is a web app made in Angular using tmdb's free API to display key metrics about trending, upcoming and top rated films. It also includes functionality for users to search
							for a specific movie they're after and find out information about it .<br  /><b>Made with Tailwind CSS & DaisyUI in Angular.</b></p>
					</div>
				</div >;
			case 'PlanFinder':
				return <div className="ApplicationsContent">
					<div className="ApplicationImage" >
						<button onClick={decrement} className="ApplicationsCarouselButton">&lt;</button>
						<div className="ImageWrapper">
							<a href="https://holidaysearcher198302.vercel.app/" target="_blank" rel="noopener noreferrer" title="Plan Finder App">
								<img className="SourceImage" src="/planFinder.png" alt="PlanFinderApp"/>
							</a>
							<a className="GitHubLink" href="https://github.com/lseti1/planFinder-198302" target="_blank" rel="noopener noreferrer"  title="Plan Finder Repository">
								<img className="GitHubImage" src="/GitHub Logo.png" alt="GitHubLink"/>
							</a>
						</div>
						<button onClick={increment} className="ApplicationsCarouselButton">&gt;</button>
					</div >
					<div className="ApplicationDescription" data-aos="fade-up" data-aos-offset="600">
						<h1 className="ApplicationTitle">Plan Finder</h1>
						<p>This is a website that utilises Wikipedia's free API to show things to do while on holidays with features such as adjustable searches, text generation/parsing, 
							& responsive design for multiple viewports.<br  /><b>Made with HTML, CSS & JavaScript in React.</b></p>
					</div>
				</div >;
			case 'LifePlanner':
				return <div className="ApplicationsContent">
					<div className="ApplicationImage" >
						<button onClick={decrement} className="ApplicationsCarouselButton">&lt;</button>
						<div className="ImageWrapper">
							<a href="https://planner773629-tau-three.vercel.app/" target="_blank" rel="noopener noreferrer" title="Planner App">
								<img className="SourceImage" src="/lifePlanner.png" alt="LifePlannerApp"/>
							</a>
							<a className="GitHubLink" href="https://github.com/lseti1/lifePlanner-773629" target="_blank" rel="noopener noreferrer" title="Planner Repository">
								<img className="GitHubImage" src="/GitHub Logo.png" alt="GitHubLink"/>
							</a>
						</div>
						<button onClick={increment} className="ApplicationsCarouselButton">&gt;</button>
					</div >
					<div className="ApplicationDescription" data-aos="fade-up" data-aos-offset="600">
						<h1 className="ApplicationTitle">Life Planner</h1>
						<p>This is an interactive one-page planning website to store & see upcoming plans with features such as quick add/remove plans, adjustable calendar, 
							search bar & responsive design for multiple viewports. <br  /><b>Made with HTML, CSS & JavaScript in React.</b></p>
					</div>
				</div >;
			case 'Skycast':
				return <div className="ApplicationsContent">
					<div className="ApplicationImage" >
						<button onClick={decrement} className="ApplicationsCarouselButton">&lt;</button>
						<div className="ImageWrapper">
							<a href="https://sky-cast-853920.vercel.app/" target="_blank" rel="noopener noreferrer" title="Weather App">
								<img className="SourceImage" src="/skyCast.png" alt="SkycastApp"/>
							</a>
							<a className="GitHubLink" href="https://github.com/lseti1/skyCast-853920" target="_blank" rel="noopener noreferrer" title="Weather App Repository">
								<img className="GitHubImage" src="/GitHub Logo.png" alt="GitHubLink"/>
							</a>
						</div>
						<button onClick={increment} className="ApplicationsCarouselButton">&gt;</button>
					</div >
					<div className="ApplicationDescription" data-aos="fade-up" data-aos-offset="600">
						<h1 className="ApplicationTitle">Skycast</h1>
						<p>This is a simple web app that displays weather information from the OpenWeather API with features such as extensive weather displays, 3-hourly intervals 
							for key weather metrics, forecast up to 5 days in advance & responsive design for multiple viewports. <br  /><b>Made with HTML, CSS & JavaScript in ReactVite.</b></p>
					</div>
				</div >;
			case 'JobRecorderNet':
				return <div className="ApplicationsContent">
					<div className="ApplicationImage" >
						<button onClick={decrement} className="ApplicationsCarouselButton">&lt;</button>
						<div className="ImageWrapper">
							<img className="SourceImage" src="/JobRecorderNet.png" alt="LifePlannerApp"/>
							<a className="GitHubLink" href="https://github.com/MatchaBreak/JobRecorderNet" target="_blank" rel="noopener noreferrer"  title="JobRecorderNet Repository">
								<img className="GitHubImage" src="/GitHub Logo.png" alt="GitHubLink"/>
							</a>
						</div>
						<button onClick={increment} className="ApplicationsCarouselButton">&gt;</button>
					</div >
					<div className="ApplicationDescription" data-aos="fade-up" data-aos-offset="600">
						<h1 className="ApplicationTitle">Job Recorder Net</h1>
						<p>Job Recorder Net is a shared project between myself & a fellow graduate of a port for an external clients quality assurance application (university-based project) which includes features such as
							role-based job access, evidence uploading, and job filtering/searching.<br  /><b>This port uses Tailwind CSS and Razor Pages in ASP.NET written with C#.</b> </p>
						<p style={{ fontSize : "1rem", padding : "0.5rem"}}>Note: Application is still in the process of being ported</p>
					</div>
				</div >;
			default:
				return <div>There was a problem displaying the web apps. Please refresh the tab.</div>
		}
	};

	return (
		<div className="App">
			<div id="Top"></div>
			<div className="NavBar">
				<div className="ContentWrapper NavBarContent">
					<img onClick={() => jumpTo('Top')} className="Logo" src="/logo.png" alt="Logo"/>
					<p onClick={() => jumpTo('AboutMe')} className="NavBarTitle">About</p>
					<p onClick={() => jumpTo('Applications')} className="NavBarTitle">Apps</p>
					<p onClick={() => jumpTo('Designs')} className="NavBarTitle">Designs</p>
					<p onClick={() => jumpTo('EducationExperience')} className="NavBarTitle">Education/Experience</p>
				</div>
			</div>
			<div id="AboutMe" className="AboutMe" >
				<div className="ContentWrapper AboutMeContent">
					<div className="AboutMeLeft" data-aos="fade-up">
						<div className="PortraitWrapper">
							<img className="Portrait" src="/PotraitMySelf.jpg" alt="PortraitOfSelf" title="Display Picture"/>
							<svg onClick={togglePopup} className="PortraitOverlay" style={{userSelect : 'none'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Contact Info" role="img" > 
								<circle cx="12" cy="12" r="10" stroke="#494949ff" strokeWidth="2" /> 
								<circle cx="12" cy="8" r="1.5" fill="#5c5c5cff" /> 
								<rect x="11.25" y="10" width="1.5" height="6" rx="0.75" fill="#000000ff" /> 
							</svg>
						</div>
						<div className="QuickLinks">
							<a href="https://github.com/lseti1" target="_blank" rel="noopener noreferrer" title="Personal GitHub Profile">
								<img className="Icon" src="/GitHub Logo.png" alt="GitHubLink" />
							</a>
							<a href="https://www.linkedin.com/in/lucassetiady/" target="_blank" rel="noopener noreferrer" title="Personal LinkedIn Profile">
								<img className="Icon" src="/LinkedIn Logo.webp" alt="LinkedInLink" />
							</a>
							<a href="mailto:luca.setia@gmail.com" target="_blank" rel="noopener noreferrer" title="Personal Email">
								<img className="Icon" src="/mailIcon.png" alt="MailLink" />
							</a>
						</div>
					</div>
					<div className="AboutMeRight" data-aos="fade-up">
						<h1 className="ContentTitle" style={{ padding: '0' }}>About Me</h1>
						<p>Hi, I’m Lucas, a Bachelor of Computer Science graduate from Griffith University. I am passionate about the tech industry and
							am currently seeking real-world experience in frontend/web/software development. I'm excited to learn and grow as part of an impactful team and improve
							in this field of work.</p>
						<p>Please feel free to explore my portfolio to discover the apps and designs I’ve created. While my passion is in frontend/web development,
							I am motivated to expand my expertise in frontend, backend and other areas.  I'm excited about the opportunity to take on any role and have immediate, full-time availability.
						</p>
					</div>
				</div>
			</div>
			<CSSTransition in={isInfoPopupVisible} timeout={300} classNames="PopUp" unmountOnExit nodeRef={nodeRef}>
				<div ref={nodeRef} className="ContactPopUp">
					<h1 className="ContentTitle" style={{ padding: '0', fontSize: '2rem'}}>Contact Information</h1>
					<h2>Phone:</h2>
					<p>0439 629 899</p>
					<h2>Email:</h2>
					<p>luca.setia@gmail.com</p>
				</div>
			</CSSTransition>
			<div id="Applications" className="Applications" data-aos="fade-up">
				<h1 className="ContentWrapper ContentTitle">Web Applications</h1>
				<div className="ContentWrapper WebAppRender">{WebAppRender()}</div>
			</div>
			<div id="Designs" className="WebsiteDesigns" data-aos="fade-up" data-aos-offset="800">
				<h1 className="ContentWrapper ContentTitle" style={{ color: 'white' }}>Website Designs</h1>
				<div className="ContentWrapper WebsiteDesignsContent">
					<div className="WebDesignCard">
						<a href="https://e-commerce-design-202501.vercel.app/" target="_blank" rel="noopener noreferrer" title="eCommerce Tech Store Web Design">
							<img className="SourceImage" src="/eCommerceDesign1.png" alt="eCommerceWebDesign1"/>
						</a>
						<a className="WebGitHubLink" href="https://github.com/lseti1/eCommerceDesign-202501" target="_blank" rel="noopener noreferrer" title="eCommerce Tech Design Repository">
							<img className="GitHubImage" src="/GitHub Logo.png" alt="GitHubLink"/>
						</a>
						<a className="WebFigmaLink" href="https://www.figma.com/design/fSl6ItzZASRf6SkKRlL5IG/eCommerce-Design-1?node-id=0-1&t=E4cai4VvIoDfHejU-1" target="_blank" rel="noopener noreferrer" title="eCommerce Tech Store Figma Mock-Up">
							<img className="FigmaImage" src="/FigmaIcon.png" alt="FigmaLink"/>
						</a>
						<p className="WebDesignDescription">This is a multi-page eCommerce design for a Tech store including large Hero Banners,
							multi-section pages and a number of accessible pages to simulate a fully functional eCommerce store.<br  /><b>Made with HTML, Tailwind CSS & JavaScript</b></p>
					</div>
					<div className="WebDesignCard">
						<a href="https://e-commerce-design-202502.vercel.app/" target="_blank" rel="noopener noreferrer" title="eCommerce Music Store Web Design">
							<img className="SourceImage" src="/eCommerceDesign2.png" alt="eCommerceWebDesign2"/>
						</a>
						<a className="WebGitHubLink" href="https://github.com/lseti1/eCommerceDesign-202502" target="_blank" rel="noopener noreferrer" title="eCommerce Music Design Repository">
							<img className="GitHubImage" src="/GitHub Logo.png" alt="GitHubLink"/>
						</a>
						<a className="WebFigmaLink" href="https://www.figma.com/design/UYAWjDoyWCFHawjublbdYQ/eCommerceDesign2?node-id=1-94&t=XaiKBEEiC5K3dM4L-1" target="_blank" rel="noopener noreferrer" title="eCommerce Tech Store Figma Mock-Up">
							<img className="FigmaImage" src="/FigmaIcon.png" alt="FigmaLink"/>
						</a>
						<p className="WebDesignDescription">This is an eCommerce design for a multi-page Music store including Hero Banners,
							product cards and other e-commerce visuals. Designed with a music-inspired theme and a number of different banners.<br  /><b>Made with HTML, Tailwind CSS & JavaScript</b></p>
					</div>
					<div className="WebDesignCard" data-aos="fade-up" data-aos-offset="900">
						<a href="https://lucas-websitedesign1.in/" target="_blank" rel="noopener noreferrer" title="Tourism Web Design">
							<img className="SourceImage" src="/elementorDesign1.png" alt="ElementorWebDesign1"/>
						</a>
						<p className="WebDesignDescription">This is a tourism website for the city of London. It features a sleek,
							modern design that emphasizes key aspects of London tourism, such as immersive experiences and upcoming events, creating an
							engaging and informative experience for visitors.<br  /><b>Designed using WordPress & Elementor</b></p>
					</div>
					<div className="WebDesignCard" data-aos="fade-up" data-aos-offset="900">
						<a href="https://lucas.websitedesign2.in/" target="_blank" rel="noopener noreferrer" title="Restaurant Web Design">
							<img className="SourceImage" src="/elementorDesign2.png" alt="ElementorWebDesign2"/>
						</a>
						<p className="WebDesignDescription">This is a restaurant website for an authentic Japanese dining experience.
							It features a refined and minimalist design that captures the essence of Japanese aesthetics while showcasing the restaurant’s signature style,
							and seasonal events, offering an immersive and appetizing introduction to the cuisine.<br  /><b>Designed using WordPress & Elementor</b></p>
					</div>
					<div className="WebDesignCard" data-aos="fade-up" data-aos-offset="1100">
						<a href="https://portfolio-design-478053.vercel.app/" target="_blank" rel="noopener noreferrer" title="Photography Portfolio Design">
							<img className="SourceImage" src="/portfolioDesign.png" alt="WebDesign1"/>
						</a>
						<a className="WebGitHubLink" href="https://github.com/lseti1/portfolioDesign-478053" target="_blank" rel="noopener noreferrer" title="Photography Portfolio Repository">
							<img className="GitHubImage" src="/GitHub Logo.png" alt="GitHubLink"/>
						</a>
						<p className="WebDesignDescription">This is a web-design for a photographer's Digital Portfolio including multiple accessible sections
							with a user-friendly layout that utilises various graphics & animations for visual flair.<br  /><b>Made with HTML, Tailwind CSS & JavaScript</b></p>
					</div>
					<div className="WebDesignCard" data-aos="fade-up" data-aos-offset="1100">
						<a href="https://old-portfolio-123948.vercel.app/" target="_blank" rel="noopener noreferrer" title="Former Portfolio Design">
							<img className="SourceImage" src="/OlderPortfolioDesign.png" alt="OlderPortfolioWebDesign"/>
						</a>
						<a className="WebGitHubLink" href="https://github.com/lseti1/OldPortfolio-123948" target="_blank" rel="noopener noreferrer">
							<img className="GitHubImage" src="/GitHub Logo.png" alt="GitHubLink"/>
						</a>
						<p className="WebDesignDescription">This was the original web design for this portfolio. It featured a single, fixed-layout page
							that utilized dynamically changing content containers to manage on-screen text, allowing for seamless content transitions without scrolling/loading & responsive design for multiple viewports. <br  /><b>Made with HTML, CSS & JavaScript in React</b></p>
					</div>
				</div>
			</div>
			<div id="EducationExperience" className="EducationExperience" data-aos="fade-up" data-aos-offset="1500">
				<h1 class="ContentWrapper ContentTitle" data-aos="fade-up">Education & Experience</h1>
				<div className="ContentWrapper EducationExperienceContent" data-aos="fade-up">
					<div className="EducationLeft">
						<div className="EducationExperienceCards">
							<div>
								<p className="CardTimeline">2022 - 2025 (June)</p>
								<h2>Bachelor's Degree</h2>
								<p>Major: Software Development</p>
								<p>GPA: ~6.5 (On 7-point scale)</p>
							</div>
							<a className="DocumentLink" href="https://drive.google.com/file/d/1maTIF8UQtCtTLNpNfdWNWqwi2w337snM/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Certificate">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V7a2 2 0 00-.59-1.41l-4-4A2 2 0 0012 1H6a2 2 0 00-2 2v16a2 2 0 002 2h2" />
								</svg>
							</a>
						</div>
						<div className="EducationExperienceCards">
							<div>
								<p className="CardTimeline">2022 - 2025 (June)</p>
								<h2>Academic Transcript</h2>
								<p>2x Griffith Academic Excellence Award Recipient</p>
							</div>
							<a className="DocumentLink" href="https://drive.google.com/file/d/1csel03zxJA76Y9ueQyO46-9wynmcfIGV/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Transcript">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V7a2 2 0 00-.59-1.41l-4-4A2 2 0 0012 1H6a2 2 0 00-2 2v16a2 2 0 002 2h2" />
								</svg>
							</a>
						</div>
						<div className="EducationExperienceCards">
							<div>
								<p className="CardTimeline">Last Updated: 04/08/25</p>
								<h2>Digital Resume</h2>
								<p>GitHub: <a href="https://github.com/lseti1" target="_blank" rel="noopener noreferrer">https://github.com/lseti1</a></p>
							</div>
							<a className="DocumentLink" href="https://drive.google.com/file/d/1GcbM0VK3fcTW1yVSlrItOReZQpCpADSj/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Resume">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V7a2 2 0 00-.59-1.41l-4-4A2 2 0 0012 1H6a2 2 0 00-2 2v16a2 2 0 002 2h2" />
								</svg>
							</a>
						</div>
					</div>
					<div className="ExperienceRight">
						<div className="EducationExperienceCards">
							<div>
								<h2>Frameworks</h2>
								<p>ASP.NET, Laravel, React, Tailwind CSS, WordPress, Elementor</p>
							</div>
						</div>
						<div className="EducationExperienceCards">
							<div>
								<h2>Languages</h2>
								<p>Python, C/C++/C#, Java, JavaScript, Swift, PHP, HTML5, CSS3, TypeScript</p>
							</div>
						</div>
						<div className="EducationExperienceCards">
							<div>
								<h2>Other</h2>
								<p>Tools: GitHub, VS Code, Vercel, XCode</p>
								<p>Additional: Indonesian (Language), Photoshop (Photopea), Figma</p>
							</div>
						</div>
						<div className="EducationExperienceCards">
							<div>
								<h2>University-Based Projects</h2>
								<p>Client-Server Systems, AI Development, OOP Based Encoder/Decoder</p>
							</div>
							
						</div>
					</div>
				</div>
			</div>
			<div className="Footer" data-aos="fade-up">
				<p className="ContentWrapper FooterContent"><b>Please Note:</b> This Portfolio is best viewed in Full Screen on a Desktop Computer</p>
			</div>
		</div>
	);
}

export default App;