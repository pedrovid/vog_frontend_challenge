import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../redux-thunk/Posts/actions";
import {useEffect} from "react";
import CustomNavbar from "../components/Navbar";
import PostalCard from "../components/PostalCard";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


function Posts() {
    const navigate = useNavigate();
    const postsResponse = useSelector((state) => state.posts);
    console.log(postsResponse)
    const onCreate = () => navigate('/post', { replace: false });

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.loadPosts());
    }, []);

    if(postsResponse.isLoading) {
        return (
            <div>
                <CustomNavbar></CustomNavbar>
                <h1>Loading...</h1>
            </div>
        );
    }

    if(postsResponse.error) {
        return (
            <div>
                <CustomNavbar></CustomNavbar>
                <h1>Something went wrong :(</h1>
            </div>
        );
    }

    if(postsResponse.data) {
        return (
            <div style={{overflowX: "hidden"}}>
                <CustomNavbar></CustomNavbar>
                <div className="col-12 d-flex justify-content-end mt-4">
                    <Button variant="info" className="mb-2" onClick={onCreate}>Create Postal</Button>
                </div>
                <div className="row mt-4 ms-5 p-0">
                    {postsResponse.data.map((post) => <PostalCard postal={post}
                                                                  key={post.id}
                                                                  className="m-3"/>)}
                </div>
            </div>
        );
    }
}

export default Posts;