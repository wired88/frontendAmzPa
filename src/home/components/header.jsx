import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import final_logo from "../../assets/final_logo.png";
import {Envelope} from "react-bootstrap-icons";
import amzSmile from "../../assets/amzSmile.png";
import {useState} from "react";

function Header() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" style={{zIndex: "18"}}>
        <Container fluid>
          <Navbar.Brand href="/"><img src={final_logo} className={"logo_h"} alt="logo.png"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll >
              <div className={"amz_partnerDiv"} >
                <p className={"superHeader"}>
                  OFFICIAL AMAZON PARTNER
                </p>
                <img className={"amzSmile"} src={amzSmile} alt="smile.png"/>
              </div>
            </Nav>
            <Nav.Link href={"/faq"} id={"faqField"} style={{color: "rgba(255, 255, 255, .8)", marginRight: "5vmin"}}>
              FAQ
            </Nav.Link>
            <Nav.Link href={"/contact"} id={"contactField"} style={{color: "rgba(255, 255, 255, .8)"}}>
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
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
  );
}

export default Header;