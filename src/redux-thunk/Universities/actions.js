import Api from "../../api"

export const LOAD_UNIVERSITIES_LOADING = 'REDUX_THUNK_DELETE_COUNTRIES_LOADING';
export const LOAD_UNIVERSITIES_SUCCESS = 'REDUX_THUNK_DELETE_COUNTRIES_SUCCESS';
export const LOAD_UNIVERSITIES_ERROR = 'REDUX_THUNK_DELETE_COUNTRIES_ERROR';

export const getUniversities = (country) => dispatch => {
    dispatch({ type: LOAD_UNIVERSITIES_LOADING });
    Api.getUniversities(country)
        .then(response => response.data)
        .then(
            data => dispatch({ type: LOAD_UNIVERSITIES_SUCCESS, data }),
            error => dispatch({ type: LOAD_UNIVERSITIES_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
};