import { combineReducers } from 'redux';
import DogReducer from './DogReducer';

export default combineReducers({
  dogs: DogReducer,
});
