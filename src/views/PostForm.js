import Form from 'react-bootstrap/Form'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../redux-thunk/actions";
import {useMemo, useState} from "react";
import CustomNavbar from "../components/Navbar";
import * as React from "react";
import {Button} from "react-bootstrap";


function PostForm() {
    const params = useParams()
    const [postal, setPostal] = useState({
        title: "",
        body: ""
    })

    const dispatch = useDispatch();
    useMemo(() => {
        dispatch(actions.loadPostById(params.id));
    }, [params.id]);

    let submit = () => {
        dispatch(actions.createPost(postal))
    }

    const postalResponse = useSelector(state => state);

    if (params.id) {
        console.log(params.id, postalResponse);

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
            //setPostal({...postalResponse.data});
        }
    }

    const changeTitle = (e) => {
        console.log(e.target);
        setPostal(prevState => ({...prevState, title: e.target.value}));
    }

    const changeBody = (e) => {
        setPostal(prevState => ({...prevState, body: e.target.value}));
    }

    return (
        <div className="col-12">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={postal.title} onChange={changeTitle}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Body</Form.Label>
                <Form.Control as="textarea" rows={5} value={postal.body} onChange={changeBody} />
              </Form.Group>
              <div className="col-12 d-flex justify-content-end mt-4">
                  <Button variant="success" className="mb-2" onClick={submit}>Save</Button>
              </div>
            </Form>
        </div>
    )
}

export default PostForm;