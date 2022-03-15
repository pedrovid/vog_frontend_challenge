import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../redux-thunk/Postal/actions";
import {useState} from "react";
import CustomNavbar from "../components/Navbar";
import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import PostalLookupCard from "../components/PostalLookupCard";


function PostalLookup() {
    const [typedZip, setTypedZip] = useState("");
    const dispatch = useDispatch();


    const postalResponse = useSelector((state) => state.postal);

    if(postalResponse.Loading) {
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
                <h1>Something went wrong, try with another zipcode :(</h1>
            </div>
        );
    }

    const onInputChange = (e) => {
        setTypedZip(e.target.value);
    }

    const onSubmit = () => {
        dispatch(actions.getPostal(typedZip));
    }

    if(postalResponse.data) {
        return (
            <div style={{overflowX: "hidden"}}>
                <CustomNavbar></CustomNavbar>
                <div className="row" style={{height: "200px"}}>
                    <div className="col-12 d-flex justify-content-center mt-4">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Title</Form.Label>
                          <Form.Control type="text" value={typedZip} onChange={onInputChange}/>
                          <Button variant="success" className="mt-2 " onClick={onSubmit}>Search</Button>
                        </Form.Group>
                    </div>
                </div>

                <div className="row ms-5 p-0">
                    {postalResponse.data && postalResponse.data.places && <PostalLookupCard postal={postalResponse.data}/>}
                </div>
            </div>
        );
    }
}

export default PostalLookup;