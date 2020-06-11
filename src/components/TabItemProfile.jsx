import React  from 'react'
import PropTypes from 'prop-types';

const TabItemProfile = (props) => {
	const {
		active,
	} = props;

	switch(active) {
		case 'skills':
			return (
				<div className="itemTabAboutSkills">
					<ul>
						<li>HTML/HTML5</li>
						<li>CSS/CSS3</li>
						<li>SCSS/LESS</li>
						<li>Javascript</li>
						<li>JQuery</li>
						<li>Ajax</li>
						<li>Rest API</li>
						<li>React/React Native</li>
						<li>PHP</li>
						<li>MySql</li>
						<li>GIT/Bitbucket</li>
						<li>Jira</li>
						<li>Trello</li>
						<li>Photoshop</li>
						<li>Illustrator</li>
						<li>InDesign</li>
						<li>Sketch</li>
						<li>Mockflow</li>
						<li>Marvelapp</li>
					</ul>
				</div>
			);
		case 'experience':
			return (
				<div>
					<div className="itemTabAboutExperience">
						<h2>Freelance</h2>
						<h3>Web Developer <small>March 2012 - Present</small></h3>
						<h4>Tasks:</h4>
						<ul>
							<li>I work remotely for different Italian clients and some collaboration with Latte Creative, IdLab, Franz Goria and Scaleno srl</li>
							<li>I developed site using Wordpress, Drupal, Prestashop, Html and CSS, SCSS and Less. S.S.D. Italian Soccer Management, Perugia (Italy)</li>
						</ul>
					</div>
					<div className="itemTabAboutExperience">
						<h2>Octopus Labs, London (England)</h2>
						<h3>Fullstack Developer <small>October 2017 - December 2017</small></h3>
						<h4>Tasks:</h4>
						<ul>
							<li>I work for the company remotely from Lisbon, Portugal. I work in team on company project as Frontend Developer using React and Redux.</li>
						</ul>
					</div>
					<div className="itemTabAboutExperience">
						<h2>Bonial.com, Berlin (Germany)</h2>
						<h3>Fullstack Developer <small>October 2017 - December 2017</small></h3>
						<h4>Tasks:</h4>
						<ul>
							<li>I work for the company creating some Landing Page and managing the main website of company</li>
						</ul>
					</div>
					<div className="itemTabAboutExperience">
						<h2>The Killers Company, Florence (Italy)</h2>
						<h3>Web Developer <small>March 2011 – January 2013</small></h3>
						<h4>Tasks:</h4>
						<ul>
							<li> I work for this company as Web Developer in Florence and We worked in team and We developed some site for different clients, like Verde Profilo</li>
						</ul>
					</div>
					<div className="itemTabAboutExperience last">
						<h2>Web Developer/SEO AdWords</h2>
						<h3>Web Developer <small>November 2009 – January 2012</small></h3>
						<h4>Tasks:</h4>
						<ul>
							<li>I work managing their AdWords Campaign</li>
							<li>I develop and maintain their sites using Joomla</li>
						</ul>
					</div>
				</div>
			);
		default:
			return (
				<div>
					<p>
						I’m Italian freelance with 6 years experience as frontend developer.<br />
						I know the PHP and MySql, I developed a software management online for the producer international, a society in Turin, with this application they can organize all their client and collaborators. There is a step form to add all information, created using jQuery Ajax and PHP to storage data into the database, and there is a page where they can search and view all detail of clients.
					</p>
					<p>
						I know the jQuery, HTML5, CSS3 and framework like bootstrap, my latest works is Art Bonus, this was developed in collaboration with Latte Creative, I worked in team, I created the frontend of site. The Italian Ministry of Cultural Heritage and Activities and Tourism promoted Art Bonus, a Decree Law to increase private investments in art and cultural projects. I developed the template using bootstrap to create the structure site and I used jQuery and Ajax for the search form.
					</p>
					<p>
						I developed the site Commissario Terzo Valico, for the Italian Ministry of Transportation in collaboration with IdLab. For this site I created using Drupal 7 and I installed a visual composer to menage the page. I created two map version, one to view the building site and Township information and the other to view the asbestos tracking unit and this data is retrieve from the Italferr Server using REST API.
					</p>
					<p>
						I like to work in team and usually I work remotely so I have experience with GIT, Jira and Bitbucket to sync all with the team.
					</p>
					<p>
						I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image. I developed it using jQuery, Ajax and I use the REST API of Instagram.
					</p>
				</div>
			);
	}
};

TabItemProfile.propTypes = {
	active: PropTypes.string,
};

TabItemProfile.defaultProps = {
	active: null,
};

export default TabItemProfile;
