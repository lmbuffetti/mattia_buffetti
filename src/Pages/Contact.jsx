import React  from 'react'
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import socialShare from '../images/social_graph.jpg';

const Contact = (props) => {
	// PROPS
	const {
		windowSize,
	} = props;

	return (
		<div style={{minHeight: windowSize.minHeight}}>
			<Helmet
				title={'Mattia Buffetti - Contact'}
				meta={[
					{ name: 'description', content: 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image.' },
					{ name: 'keywords', content: 'Contact' },
					{ property: 'og:title', content: 'Luigi Mattia Buffetti - Web Developer - Contact' },
					{ property: 'og:image', content: 'http://www.mattiabuffetti.org'+socialShare },
					{ property: 'og:description', content: 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image. I developed it using jQuery, Ajax and I use the REST API of Instagram.' },
					{ name: 'twitter:title', content: 'Luigi Mattia Buffetti - Web Developer - Contact' },
					{ name: 'twitter:image', content: 'http://www.mattiabuffetti.org'+socialShare },
					{ name: 'twitter:description', content: 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image. I developed it using jQuery, Ajax and I use the REST API of Instagram.' },
				]}
			/>
			<div itemScope className={"titlePage"}>
				<h1>Mattia Buffetti - </h1>&nbsp;<h2>Contact</h2>
			</div>
			<div id="contact">
				<div className="row">
					<div className="col-md-6">
						<h2>Luigi Mattia Buffetti</h2>
						<p>Mail: <a href="mailto:mattia.buffetti@gmail.com" title={"Personal Mail"}>mattia.buffetti@gmail.com</a></p>
						<p>Skype: <a href="skype:mattia.buffetti" title={"Personal Skype"}>mattia.buffetti</a></p>
						<p>Telefono: <a href="tel:+393286930881" title={"Personal Phone"}>+39 328.6930881</a></p>
						<p>Linkedin: <a href="https://www.linkedin.com/in/mattiabuffetti/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
					</div>
				</div>
			</div>
		</div>
	)

};

Contact.propTypes = {
	history: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
	projects: PropTypes.arrayOf(PropTypes.object).isRequired,
	windowSize: PropTypes.object,
};

Contact.defaultProps = {
	translation: null,
	windowSize: {},
};


const mapStateToProps = (state) => ({
	projects: get(state, 'content.projects', []),
	windowSize: get(state, 'common.windowSize', {}),
});

export default compose(withRouter, connect(mapStateToProps, null))(Contact);
