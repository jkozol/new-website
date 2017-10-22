import {
  SET_COLOR_ACTIVE, SET_COLOR_TEXT,
} from '../actions/colors';

const colors = (state = [], action) => {
  switch (action.type) {
    case SET_COLOR_ACTIVE:
      return {
        ...state,
        colorActive: action.payload.color,
      };
    case SET_COLOR_TEXT:
      return {
        ...state,
        colorText: action.payload.color,
      };
    default:
      return state;
  }
}

export default colors;
