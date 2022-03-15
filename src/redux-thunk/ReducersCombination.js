import { combineReducers } from "redux";
import PostReducer from "./Posts/reducer.js";
import universitiesReducer from "./Universities/reducer.js";
import countriesReducer from "./Countries/reducer.js";
import postalReducer from "./Postal/reducer";

const reducersCombination = () =>
	combineReducers({
		posts: PostReducer,
		countries: countriesReducer,
		universities: universitiesReducer,
		postal: postalReducer
	});

export default reducersCombination;