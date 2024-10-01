// src/Footer.js
import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer expand="lg" className="footer mt-5" >
            <Container className="justify-content-center" >
                <Row>
                <Col md={2} className="text-center">
                        <p>The Logo</p>
                    </Col>
                    <Col md={2} className="text-center">
                        <p>Contact</p>
                    </Col>
                    <Col md={2} className="text-center">
                        <p>About</p>
                    </Col>
                    <Col md={2} className="text-center">
                        <p>Team</p>
                    </Col>
                    <Col md={2} className="text-center">
                    <Button variant="dark" >Log In</Button>
                    </Col>
                    <Col md={2} className="text-center">
                    <Button variant="dark" >Sign Up</Button>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
