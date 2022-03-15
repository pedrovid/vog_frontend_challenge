import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../redux-thunk/Posts/actions";
import {useEffect} from "react";
import CustomNavbar from "../components/Navbar";
import * as React from "react";
import IntermediateComponentPostForm from "../components/intermediateComponentPostForm";


function PostForm() {
    let navigate = useNavigate();
    const params = useParams();
    const postalResponse = useSelector(state => state);
    const postal = {
        title: "",
        body: ""
    };


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.loadPostById(params.id));
    }, [params.id]);
    let submit = (data) => {
        dispatch(actions.createPost(data));
        navigate('..', { replace: false });
    }

    if (params.id) {
        submit = (data) => {
            dispatch(actions.updatePost(params.id, data));
            navigate('..', { replace: false });
        }

        if(postalResponse.isLoading) {
            return (
                <div>
                    <CustomNavbar></CustomNavbar>
                    <h1>Loading...</h1>
                </div>
            );
        }

        if(postalResponse.error) {
            return (
                <div>
                    <CustomNavbar></CustomNavbar>
                    <h1>Something went wrong :(</h1>
                </div>
            );
        }

        if(postalResponse.data) {

            return (
                <IntermediateComponentPostForm postal={postalResponse.data} submit={submit}></IntermediateComponentPostForm>
            )
        }
    }

    return (
        <IntermediateComponentPostForm postal={postal} submit={submit}></IntermediateComponentPostForm>
    )
}

export default PostForm;