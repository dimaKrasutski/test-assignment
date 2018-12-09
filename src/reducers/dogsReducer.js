import { GET_DOGS, CURR_DOG, DOG_LOADING } from '../actions/actionTypes';

const initialState = {
  dog: null,
  dogs: null,
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {

    case GET_DOGS:
      return { ...state, dogs: action.payload, loading: false };

    case CURR_DOG:
      return { ...state, dog: action.payload, loading: false };

    case DOG_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
}