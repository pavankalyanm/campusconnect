import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Header from '../Header';
import Lottie from 'react-lottie-player';
import landinglottie from '../assets/landinglottie.json'; // Import the Lottie animation

const MainPage = () => {
    const navigate = useNavigate(); // Initialize navigation

    // Handle the redirect to the signup page
    const handleGetStarted = () => {
        navigate("/signup"); // Redirect to the signup page
    };

    return (
        <div>
            <Header />
            {/* Inline styles for the animation */}
            <style>
                {`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                .fade-in-up {
                  animation: fadeInUp 2s ease-out;
                }
                `}
            </style>
            <Container className="mt-5" style={{ marginTop: '150px' }}>
                <Row className="justify-content-between align-items-center">
                    {/* Left-aligned text with animation */}
                    <Col md={6}>
                        <h2 className="display-4 fade-in-up">
                            <strong>Unlock Your Journey with Expert Mentors.<br /><br />Step into an Exciting New Chapter as a Fresher.</strong>
                        </h2>
                    </Col>

                    {/* Right-aligned Lottie animation */}
                    <Col md={6} className="d-flex justify-content-end">
                        <Lottie
                            loop
                            animationData={landinglottie}
                            play
                            style={{ width: '600px', height: '600px' }} // Increased size
                        />
                    </Col>
                </Row>

                {/* Get Started button centered at the bottom */}
                <Row className="justify-content-center mt-5">
                    <Col md={4} className="d-flex justify-content-center">
                        <Button variant="dark" size="lg" onClick={handleGetStarted}>
                            Get Started
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainPage;
