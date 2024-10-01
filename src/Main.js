// src/Main.js
import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import hibiscus from './assets/hibiscus.png';
import hibiscusleaf from './assets/hibiscusleaf.png';
import orchid from './assets/orchid.png';
import orchidleaf from './assets/orchidleaf.png';

const Main = () => {
    return (
        
            <><div className="position-absolute top-50 start-0 translate-middle-y">
            <img src={hibiscus} alt="Hibiscus" className="flower hibiscus" />
            <img src={hibiscusleaf} alt="Hibiscus Leaf" className="leaf hibiscus-leaf" />
            <img src={orchid} alt="Orchid" className="flower orchid" />
            <img src={orchidleaf} alt="Orchid Leaf" className="leaf orchid-leaf" />
        </div>
            <Container className="text-center">
                <h1>Meet people to validate</h1>
                <h1>your ideas!</h1>
                <p>Bunch of random text to tell people what we do and why we do it</p>
                <Button variant="dark">Get Started</Button>
                </Container>
                <Row className="mt-5">
                    <Col md={6}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Validate your ideas</Card.Title>
                                <Card.Text>
                                    Bunch of random text to tell people what we do and why we do it
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Find people to talk to and have debates or discussions with</Card.Title>
                                <Card.Text>
                                    Bunch of random text to tell people what we do and why we do it
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h2 className="my-5">How does it work?</h2>
                <Row>
                    <Col md={2}>
                        <Card className="step">
                            <Card.Body>
                                <Card.Text>Step 1</Card.Text>
                                <Card.Text>You add what you want to talk about and what you can talk about.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card className="step">
                            <Card.Body>
                                <Card.Text>Step 2</Card.Text>
                                <Card.Text>You pick a topic, number of people, and potential data.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card className="step">
                            <Card.Body>
                                <Card.Text>Step 3</Card.Text>
                                <Card.Text>You make an announcement on the town hall page.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card className="step">
                            <Card.Body>
                                <Card.Text>Step 4</Card.Text>
                                <Card.Text>Interested people ring your bell after seeing your announcement.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card className="step">
                            <Card.Body>
                                <Card.Text>Step 5</Card.Text>
                                <Card.Text>You get together and talk about stuff that you both love.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
    );
};

export default Main;
