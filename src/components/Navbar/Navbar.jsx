import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Image } from "react-bootstrap";
import Logo from "../../images/logo.png";

function OffcanvasExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand}>
          <Container fluid>
            <Navbar.Brand href="/"><Image src={Logo} style={{width: 60, height: "auto"}} /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="middle"
            >
              <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 navigation">
                  <Nav.Link href="/"><h5 className="mx-3">Home</h5></Nav.Link>
                  <Nav.Link href="/about" className="mx-3">About</Nav.Link>
                  <NavDropdown
                    title="Pages"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="mx-4"
                  >
                    <NavDropdown.Item href="/testimonials">Testimonials</NavDropdown.Item>
                    <NavDropdown.Item href="/collections">
                      Collections
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/subscribe">
                      Subscribe
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/footer">
                      Footer
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Button variant="primary" className="mx-3" onClick={handleShow}>Contact Us</Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>PETSLIFE SOLUTION</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You can reach us on: <i> +254 754 159 938 </i></Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                </Modal>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} 
    </>
  );
}

export default OffcanvasExample;