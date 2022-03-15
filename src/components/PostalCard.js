import {Card, Button} from "react-bootstrap";
import * as actions from "../redux-thunk/Posts/actions";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


function PostalCard({postal}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const OnDelete = () => {
        dispatch(actions.deletePost(postal.id));
    }

    const onUpdate = () => {
        navigate('/post/' + postal.id, { replace: false })
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
                    <Button variant="primary" onClick={onUpdate}>Update</Button>
                </div>
              </Card.Body>
            </Card>
        </div>
    )
}

export default PostalCard;