import { Container, Card, Row, Col, Button } from "react-bootstrap";
import FeedHeader from "./FeedHeader";
import { useState } from "react";

// Sample recommended courses data
const courses = [
    {
        name: "MIS 6382 Object Oriented Programming in Python",
        description: "Learn object-oriented programming with Python, a critical skill for tech product managers.",
        category: "IT Core",
    },
    {
        name: "MIS 6308 System Analysis and Project Management",
        description: "Gain a strong foundation in project management and system analysis for tech projects.",
        category: "IT Core",
    },
    {
        name: "BUAN 6320 Database Foundations for Business Analytics",
        description: "Understand databases and how they support analytics for data-driven decision making.",
        category: "IT Core",
    },
    {
        name: "OPRE 6301 Statistics and Data Analysis",
        description: "Learn how to perform statistics and data analysis, essential for data-driven product management.",
        category: "Business Core - Statistics",
    },
    {
        name: "MKT 6301 Marketing Management",
        description: "Master marketing strategies to position and launch products effectively.",
        category: "Business Core - Marketing",
    },
    {
        name: "OB 6332 Negotiation and Dispute Resolution",
        description: "Develop negotiation and conflict resolution skills for managing teams and stakeholders.",
        category: "Business Core - Organizational Behavior",
    },
    {
        name: "MIS 6393 Foundations of Digital Product Management",
        description: "Learn the principles of digital product management and how to take products from concept to launch.",
        category: "Elective - Product Management",
    },
    {
        name: "MIS 6360 Agile Project Management",
        description: "Master Agile methodologies for managing cross-functional product development teams.",
        category: "Elective - Project Management",
    },
    {
        name: "MIS 6375 Technology and New Product Development",
        description: "Oversee the development of new technology products, from ideation to market release.",
        category: "Elective - Product Management",
    },
    {
        name: "MIS 6396 User Experience Design",
        description: "Learn the fundamentals of user experience (UX) design to build intuitive, user-friendly products.",
        category: "Elective - Product Management",
    },
];

const Courses = () => {
    return (
        <>
            <FeedHeader />
            <h3 style={{ marginTop: '30px' }}>Hello.<br />The following courses match your interest goals.</h3>
            <Container className="card border-dark mb-3" style={{ marginTop: "30px", width: "90%", height: 'auto', backgroundColor: "#F7F4ED", borderRadius: '10px', border: '1px #D7D7D7', display: 'flex', alignItems: 'center' }}>
                <Container style={{ width: "100%", marginTop: '20px' }}>

                    {/* Scrollable Div for Courses */}
                    <div style={{ height: '630px', overflowY: 'scroll', padding: '10px', backgroundColor: "#fff", borderRadius: '8px' }}>
                        <Row>
                            {courses.map((course, index) => (
                                <Col key={index} xs={12} className="mb-4">
                                    <Card className="d-flex align-items-center" style={{ borderRadius: '15px', padding: '10px', backgroundColor: '#f7f7f7' }}>
                                        <Row className="w-100">
                                            <Col xs={8}>
                                                <Card.Body>
                                                    <Card.Title style={{ fontSize: '16px', fontWeight: 'bold' }}>{course.name}</Card.Title>
                                                    <Card.Text style={{ fontSize: '14px', color: '#6c757d' }}>{course.description}</Card.Text>
                                                    <Card.Text style={{ fontSize: '12px', color: '#6c757d' }}>
                                                        <i className="bi bi-book"></i> {course.category}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>
                                            <Col xs={4} className="d-flex justify-content-center align-items-center">
                                                <Button 
                                                    variant="outline-dark" 
                                                    style={{ fontSize: '14px', borderRadius: '20px', padding: '5px 20px' }}
                                                >
                                                    View in Coursebook
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

export default Courses;
