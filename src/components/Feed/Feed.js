import { Container, Card, Row, Col, Button, Image } from "react-bootstrap";
import FeedHeader from "./FeedHeader";
import { useState } from "react";

// Sample upcoming events data (with event images)
const events = [
    {
        title: "Tech Conference 2024",
        date: "October 15, 2024",
        location: "Auditorium Hall A",
        description: "Join us for a day of insightful talks and workshops on the latest trends in technology.",
        image: "https://www.techopedia.com/wp-content/uploads/2024/02/1706884145604_processed.jpg.webp", // Placeholder image URL (replace with actual image)
    },
    {
        title: "Career Fair",
        date: "October 20, 2024",
        location: "Campus Center",
        description: "Meet recruiters from top companies and learn about internship and full-time job opportunities.",
        image: "https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/6WeV3DZlr9QuBzniZ2HUZV/27deecb53c2eb3bd2bfb8bd1b7839389/Shorelight_Career_Fair_Explainer.jpg?fit=thumb",
    },
    {
        title: "Hackathon",
        date: "October 22-23, 2024",
        location: "Innovation Lab",
        description: "Collaborate with fellow students to build innovative solutions and win exciting prizes.",
        image: "https://media.licdn.com/dms/image/v2/C5612AQGcjk6BelHZ2w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1613318203099?e=1733356800&v=beta&t=sxGiv-xyGZ4tdEQoLcNzpaXQo7vtuVL3WXC8srQvSI8",
    },
    {
        title: "Art & Cultural Fest",
        date: "November 2, 2024",
        location: "Central Plaza",
        description: "A celebration of art, music, and culture. Don't miss the performances, exhibits, and food stalls.",
        image: "https://destinationwaco.org/wp-content/uploads/2016/05/Cultural-Arts-Fest-10-07-17-45.jpg",
    }
];

const Feed = () => {
    const [interestedEvents, setInterestedEvents] = useState([]);

    // Toggle interested state for an event
    const handleInterestedClick = (eventTitle) => {
        if (interestedEvents.includes(eventTitle)) {
            setInterestedEvents(interestedEvents.filter(title => title !== eventTitle));
        } else {
            setInterestedEvents([...interestedEvents, eventTitle]);
        }
    };

    return (
        <>
            <FeedHeader />
            <h3 style={{marginTop:'30px'}}>Welcome to the town hall.<br />Check out the buzz below.</h3>
            <Container className="card border-dark mb-3" style={{ marginTop: "30px", width: "95%", height: '650px', backgroundColor: "#F7F4ED", borderRadius: '10px', border: '1px #D7D7D7', display: 'flex', alignItems: 'center' }}>
                <Container style={{ width: "100%", marginTop: '20px' }}>
                   

                    {/* Scrollable Div for Events */}
                    <div style={{ height: '615px', overflowY: 'scroll', padding: '10px', backgroundColor: "#fff", borderRadius: '8px' }}>
                        <Row>
                            {events.map((event, index) => (
                                <Col key={index} xs={12} className="mb-4">
                                    <Card style={{ maxWidth: "100%" }}>
                                        <Card.Body>
                                            {/* Reduced image size */}
                                            <Image src={event.image} rounded style={{ width: "50%", margin: "0 auto", display: "block" }} />
                                            <Card.Title style={{ marginTop: '15px' }}>{event.title}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{event.date} - {event.location}</Card.Subtitle>
                                            <Card.Text>{event.description}</Card.Text>
                                             <Button
                                                variant={interestedEvents.includes(event.title) ? "dark" : "outline-dark"} // Changed variant to "dark"
                                                onClick={() => handleInterestedClick(event.title)}
                                            >
                                                {interestedEvents.includes(event.title) ? "Interested" : "Mark as Interested"}
                                            </Button>
                                        </Card.Body>
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

export default Feed;
