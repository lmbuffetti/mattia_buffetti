import {
  SET_PROJECT_LIST,
  SET_PROJECTS_LIST,
} from '../actions/types/ContentTypes';

import { Projects } from '../resources/project';

function sortByProperty(array,property,order="ASC") {
  return array.sort((a,b) => order === "ASC" ?
    a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0
    : a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0
  );
}

export const getProjectsDetail = (action, store) => (dispatch) => {
  dispatch({ type: SET_PROJECTS_LIST, payload: sortByProperty(Projects.project,"ID","DESC") });
};

export const setProjectsList = (action, store) => (dispatch) => {
  dispatch({ type: SET_PROJECT_LIST, payload: { } });
}

export const getProjectDetail = (action, projects) => (dispatch) => {
  let proj = projects.find(item => item.url === action);
  if (!proj) proj = { loaded: true }
  else proj.loaded = true;
  dispatch({ type: SET_PROJECT_LIST, payload: proj });
};

const checkProperty = () => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
  }
};

export default checkProperty;
