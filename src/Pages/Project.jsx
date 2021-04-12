import React, { useEffect, useState } from 'react'
import Tab from '../components/Tab';
import Iframe from '../components/Iframe';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import last from 'lodash/last';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { frontloadConnect } from 'react-frontload';
import { getProjectDetail, setProjectsList } from '../middlewares/ContentMiddleware';
import { setWindow } from '../middlewares/CommonMiddleware';

const striptags = require('striptags');

const frontload = async (props) => {
	try {
		console.log(props.project);
		console.log('cazzo');
		if (!props.project.loaded) {
			const id = get(props, 'match.params.number', 0);
			await props.getProjectDetail(id, props.projects);
		}
	} catch (e) {
		console.error(e);
	}
	return false;
};

const Project = (props) => {
	// PROPS
	const {
		history,
		match,
		project,
		projects,
		windowSize,
	} = props;
	// URL PARAMS
	const projID = get(match, 'params.number', 0);
	const curTask = last(history.location.pathname.split('/'));
	const img = project.image ? require('../gallery/' + project.image) : '';

	useEffect(() => {
		return () => {
			props.setProjectsList();
		}
	}, [])

	useEffect(() => {
		console.log(project);
		if (projects && !project.loaded) {
			props.getProjectDetail(projID, projects);
		}
		if (project.loaded && !project.ID) {
			console.log('test');
		}
	}, [projects, projID]);

	useEffect(() => {
		if (project.loaded && !project.ID) {
			history.push('/')
		}
	}, [project])

	return (
		<div style={{minHeight: windowSize.minHeight}}>
			<div>
				<Helmet
					title={'Mattia Buffetti - ' + project.title}
					meta={[
						{name: 'description', content: striptags(project.description)},
						{name: 'keywords', content: project.title},
						{property: 'og:title', content: 'Luigi Mattia Buffetti - ' + project.title},
						{property: 'og:image', content: 'http://www.mattiabuffetti.org' + img},
						{property: 'og:description', content: striptags(project.description)},
						{ name: 'twitter:title', content: 'Luigi Mattia Buffetti - ' + project.title},
						{ name: 'twitter:image', content: 'http://www.mattiabuffetti.org' + img},
						{ name: 'twitter:description', content: striptags(project.description)}
					]}
				/>
				<div itemScope className={"titlePage"}>
					<h1>Mattia Buffetti - </h1>&nbsp;<h2>{project.title}</h2>
				</div>
				<div id="projectDetail">
					<div className="row">
						<div className="col-md-6">
							<Tab
								curTask={curTask === projID ? '' : curTask}
								skills={project.skills}
								tasks={project.tasks}
								text={project.description}
								url={'/projects/' + project.url}
							/>
						</div>
						<div className="col-md-6">
							<Iframe
								url={'/projects/' + project.url}
								src={project.link}
								srcAndroid={project.linkAndroid}
								type={project.type}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

Project.propTypes = {
	history: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
	projects: PropTypes.arrayOf(PropTypes.object).isRequired,
	windowSize: PropTypes.object,
};

Project.defaultProps = {
	translation: null,
	windowSize: {},
};


const mapStateToProps = (state) => ({
	projects: get(state, 'content.projects', []),
	project: get(state, 'content.project', {}),
	windowSize: get(state, 'common.windowSize', {}),
});

const mapDispatchToProps = {
	getProjectDetail,
	setProjectsList,
};


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(
	frontloadConnect(frontload, {
		onMount: true,
		onUpdate: true,
	})(Project),
);
