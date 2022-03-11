import {LOAD_POSTS_ERROR, LOAD_POSTS_LOADING, LOAD_POSTS_SUCCESS} from "./actions";

const initialState = {
    data: [],
    loading: false,
    error: ''
};

export default function reduxThunkReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_POSTS_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_POSTS_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case LOAD_POSTS_ERROR: {
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