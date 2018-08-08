import uuidV4 from 'uuid/v4';

export default function DogReducer( state = {
  dogs: [],
  editing: null,
}, action) {
  switch(action.type) {
    case "CREATE_DOG":
      const dog = {...action.payload, id: uuidV4()};
      return {...state, dogs: [...state.dogs, dog]};

    default:
      return state;
  }
}
