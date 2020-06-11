import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImgAppStore from '../images/appStore.svg';
import ImgAndroidStore from '../images/playStore.svg';

const Iframe = (props) => {
	const {
		src,
		srcAndroid,
		type,
	} = props;
	// STATE
	const [screen, setScreen] = useState('mac');
	if (type === 'website') {
		return (
			<div>

				<div id="navTabIframe">
					<nav>
						<ul>
							<li>
								<button
									className={screen === 'mac' ? 'active' : ''}
									onClick={() => setScreen('mac')}
								>
									Desktop
								</button>
							</li>
							<li>
								<button
									className={screen === 'mobile' ? 'active' : ''}
									onClick={() => setScreen('mobile')}
								>
									Mobile
								</button>
							</li>
						</ul>
					</nav>
				</div>
				<div id="contentTabIframe">
					<div className={screen}>
						<div>
							<iframe src={src} title="Project" />
						</div>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div id="btnStore">
				<a href={src} target="_blank" rel="noopener noreferrer">
					<img src={ImgAppStore} alt="App Store Button" />
				</a>
				{
					srcAndroid && (
						<a href={srcAndroid} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '15px' }}>
							<img src={ImgAndroidStore} alt="App Store Button" />
						</a>
					)
				}
			</div>
		)
	}
};

Iframe.propTypes = {
	src: PropTypes.string,
	srcAndroid: PropTypes.string,
	type: PropTypes.string,
};

Iframe.defaultProps = {
	src: null,
	srcAndroid: null,
	type: null,
};

export default Iframe;
