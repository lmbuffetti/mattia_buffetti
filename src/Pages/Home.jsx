import React  from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import get from "lodash/get";
import SocialShare from '../images/social_graph.jpg';
import { compose } from 'redux';
import { Link, withRouter } from 'react-router-dom';

const Home = (props) => {
	const {
		projects,
		windowSize,
	} = props;

	return (
		<div style={{minHeight: windowSize.minHeight}}>
			<Helmet
				title={'Mattia Buffetti - Project'}
				meta={[
					{ name: 'description', content: 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image.' },
					{ name: 'keywords', content: 'Web Developer' },
					{ property: 'og:title', content: 'Luigi Mattia Buffetti - Web Developer - Project' },
					{ property: 'og:image', content: 'http://www.mattiabuffetti.org'+SocialShare },
					{ property: 'og:description', content: 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image. I developed it using jQuery, Ajax and I use the REST API of Instagram.' },
					{ name: 'twitter:title', content: 'Luigi Mattia Buffetti - Web Developer - Project' },
					{ name: 'twitter:image', content: 'http://www.mattiabuffetti.org'+SocialShare },
					{ name: 'twitter:description', content: 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image. I developed it using jQuery, Ajax and I use the REST API of Instagram.' },
				]}
			/>
			<div>
				<div itemScope className={"titlePage"}>
					<h1>Mattia Buffetti - </h1>&nbsp;<h2>Project</h2>
				</div>
				<ul id="projectList" className="clearfix">
					{
						projects.map(function (item, i) {
						const urlImg = require('../gallery/'+item.image);
						return (
							<li key={i}>
								<Link to={'/projects/'+item.url} title={item.title}>
									<img src={urlImg} alt={item.title} width={500} height={333} />
									<div className="hoverText">
										<h3>{item.title}</h3>
									</div>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
};

Home.propTypes = {
	projects: PropTypes.arrayOf(PropTypes.object).isRequired,
	windowSize: PropTypes.object,
};

Home.defaultProps = {
	translation: null,
	windowSize: {},
};


const mapStateToProps = (state) => ({
	projects: get(state, 'content.projects', []),
	windowSize: get(state, 'common.windowSize', {}),
});

export default compose(withRouter, connect(mapStateToProps, null))(Home);
