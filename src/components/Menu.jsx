import React  from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo-luigi-mattia-buffetti-web-developer.png';

const Menu = () => {
	return (
		<div id="navbar">
			<img src={Logo} alt="Logo Luigi Mattia Buffetti - Web Developer" width={80} height={123} />
			<nav>
				<ul>
					<li>
						<Link to='/' title={"Project"}>
							<i className="fa fa-desktop" aria-hidden="true" />
							<span>Projects</span>
						</Link>
					</li>
					<li>
						<Link to={"/about"} title={"About"}>
							<i className="fa fa-address-card-o" aria-hidden="true" />
							<span>About</span>
						</Link>
					</li>
					<li>
						<Link to={"/contact"} title={"Contact"}>
							<i className="fa fa-envelope-o" aria-hidden="true" />
							<span>Contact</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Menu;
