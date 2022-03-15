import {LOAD_POSTAL_LOADING, LOAD_POSTAL_SUCCESS, LOAD_POSTAL_ERROR} from "./actions";

const initialState = {
    data: [],
    loading: false,
    error: ''
};

export default function postalReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_POSTAL_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_POSTAL_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case LOAD_POSTAL_ERROR: {
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