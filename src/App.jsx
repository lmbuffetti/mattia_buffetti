/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  Switch, Route, withRouter,
} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Loadable from 'react-loadable';
import Loader from './components/Loader';
import { frontloadConnect } from 'react-frontload';
import { getProjectsDetail } from './middlewares/ContentMiddleware';
// COMPONENTS
import { setWindow } from './middlewares/CommonMiddleware';
import PropTypes from 'prop-types';
import get from 'lodash/get';
// const Home = React.lazy(() => import('./Pages/Home'));
const Home = Loadable({
  loader: () => import('./Pages/Home' /* webpackChunkName: "Home" */),
  loading: Loader,
});
//const Project = React.lazy(() => import('./Pages/Project'));
const Project = Loadable({
  loader: () => import('./Pages/Project' /* webpackChunkName: "Project" */),
  loading: Loader,
});
//const About = React.lazy(() => import('./Pages/About'));
const About = Loadable({
  loader: () => import('./Pages/About' /* webpackChunkName: "About" */),
  loading: Loader,
});
//const Contact = React.lazy(() => import('./Pages/Contact'));
const Contact = Loadable({
  loader: () => import('./Pages/Contact' /* webpackChunkName: "Contact" */),
  loading: Loader,
});
//const Menu = React.lazy(() => import('./components/Menu'));
const Menu = Loadable({
  loader: () => import('./components/Menu' /* webpackChunkName: "Menu" */),
  loading: Loader,
});
// IMAGES

const frontload = async (props) => {
  try {
    if (!props.translation) {
      await props.getProjectsDetail(props);
    }
  } catch (e) {
    console.error(e);
  }
  return false;
};

const App = (props) => {
  const {
    windowSize
  } = props;

  const updateDimensions = () => {
    if (typeof window !== 'undefined') {
      const minHeight = (window.innerWidth > 767) ? window.innerHeight - 89 : window.innerHeight - 171;
      props.setWindow({width: window.innerWidth, height: window.innerHeight, minHeight: minHeight })
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions());
  }, []);

  useEffect(() => {
    props.getProjectsDetail();
  }, []);

  return (
    <>
      <Helmet>

      </Helmet>
      <header>
        <Menu url={'/'} />
      </header>
      <div id="contentSite" style={{minHeight: windowSize.minHeight}}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects/:number" component={Project} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </>
  );
};

App.propTypes = {
  windowSize: PropTypes.object,
};

App.defaultProps = {
  windowSize: {},
};

const mapStateToProps = (state) => ({
  windowSize: get(state, 'common.windowSize', {}),
});

const mapDispatchToProps = {
  getProjectsDetail,
  setWindow,
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: true,
  })(App),
);
