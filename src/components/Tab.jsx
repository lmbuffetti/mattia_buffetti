import React  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TabItem from './TabItem';

const Tab = (props) => {
	const {
		curTask,
		url,
		skills,
		tasks,
		text,
	} = props;

	return (
		<div>
			<nav id="navTab">
				<ul>
					<li>
						<Link
							className={curTask === '' || !curTask ? 'active' : ''}
							to={url}
						>
							Project
						</Link>
					</li>
					<li>
						<Link
							className={curTask === 'tasks' ? 'active' : ''}
							to={url+'/tasks'}
						>
							Tasks
						</Link>
					</li>
					<li>
						<Link
							className={curTask === 'skills' ? 'active' : ''}
							to={url+'/skills'}
						>
							Skills
						</Link>
					</li>
				</ul>
			</nav>
			<div id="contentTab">
				<TabItem
					skills={skills}
					tasks={tasks}
					text={text}
					task={curTask}
					url={url}
				/>
			</div>
		</div>
	)
};

Tab.propTypes = {
	curTask: PropTypes.string,
	url: PropTypes.string,
	skills: PropTypes.string,
	tasks: PropTypes.string,
	text: PropTypes.string,
};

Tab.defaultProps = {
	curTask: null,
	skills: null,
	task: null,
	tasks: null,
	text: null,
};

export default Tab;
