import React  from 'react';
import TabItemProfile from '../components/TabItemProfile';
import { Helmet } from 'react-helmet';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import last from 'lodash/last';
import { compose } from 'redux';
import { connect } from 'react-redux';
import socialShare from '../images/social_graph.jpg';
import imgUrl from '../gallery/luigi-mattia-buffetti.jpg';

const About = (props) => {
	const {
		history,
		windowSize,
	} = props;
	// PARAMS URL
	const curTask = last(history.location.pathname.split('/'));

	return (
		<div style={{minHeight: windowSize.minHeight}}>
			<Helmet
				title={'Mattia Buffetti - About'}
				meta={[
					{ name: 'description', content: 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image.' },
					{ name: 'keywords', content: 'Web Developer' },
					{ property: 'og:title', content: 'Luigi Mattia Buffetti - Web Developer - About' },
					{ property: 'og:image', content: 'http://www.mattiabuffetti.org'+socialShare },
					{ property: 'og:description', content: 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image. I developed it using jQuery, Ajax and I use the REST API of Instagram.' },
					{ name: 'twitter:title', content: 'Luigi Mattia Buffetti - Web Developer - About' },
					{ name: 'twitter:image', content: 'http://www.mattiabuffetti.org'+socialShare },
					{ name: 'twitter:description', content: 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image. I developed it using jQuery, Ajax and I use the REST API of Instagram.' },
				]}
			/>
			<div itemScope className={"titlePage"}>
				<h1>Mattia Buffetti - </h1>&nbsp;<h2>About</h2>
			</div>
			<div id="about">
				<div className="row">
					<div className="col-md-5">
						<img src={imgUrl} alt="Luigi Mattia Buffetti" />
					</div>
					<div className="col-md-7">
						<nav id="navTab">
							<ul>
								<li>
									<Link
										className={curTask === '' ? 'active' : ''}
										to={'/about'}
										title={"Profile"}
									>
										Profile
									</Link>
								</li>
								<li>
									<Link
										className={curTask === 'skills' ? 'active' : ''}
										to={'/about/skills'}
										title={"Skills"}
									>
										skills
									</Link>
								</li>
								<li>
									<Link
										className={curTask === 'experience' ? 'active' : ''}
										to={'/about/experience'}
										title={"Experience"}
									>
										Experience
									</Link>
								</li>
							</ul>
						</nav>
						<div id="contentTabMax">
							<TabItemProfile
								active={curTask}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

About.propTypes = {
	history: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
	projects: PropTypes.arrayOf(PropTypes.object).isRequired,
	windowSize: PropTypes.object,
};

About.defaultProps = {
	translation: null,
	windowSize: {},
};


const mapStateToProps = (state) => ({
	projects: get(state, 'content.projects', []),
	windowSize: get(state, 'common.windowSize', {}),
});

export default compose(withRouter, connect(mapStateToProps, null))(About);
