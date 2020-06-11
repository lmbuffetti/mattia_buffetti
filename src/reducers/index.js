import { combineReducers } from 'redux';
// import { reducer as form } from 'redux-form';
import content from './ContentReducer';
import common from './CommonReducer';

export const rootReducer = combineReducers({
  common,
  content,
});

export default rootReducer;
