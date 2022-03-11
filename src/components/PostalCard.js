import {Card, Button} from "react-bootstrap";
import * as actions from "../redux-thunk/actions";
import {useDispatch} from "react-redux";


function PostalCard({postal}) {
    const dispatch = useDispatch();

    const OnDelete = () => {
        dispatch(actions.deletePost(postal.id));
    }

    return (
        <div className="col d-flex mb-3">
            <Card style={{ width: '18rem' }}>
              <Card.Body className="d-grid justify-content-end align-items-end">
                <Card.Title>
                    {postal.title}
                </Card.Title>
                <Card.Text>
                    {postal.body}
                </Card.Text>
                <div className="row">
                    <Button variant="danger" className="mb-2" onClick={OnDelete}>Delete</Button>
                    <Button variant="primary">Update</Button>
                </div>
              </Card.Body>
            </Card>
        </div>
    )
}

export default PostalCard;