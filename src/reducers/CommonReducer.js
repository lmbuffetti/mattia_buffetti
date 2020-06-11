import { handleActions } from 'redux-actions';
import {
  SET_WINDOW_SIZE,
  SPINNER_OFF,
  SPINNER_ON,
} from '../actions/types/CommonTypes';

export const defaultState = {
  isLoading: 1,
  windowSize: {},
};

export default handleActions(
  {
    [SPINNER_ON]: (state) => ({
      ...state,
      isLoading: state.isLoading + 1,
    }),
    [SPINNER_OFF]: (state) => ({
      ...state,
      isLoading: state.isLoading - 1 < 0 ? 0 : state.isLoading - 1 ,
    }),
    [SET_WINDOW_SIZE]: (state, action) => ({
      ...state,
      windowSize: action.payload,
    }),
  },
  defaultState,
);
