import { GET_DOGS, DOG_LOADING, CURR_DOG } from './actionTypes';
import axios from 'axios';

export const getDogs = () => dispatch => {
  dispatch(setDogLoading());
  axios.get('https://dog.ceo/api/breed/hound/images/random/15').then(res => dispatch({
    type: GET_DOGS,
    payload: res.data.message
  })).catch(err => dispatch({
    type: GET_DOGS,
    payload: {}
  }))
}

export const currDog = (dog) => {
  return {
    type: CURR_DOG,
    payload: dog
  };
}

export const setDogLoading = () => {
  return {
    type: DOG_LOADING
  };
};
