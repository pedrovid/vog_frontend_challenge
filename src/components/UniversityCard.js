import {Card, ListGroup, ListGroupItem} from "react-bootstrap";


function UniversityCard({university}) {

    return (
        <div className="col d-flex mb-3">
            <Card style={{ width: '18rem' }}>
              <Card.Body className="d-grid justify-content-end align-items-end">
                <Card.Title>
                    {university.name}
                </Card.Title>
                <Card.Text>
                    {university.country}
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
    )
}

export default UniversityCard;