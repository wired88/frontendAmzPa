import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import final_logo from "../../assets/final_logo.png";
import {Envelope} from "react-bootstrap-icons";
import React from "react";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/"><img src={final_logo} className={"logo_h"} alt="logo.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll >
            <div style={{width: "10vmin"}}></div>
            <NavDropdown title="Clothing" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                Nike
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Addidas
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#action2">Amazon</Nav.Link>
          </Nav>
          <Nav.Link href={"http://localhost:5173/contact"} style={{color: "rgba(255, 255, 255, .8)"}}>
            Contact us
            <Envelope style={{margin: "auto 5px", marginRight: "5vmin"}}/>
          </Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;