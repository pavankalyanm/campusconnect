import { Container, Card, Row, Col, Button, Image } from "react-bootstrap";
import FeedHeader from "./FeedHeader";
import { useState, useEffect } from "react";

// Sample friends data
const friends = [
    {
        name: "Jack",
        image: "https://via.placeholder.com/100", // Placeholder image URL (replace with actual image)
        commonInterests: 9
    },
    {
        name: "Kyle",
        image: "https://via.placeholder.com/100", // Placeholder image URL (replace with actual image)
        commonInterests: 8
    },
    {
        name: "Anna",
        image: "https://via.placeholder.com/100", // Placeholder image URL (replace with actual image)
        commonInterests: 6
    },
    {
        name: "Murthy",
        image: "https://via.placeholder.com/100", // Placeholder image URL (replace with actual image)
        commonInterests: 7
    },
    {
        name: "Mathew",
        image: "https://via.placeholder.com/100", // Placeholder image URL (replace with actual image)
        commonInterests: 9
    },
    {
        name: "Kumar",
        image: "https://via.placeholder.com/100", // Placeholder image URL (replace with actual image)
        commonInterests: 8
    }
];

const Friends = () => {
    return (
        <>
            <FeedHeader />
            <h3 style={{ marginTop: '30px' }}>Hello, Jack.<br />These are people who match your interests, they can be your potential mentors.</h3>
            <Container className="card border-dark mb-3" style={{ marginTop: "30px", width: "90%", height: 'auto', backgroundColor: "#F7F4ED", borderRadius: '10px', border: '1px #D7D7D7', display: 'flex', alignItems: 'center' }}>
                <Container style={{ width: "100%", marginTop: '20px' }}>

                    {/* Scrollable Div for Friends */}
                    <div style={{ height: '630px', overflowY: 'scroll', padding: '10px', backgroundColor: "#fff", borderRadius: '8px' }}>
                        <Row>
                            {friends.map((friend, index) => (
                                <Col key={index} xs={6} className="mb-4">
                                    <Card className="d-flex align-items-center" style={{ borderRadius: '15px', padding: '10px', backgroundColor: '#f7f7f7' }}>
                                        <Row className="w-100">
                                            <Col xs={3} className="d-flex justify-content-center align-items-center">
                                                <Image src={friend.image} roundedCircle style={{ width: "70px", height: "70px" }} />
                                            </Col>
                                            <Col xs={6}>
                                                <Card.Body>
                                                    <Card.Title style={{ fontSize: '16px', fontWeight: 'bold' }}>{friend.name}</Card.Title>
                                                    <Card.Text style={{ fontSize: '14px', color: '#6c757d' }}>
                                                        {friend.commonInterests} Common Interests
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>
                                            <Col xs={3} className="d-flex justify-content-center align-items-center">
                                                <Button 
                                                    variant="outline-dark" 
                                                    style={{ fontSize: '14px', borderRadius: '20px', padding: '5px 20px' }}
                                                >
                                                    Send Request
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </Container>
        </>
    );
};

export default Friends;
