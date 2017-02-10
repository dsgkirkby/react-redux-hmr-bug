const initialState = {
  shown: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_SHOWN':
      return {
        ...state,
        shown: !state.shown
      };
    default:
      return state;
  }
};
