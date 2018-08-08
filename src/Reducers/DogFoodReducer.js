import uuidV4 from 'uuid/v4';

export default function DogFoodReducer( state= {
  dogs: [],
  editing: null,
}, action) {
  switch(action.type) {
    case "CREATE_DOGFOOD":
      const dogFood = {...action.payload, id: uuidV4()};
      return {...state, dogs: [...state.dogs, dogFood]};

    default:
      return state;
  }
}
