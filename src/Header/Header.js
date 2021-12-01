
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
                            <Nav.Link href="/home" className="text-white">Home</Nav.Link>
                            <Nav.Link href="/aboutme" className="text-white">About Me</Nav.Link>
                            <Nav.Link href="/portfolio" className="text-white">Portfolio</Nav.Link>
                            <Nav.Link href="/services" className="text-white">Services</Nav.Link>
                            <Nav.Link href="/contact" className="text-white">Contact Me</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    );
};


export default Header;