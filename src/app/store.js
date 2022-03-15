import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducersCombination from "../redux-thunk/ReducersCombination";

export function configureStore() {
  const store = createStore(
      reducersCombination(),
      applyMiddleware(thunk)
  );

   return store;
}