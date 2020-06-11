import { createActions } from 'redux-actions';
import {
  SET_WINDOW_SIZE,
  SPINNER_OFF,
  SPINNER_ON,
} from './types/CommonTypes';

export const {
  spinnerOn,
  spinnerOff,
  setWindowSize,
} = createActions({
  [SET_WINDOW_SIZE]: (payload) => payload,
  [SPINNER_ON]: (payload) => payload,
  [SPINNER_OFF]: (payload) => payload,
});
