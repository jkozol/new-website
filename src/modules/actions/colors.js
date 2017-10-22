export const SET_COLOR_ACTIVE = 'SET_COLOR_ACTIVE';
export function setColorActive(color) {
  return {
    type: SET_COLOR_ACTIVE,
    payload: {
      color,
    },
  };
}

export const SET_COLOR_TEXT = 'SET_COLOR_TEXT';
export function setColorText(color) {
  return {
    type: SET_COLOR_TEXT,
    payload: {
      color,
    },
  };
}
