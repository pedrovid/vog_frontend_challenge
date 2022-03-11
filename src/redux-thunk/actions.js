import Api from "../api"

export const LOAD_POSTS_LOADING = 'REDUX_THUNK_LOAD_POSTS_LOADING';
export const LOAD_POSTS_SUCCESS = 'REDUX_THUNK_LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_ERROR = 'REDUX_THUNK_LOAD_POSTS_ERROR';
export const DELETE_POSTS_LOADING = 'REDUX_THUNK_DELETE_POSTS_LOADING';
export const DELETE_POSTS_SUCCESS = 'REDUX_THUNK_DELETE_POSTS_SUCCESS';
export const DELETE_POSTS_ERROR = 'REDUX_THUNK_DELETE_POSTS_ERROR';

export const loadPosts = () => dispatch => {
    dispatch({ type: LOAD_POSTS_LOADING });

    Api.getPosts()
        .then(response => response.data)
        .then(
            data => dispatch({ type: LOAD_POSTS_SUCCESS, data }),
            error => dispatch({ type: LOAD_POSTS_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
};

export const deletePost = (id) => dispatch => {
    dispatch({ type: DELETE_POSTS_LOADING });
    Api.deletePost(id)
        .then(response => response.data)
        .then(
            data => dispatch({ type: DELETE_POSTS_SUCCESS, data }),
            error => dispatch({ type: DELETE_POSTS_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
};

export const loadPostById = (id) => dispatch => {
    dispatch({ type: LOAD_POSTS_LOADING });

    Api.getPostById(id)
        .then(response => response.data)
        .then(
            data => dispatch({ type: LOAD_POSTS_SUCCESS, data }),
            error => dispatch({ type: LOAD_POSTS_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
};

export const createPost = (data) => dispatch => {
    dispatch({ type: LOAD_POSTS_LOADING });

    Api.createPost(data)
        .then(response => response.data)
        .then(
            data => dispatch({ type: LOAD_POSTS_SUCCESS, data }),
            error => dispatch({ type: LOAD_POSTS_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
};

export const updatePost = (id, data) => dispatch => {
    dispatch({ type: LOAD_POSTS_LOADING });

    Api.editPost(id, data)
        .then(response => response.data)
        .then(
            data => dispatch({ type: LOAD_POSTS_SUCCESS, data }),
            error => dispatch({ type: LOAD_POSTS_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
};