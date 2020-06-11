import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'

import Menu from './components/Menu';
import About from './Section/About'
import Contact from './Section/Contact'
import Project from './Section/Project'
import Home from './Home'
import axios from 'axios';
import { Helmet } from 'react-helmet';
const urlSite = '/';
export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			project: []
		};
	}
	updateDimensions() {
		if(typeof window !== 'undefined') {
			if (window.innerWidth < 500) {
				this.setState({width: 450, height: 102});
			} else {
				let update_width  = window.innerWidth - 100;
				let update_height = Math.round(update_width / 4.4);
				this.setState({width: update_width, height: update_height});
			}
		}
		var _this = this;
		this.serverRequestCatMerc =
			axios
			.get("/project")
			.then(function(result) {
				_this.setState({
					project: result.data.project.reverse(),
                    loading: false
				});
			}).catch(function (error) {
				console.log(error);
			});
	}
	componentDidMount () {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions.bind(this));
	}
	componentWillUnmount () {
		this.removeListener();
		if(typeof window !== 'undefined') {
			window.removeEventListener("resize", this.updateDimensions.bind(this));
		}
	}
	render() {
		if(typeof window !== 'undefined') {
			var minHeight = (window.innerWidth > 767) ? window.innerHeight - 89 : window.innerHeight - 171;
		}
		return this.state.loading === true ? <h1>Loading</h1> : (
			<BrowserRouter>
				<div>
					<Helmet
						link={[
							{ rel: 'canonical', content: 'http://mattiabuffetti.com' }
						]}
					/>
					<header>
						<Menu url={urlSite} />
					</header>
					<div id="contentSite" style={{minHeight: minHeight}}>
						<Switch>
							<Route
                                exact
                                path={urlSite}
								render={(props) => ( <Home url={urlSite} {...props} json={this.state.project}  /> )}
							/>
							<Route
                                exact
                                path={urlSite+'home'}
								render={(props) => ( <Home url={urlSite} {...props} json={this.state.project} /> )}
							/>
							<Route
								exact
								path={urlSite+'projects/:number'}
								render={(props) => (
									<Project
                                        {...props}
                                        url={urlSite}
										json={this.state.project}
									/>
								)}
							/>
							<Route
                                exact
                                path={urlSite+'projects/:number/tasks'}
                                render={(props) => (
                                    <Project
                                        {...props}
                                        url={urlSite}
                                        json={this.state.project}
                                    />
                                )}
                            />
							<Route
                                exact
                                path={urlSite+'projects/:number/skills'}
                                render={(props) => (
                                    <Project
                                        {...props}
                                        url={urlSite}
                                        json={this.state.project}
                                    />
                                )}
                            />
							<Route
								exact
								path={urlSite+'about'}
								component={About}
							/>
							<Route
                                exact
                                path={urlSite+'about/skills'}
                                component={About}
                            />
							<Route
                                exact
                                path={urlSite+'about/experience'}
                                component={About}
                            />
							<Route
								exact
								path={urlSite+'contact'}
								render={(props) => ( <Contact url={urlSite} {...props} json={this.state.project} /> )}
							/>
						</Switch>
					</div>
					<footer>
						<div>
							<p>VAT: IT03253260545 <span>·</span> <a href="mailto:mattia.buffetti@gmail.com">mattia.buffetti@gmail.com</a> <span>·</span> <a href="skype:mattia.buffetti">mattia.buffetti</a> <span>·</span> <a href="tel:+393286930881">+39 328.6930881</a></p>
						</div>
					</footer>
				</div>
			</BrowserRouter>
		);
	}
}
