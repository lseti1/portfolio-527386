import React, { useState, useEffect, useRef } from "react";
import './App.css';


function App() {
	const jumpTo = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({behavior: 'smooth'});
		}
	};

	const WebApps = ['LifePlanner', 'JobRecorderNet', 'PlanFinder', 'Skycast'];

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
			case 'LifePlanner':
				return <div className="ApplicationsContent">
					<div className="ApplicationImage" >
						<button onClick={decrement} className="ApplicationsCarouselButton">&lt;</button>
						<div className="ImageWrapper">
							<a href="https://planner773629-tau-three.vercel.app/" target="_blank" rel="noopener noreferrer">
								<img className="SourceImage" src="/lifePlanner.png" alt="LifePlannerApp"/>
							</a>
							<a className="GitHubLink" href="https://github.com/lseti1/lifePlanner-773629" target="_blank" rel="noopener noreferrer">
								<img className="GitHubImage" src="/GitHub Logo.png" />
							</a>
						</div>
						<button onClick={increment} className="ApplicationsCarouselButton">&gt;</button>
					</div >
					<div className="ApplicationDescription">
						<h1>Life Planner</h1>
						<p>This is an interactive one-page planning website to store & see upcoming plans (Made with React) with features such as adjustable calendar, easily add/remove plans, 
							search functionality. <br  /><b>Made with HTML, CSS & JavaScript.</b></p>
					</div>
				</div >;
			case 'JobRecorderNet':
				return <div className="ApplicationsContent">
					<div className="ApplicationImage" >
						<button onClick={decrement} className="ApplicationsCarouselButton">&lt;</button>
						<div className="ImageWrapper">
							<img className="SourceImage" src="/JobRecorderNet.png" alt="LifePlannerApp"/>
							<a className="GitHubLink" href="https://github.com/MatchaBreak/JobRecorderNet" target="_blank" rel="noopener noreferrer">
								<img className="GitHubImage" src="/GitHub Logo.png" />
							</a>
						</div>
						<button onClick={increment} className="ApplicationsCarouselButton">&gt;</button>
					</div >
					<div className="ApplicationDescription">
						<h1>JobRecorderNet</h1>
						<p>JobRecorderNet is a port of a quality assurance application (university-based project) that was made for an external client & his company which included features such as
							role-based job access, evidence uploading, job filtering/searching and more.<br  /><b>This port uses Tailwind CSS and Razor Pages in ASP.NET written with C#.</b></p>
					</div>
				</div >;
			case 'PlanFinder':
				return <div className="ApplicationsContent">
					<div className="ApplicationImage" >
						<button onClick={decrement} className="ApplicationsCarouselButton">&lt;</button>
						<div className="ImageWrapper">
							<a href="https://holidaysearcher198302.vercel.app/" target="_blank" rel="noopener noreferrer">
								<img className="SourceImage" src="/planFinder.png" alt="PlanFinderApp"/>
							</a>
							<a className="GitHubLink" href="https://github.com/lseti1/planFinder-198302" target="_blank" rel="noopener noreferrer">
								<img className="GitHubImage" src="/GitHub Logo.png" />
							</a>
						</div>
						<button onClick={increment} className="ApplicationsCarouselButton">&gt;</button>
					</div >
					<div className="ApplicationDescription">
						<h1>Plan Finder</h1>
						<p>This is a website that utilises Wikipedia's free API to show things to do while on holidays (Made using React) with features such as adjustable searches, text generation/parsing, 
							and multi-content display.<br  /><b>Made with HTML, CSS & JavaScript.</b></p>
					</div>
				</div >;
			case 'Skycast':
				return <div className="ApplicationsContent">
					<div className="ApplicationImage" >
						<button onClick={decrement} className="ApplicationsCarouselButton">&lt;</button>
						<div className="ImageWrapper">
							<a href="https://sky-cast-853920.vercel.app/" target="_blank" rel="noopener noreferrer">
								<img className="SourceImage" src="/skycast.png" alt="SkycastApp"/>
							</a>
							<a className="GitHubLink" href="https://github.com/lseti1/skyCast-853920" target="_blank" rel="noopener noreferrer">
								<img className="GitHubImage" src="/GitHub Logo.png" />
							</a>
						</div>
						<button onClick={increment} className="ApplicationsCarouselButton">&gt;</button>
					</div >
					<div className="ApplicationDescription">
						<h1>Skycast</h1>
						<p>This is a simple web app that displays weather information from the OpenWeather API (made with ReactVite) with features such as extensive weather displays, 3-hourly intervals 
							for key weather metrics and forecast up to 5 days in advance. <br  /><b>Made with HTML, CSS & JavaScript.</b></p>
					</div>
				</div >;
			default:
				return <div>There was a problem displaying the web apps. Please refresh the tab.</div>
		}
	};

	return (
		<div className="App">
			<div className="NavBar">
				<div className="ContentWrapper NavBarContent">
					<p onClick={() => jumpTo('AboutMe')} className="NavBarTitle">About</p>
					<p onClick={() => jumpTo('Applications')} className="NavBarTitle">Apps</p>
					<p onClick={() => jumpTo('Designs')} className="NavBarTitle">Designs</p>
					<p onClick={() => jumpTo('EducationExperience')} className="NavBarTitle">Education/Experience</p>
				</div>
			</div>
			<div id="AboutMe" className="AboutMe">
				<div className="ContentWrapper AboutMeContent">
					<div className="AboutMeLeft">
						<div className="PortraitWrapper">
							<img className="Portrait" src="/PotraitMySelf.jpg" alt="PortraitOfSelf" />
						</div>
						<div className="QuickLinks">
							<a href="https://github.com/lseti1" target="_blank" rel="noopener noreferrer">
								<img className="Icon" src="/GitHub Logo.png" alt="GitHubLink" />
							</a>
							<a href="https://www.linkedin.com/in/lucassetiady/" target="_blank" rel="noopener noreferrer">
								<img className="Icon" src="/LinkedIn Logo.jpg" alt="LinkedInLink" />
							</a>
							<a href="mailto:luca.setia@gmail.com" target="_blank" rel="noopener noreferrer">
								<img className="Icon" src="/mailIcon.png" alt="MailLink" />
							</a>
						</div>
					</div>
					<div className="AboutMeRight">
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
			<div id="Applications" className="Applications">
				<h1 className="ContentWrapper ContentTitle">Web Applications</h1>
				<div className="ContentWrapper WebAppRender">{WebAppRender()}</div>
			</div>
			<div id="Designs" className="WebsiteDesigns">
				<h1 className="ContentWrapper ContentTitle" style={{ color: 'white' }}>Website Designs</h1>
				<div className="ContentWrapper WebsiteDesignsContent">
					<div className="WebDesignCard">
						<a href="https://e-commerce-design-202501.vercel.app/" target="_blank" rel="noopener noreferrer">
							<img className="SourceImage" src="/eCommerceDesign1.png" alt="eCommerceWebDesign1"/>
						</a>
						<a className="WebGitHubLink" href="https://github.com/lseti1/eCommerceDesign-202501" target="_blank" rel="noopener noreferrer">
							<img className="GitHubImage" src="/GitHub Logo.png" />
						</a>
						<p className="WebDesignDescription">This is a multi-page eCommerce design for a Tech store (made with HTML/Tailwind CSS) including large Hero Banners,
							multi-section pages and a number of accessible pages to simulate a fully functional eCommerce store.</p>
					</div>
					<div className="WebDesignCard">
						<a href="https://e-commerce-design-202502.vercel.app/" target="_blank" rel="noopener noreferrer">
							<img className="SourceImage" src="/eCommerceDesign2.png" alt="eCommerceWebDesign2"/>
						</a>
						<a className="WebGitHubLink" href="https://github.com/lseti1/eCommerceDesign-202502" target="_blank" rel="noopener noreferrer">
							<img className="GitHubImage" src="/GitHub Logo.png" />
						</a>
						<p className="WebDesignDescription">This is an eCommerce design for a multi-page Music store (made with HTML/Tailwind CSS) including Hero Banners,
							product cards and other e-commerce visuals. Designed with a music-inspired theme and a number of different banners.</p>
					</div>
					<div className="WebDesignCard">
						<a href="https://lucas-websitedesign1.in/" target="_blank" rel="noopener noreferrer">
							<img className="SourceImage" src="/elementorDesign1.png" alt="ElementorWebDesign1"/>
						</a>
						<p className="WebDesignDescription">This is a tourism website for the city of London (designed using WordPress and Elementor). It features a sleek,
							modern design that emphasizes key aspects of London tourism, such as immersive experiences, iconic attractions, and upcoming events, creating an
							engaging and informative experience for visitors.</p>
					</div>
					<div className="WebDesignCard">
						<a href="https://lucas.websitedesign2.in/" target="_blank" rel="noopener noreferrer">
							<img className="SourceImage" src="/elementorDesign2.png" alt="ElementorWebDesign2"/>
						</a>
						<p className="WebDesignDescription">This is a restaurant website for an authentic Japanese dining experience (crafted in WordPress using Elementor).
							It features a refined and minimalist design that captures the essence of Japanese aesthetics while showcasing the restaurant’s signature style,
							special offers, and seasonal events, offering an immersive and appetizing introduction to the cuisine.</p>
					</div>
					<div className="WebDesignCard">
						<a href="https://portfolio-design-478053.vercel.app/" target="_blank" rel="noopener noreferrer">
							<img className="SourceImage" src="/portfolioDesign.png" alt="WebDesign1"/>
						</a>
						<a className="WebGitHubLink" href="https://github.com/lseti1/portfolioDesign-478053" target="_blank" rel="noopener noreferrer">
							<img className="GitHubImage" src="/GitHub Logo.png" />
						</a>
						<p className="WebDesignDescription">This is a web-design for a photographer's Digital Portfolio (Made with HTML/CSS) including multiple accessible sections
							with a user-friendly layout that utilises various graphics & animations for visual flair. </p>
					</div>
					<div className="WebDesignCard">
						<a>
							<img className="SourceImage" src="/OlderPortfolioDesign.png" alt="OlderPortfolioWebDesign"/>
						</a>
						<a className="WebGitHubLink" href="" target="_blank" rel="noopener noreferrer">
							<img className="GitHubImage" src="/GitHub Logo.png" />
						</a>
						<p className="WebDesignDescription">This was the original web design for my portfolio (built using HTML and CSS). It featured a single, fixed-layout page
							that utilized dynamically changing content containers to manage on-screen text, allowing for seamless content transitions without the need for scrolling/loading. </p>
					</div>
				</div>
			</div>
			<div id="EducationExperience" className="EducationExperience">
				<h1 class="ContentWrapper ContentTitle">Education & Experience</h1>
				<div className="ContentWrapper EducationExperienceContent">
					<div className="EducationLeft">
						<div className="EducationExperienceCards">
							<div>
								<p className="CardTimeline">2022 - 2025 (June)</p>
								<h1>Bachelor's Degree</h1>
								<p>Major: Software Development</p>
							</div>
							<a className="DocumentLink" href="https://drive.google.com/file/d/1maTIF8UQtCtTLNpNfdWNWqwi2w337snM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V7a2 2 0 00-.59-1.41l-4-4A2 2 0 0012 1H6a2 2 0 00-2 2v16a2 2 0 002 2h2" />
								</svg>
							</a>
						</div>
						<div className="EducationExperienceCards">
							<div>
								<p className="CardTimeline">2022 - 2025 (June)</p>
								<h1>Academic Transcript</h1>
								<p>2x Griffith Academic Excellence Award Recipient</p>
							</div>
							<a className="DocumentLink" href="https://drive.google.com/file/d/1csel03zxJA76Y9ueQyO46-9wynmcfIGV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V7a2 2 0 00-.59-1.41l-4-4A2 2 0 0012 1H6a2 2 0 00-2 2v16a2 2 0 002 2h2" />
								</svg>
							</a>
						</div>
						<div className="EducationExperienceCards">
							<div>
								<p className="CardTimeline">Last Updated: 14/07/25</p>
								<h1>Digital Resume</h1>
							</div>
							<a className="DocumentLink" href="https://drive.google.com/file/d/1EVnFoxOuXq_0qvpaLY5eHc02KuJm6Rao/view?usp=sharing" target="_blank" rel="noopener noreferrer">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V7a2 2 0 00-.59-1.41l-4-4A2 2 0 0012 1H6a2 2 0 00-2 2v16a2 2 0 002 2h2" />
								</svg>
							</a>
						</div>
					</div>
					<div className="ExperienceRight">
						<div className="EducationExperienceCards">
							{/* <p className="CardTimeline">2022 - 2025 (June)</p> */}
							<div>
								<h1>Frameworks</h1>
								<p>ASP.NET, Laravel, React, Tailwind CSS, WordPress, Elementor</p>
							</div>
						</div>
						<div className="EducationExperienceCards">
							{/* <p className="CardTimeline">2022 - 2025 (June)</p> */}
							<div>
								<h1>Languages</h1>
								<p>Python, C/C++/C#, Java, JavaScript, Swift, PHP, HTML5, CSS3</p>
							</div>
						</div>
						<div className="EducationExperienceCards">
							{/* <p className="CardTimeline">Last Updated:</p> */}
							<div>
								<h1>Other</h1>
								<p>Tools: GitHub, VS Code, Vercel, XCode</p>
								<p>Additional: Indonesian (Language), Photoshop (Photopea)</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="Footer">
				<p className="ContentWrapper FooterContent"><b>Please Note:</b> This Portfolio is best viewed in Full Screen on a Desktop Computer</p>
			</div>
		</div>
	);
}

export default App;