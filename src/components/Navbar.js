import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function CustomNavbar() {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">VOG Challenge</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#link">Universities</Nav.Link>
                <Nav.Link href="posts">Postal Lookup</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    )
}

export default CustomNavbar;