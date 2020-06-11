import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from '../reducers';
// import { getDevMode } from '../utils/helpers';

// MIDDLEWARES
import ContentMiddleware from '../middlewares/ContentMiddleware';

const enhancers = [];
const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
  if (typeof window !== 'undefined') {
    // const { devToolsExtension } = window;
    // enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(
    ...middlewares,
    ContentMiddleware,
  ),
  ...enhancers,
);

export const configureStore = createStore(rootReducer, {}, composedEnhancers);
export const store = createStore(rootReducer);
