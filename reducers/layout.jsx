import {TOGGLE_APP_DRAWER, SWITCH_VIEW} from '../actions/layout';
import viewTypeMapping from '../constants/mappings/view-components';

const initialState = {
  appDrawerOpen: false,
  openView: Object.keys(viewTypeMapping)[0],
  openViewArgs: {}
};

export default (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_APP_DRAWER:
      return {
        ...state,
        appDrawerOpen: !state.appDrawerOpen
      };
    case SWITCH_VIEW:
      return {
        ...state,
        appDrawerOpen: false,
        openView: action.view,
        openViewArgs: action.args
      };
    default:
      return state;
  }
};
