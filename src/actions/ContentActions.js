import { createActions } from 'redux-actions';
import {
  SET_PROJECTS_LIST,
  SET_PROJECT_LIST,
} from './types/ContentTypes';

export const {
  setProjectList,
  setProjectsList,
} = createActions({
  [SET_PROJECTS_LIST]: (payload) => payload,
  [SET_PROJECT_LIST]: (payload) => payload,
});
