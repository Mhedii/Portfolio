import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
    return (
        <div color="blue" className="font-small pt-4 mt-4 bg-dark">
            <Container fluid className="text-center text-md-left">
                <Row className="text-white">
                    <Col md="6">
                        <h5 className="title">Footer Content</h5>
                        <p>
                            Our best tour planning at low cost
                        </p>
                    </Col>
                    <Col md="6">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="/services">Services</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/aboutus">About Me</a>
                            </li>
                            {/* <li className="list-unstyled">
                                <a href="/addServices">Add Services</a>
                            </li> */}
                            <li className="list-unstyled">
                                <a href="/contact">Contact Me</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-white text-center py-3">
                <Container fluid>
                    Copyright &copy; {new Date().getFullYear()} - All Rights Reserved - <span className="text-warning">MD.MEHEDI HASAN</span>
                </Container>
            </div>
        </div>
    );
};

export default Footer;