import { combineReducers } from 'redux';
import DogFoodReducer from './DogFoodReducer';

export default combineReducers({
  dogFood: DogFoodReducer,
});
