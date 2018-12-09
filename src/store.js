import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import DogsReducer from './reducers/dogsReducer';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dogs: DogsReducer,
    }),
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
