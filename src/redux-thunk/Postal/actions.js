import Api from "../../api"

export const LOAD_POSTAL_LOADING = 'REDUX_THUNK_DELETE_COUNTRIES_LOADING';
export const LOAD_POSTAL_SUCCESS = 'REDUX_THUNK_DELETE_COUNTRIES_SUCCESS';
export const LOAD_POSTAL_ERROR = 'REDUX_THUNK_DELETE_COUNTRIES_ERROR';

export const getPostal = (zipCode) => dispatch => {
    dispatch({ type: LOAD_POSTAL_LOADING });
    Api.getPostal(zipCode)
        .then(response => response.data)
        .then(
            data => dispatch({ type: LOAD_POSTAL_SUCCESS, data }),
            error => dispatch({ type: LOAD_POSTAL_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
};