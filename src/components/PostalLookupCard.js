import {Card} from "react-bootstrap";


function PostalLookupCard({postal}) {

    return (
        <div className="col d-flex mb-3">
            <Card style={{ width: '18rem' }}>
              <Card.Body className="d-grid justify-content-end align-items-end">
                <Card.Title>
                    {postal["post code"]}
                </Card.Title>
                <Card.Text>
                    {postal.country}
                </Card.Text>
              </Card.Body>
                {postal.places.map(place => <p key={place.longitude + place.latitude}>{place.state} - {place["place name"]}</p>)}
            </Card>
        </div>
    )
}

export default PostalLookupCard;