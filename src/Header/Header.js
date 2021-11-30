
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {

    return (
        <div>



            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className="text-danger fs-2">Mehedi <span className="text-warning">Hasan </span></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fs-4">
                            <Nav.Link href="/home" className="fw-bold text-white">Home</Nav.Link>
                            <Nav.Link href="/aboutme">About Me</Nav.Link>
                            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/contact">Contact Me</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    );
};


export default Header;