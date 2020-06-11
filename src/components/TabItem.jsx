import React  from 'react'
import PropTypes from 'prop-types';

const TabItem = (props) => {
	const {
		skills,
		tasks,
		task,
		text,
	} = props;

	switch(task) {
		case 'skills':
			return (
				<div>
					<ul dangerouslySetInnerHTML={{__html: skills}} />
				</div>
			);
		case 'tasks':
			return (
				<div>
					<div dangerouslySetInnerHTML={{__html: tasks}} />
				</div>
			);
		default:
			return (
				<div>
					<div dangerouslySetInnerHTML={{__html: text}} />
				</div>
			);
	}
};

TabItem.propTypes = {
	skills: PropTypes.string,
	task: PropTypes.string,
	tasks: PropTypes.string,
	text: PropTypes.string,
};

TabItem.defaultProps = {
	skills: null,
	task: null,
	tasks: null,
	text: null,
};

export default TabItem;
