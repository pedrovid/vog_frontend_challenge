import { combineReducers } from "redux";
import PostReducer from "./Posts/reducer.js";
import universitiesReducer from "./Universities/reducer.js";
import countriesReducer from "./Countries/reducer.js";

const reducersCombination = () =>
	combineReducers({
		posts: PostReducer,
		countries: countriesReducer,
		universities: universitiesReducer,
	});

export default reducersCombination;