import { handleActions } from 'redux-actions';
import {
  SET_PROJECT_LIST,
  SET_PROJECTS_LIST,
} from '../actions/types/ContentTypes';

export const defaultState = {
  project: {},
  projects: [],
};

export default handleActions(
  {
    [SET_PROJECTS_LIST]: (state, action) => ({
      ...state,
      projects: action.payload,
    }),
    [SET_PROJECT_LIST]: (state, action) => ({
      ...state,
      project: action.payload,
    }),
  },
  defaultState,
);
