import {
  SET_WINDOW_SIZE,
} from '../actions/types/CommonTypes';

export const setWindow = (action) => (dispatch) => {
  dispatch({ type: SET_WINDOW_SIZE, payload: action });
};

const checkCommon = () => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
  }
};

export default checkCommon;
