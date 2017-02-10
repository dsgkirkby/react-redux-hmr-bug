import {combineReducers} from 'redux';
import layoutReducer from './layout';

const reducers = {
  layout: layoutReducer,
};

export default combineReducers(reducers);
