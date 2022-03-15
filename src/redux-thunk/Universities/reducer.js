import {LOAD_UNIVERSITIES_LOADING, LOAD_UNIVERSITIES_ERROR, LOAD_UNIVERSITIES_SUCCESS} from "./actions";

const initialState = {
    data: [],
    loading: false,
    error: ''
};

export default function universitiesReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_UNIVERSITIES_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_UNIVERSITIES_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case LOAD_UNIVERSITIES_ERROR: {
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