import Form from 'react-bootstrap/Form'
import {useEffect, useState} from "react";
import * as React from "react";
import {Button} from "react-bootstrap";
import * as actions from "../redux-thunk/Posts/actions";


function IntermediateComponentPostForm({postal, submit}) {
    const [localPostal, setPostal] = useState(postal);
    useEffect(() => {
        setPostal(postal)
    }, [postal]);


    const changeTitle = (e) => {
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
                <Form.Control type="text" value={localPostal.title} onChange={changeTitle}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Body</Form.Label>
                <Form.Control as="textarea" rows={5} value={localPostal.body} onChange={changeBody} />
              </Form.Group>
              <div className="col-12 d-flex justify-content-end mt-4">
                  <Button variant="success" className="mb-2" onClick={() => submit(localPostal)}>Save</Button>
              </div>
            </Form>
        </div>
    )
}

export default IntermediateComponentPostForm;