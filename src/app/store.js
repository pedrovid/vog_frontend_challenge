import { applyMiddleware, createStore } from 'redux';
import reduxThunkReducer from '../redux-thunk/reducer';
import thunk from 'redux-thunk';

export function configureStore() {
  const store = createStore(
      reduxThunkReducer,
      applyMiddleware(thunk)
  );

   return store;
}