import {LOAD_COUNTRIES_SUCCESS, LOAD_COUNTRIES_ERROR, LOAD_COUNTRIES_LOADING,} from "./actions";

const initialState = {
    data: [],
    loading: false,
    error: ''
};

export default function countriesReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_COUNTRIES_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_COUNTRIES_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case LOAD_COUNTRIES_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
}