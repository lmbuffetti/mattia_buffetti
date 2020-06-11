import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { Frontload } from 'react-frontload';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable'
import RouterHistory from './store/history';
import App from './App';
import { configureStore } from './store';
import * as serviceWorker from './serviceWorker';
import './styles/SCSS/general/main.scss';

const store = configureStore;
const root = document.getElementById('root');

const AppDOM = () => (
  <Provider store={store}>
    <BrowserRouter history={RouterHistory}>
      <Frontload>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Frontload>
    </BrowserRouter>
  </Provider>
);

if (root.hasChildNodes() === true) {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(<AppDOM />, root);
  });
} else {
  ReactDOM.render(<AppDOM />, root);
}

serviceWorker.unregister();
