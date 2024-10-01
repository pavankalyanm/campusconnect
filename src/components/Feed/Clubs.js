import { Container, Card, Row, Col, Button, Image } from "react-bootstrap";
import FeedHeader from "./FeedHeader";
import { useState, useEffect } from "react";

// Sample clubs data (with images)
const clubs = [
    
    {
        name: "The Project Management Club",
        description: "A club for aspiring project managers",
        image: "https://plan.io/images/blog/project-lifecycle.png?1726569187", // Placeholder image URL (replace with actual image)
        members: 400
    },
    {
        name: "The Business Club",
        description: "A club for aspiring business minds",
        image: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/302185930_920600905522944_8097141043109167417_n.png?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=k_WTqUexBiUQ7kNvgFx1ho7&_nc_ht=scontent-hou1-1.xx&oh=00_AYAINJseE_4_2uZHxG7_C6nZ1aQskGlUnA1TPGxG-omtog&oe=67022473", // Placeholder image URL (replace with actual image)
        members: 400
    },
    {
        name: "The Product Base Club",
        description: "The club for people who aspire to be product managers",
        image: "https://media.licdn.com/dms/image/v2/C4E0BAQFjwWw8bLUd7w/company-logo_200_200/company-logo_200_200/0/1630565750302/theproductbase_logo?e=1735776000&v=beta&t=CgU_O7-1_iSoGKFTLOtRSbx_P-iS2p8CkpgQHw5ekMM", // Placeholder image URL (replace with actual image)
        members: 690
    },
    {
        name: "The Competitive Coders",
        description: "Join us to learn or improve your coding skills",
        image: "https://media.licdn.com/dms/image/v2/D5612AQFbUqwt4-lmzw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1701619466211?e=1733356800&v=beta&t=M0WRJcGC5wOM1h_yoGTClIE7hf3sIk4nf6uDPKMdsNs", // Placeholder image URL (replace with actual image)
        members: 213
    }
];

const Clubs = () => {
    const [joinedClubs, setJoinedClubs] = useState([]);
    const [userName, setUserName] = useState("User"); // Default value while fetching

    // Simulate fetching user's name from the backend
    useEffect(() => {
        async function fetchUserName() {
            // Simulate an API call to get the user's name
            const name = await new Promise((resolve) => setTimeout(() => resolve("Jack"), 1000));
            setUserName(name);
        }
        fetchUserName();
    }, []);

    // Function to handle joining a club
    const handleJoinClub = (clubName) => {
        if (!joinedClubs.includes(clubName)) {
            setJoinedClubs([...joinedClubs, clubName]);
        }
    };

    return (
        <>
            <FeedHeader />
            <h3 style={{marginTop:'30px'}}>Hello.<br />The following clubs match your interests</h3>
            <Container className="card border-dark mb-3" style={{ marginTop: "30px", width: "90%", height: 'auto', backgroundColor: "#F7F4ED", borderRadius: '10px', border: '1px #D7D7D7', display: 'flex', alignItems: 'center' }}>
                <Container style={{ width: "100%", marginTop: '20px' }}>

                    {/* Scrollable Div for Clubs */}
                    <div style={{ height: '630px', overflowY: 'scroll', padding: '10px', backgroundColor: "#fff", borderRadius: '8px' }}>
                        <Row>
                            {clubs.map((club, index) => (
                                <Col key={index} xs={12} className="mb-4">
                                    <Card className="d-flex align-items-center" style={{ borderRadius: '15px', padding: '10px', backgroundColor: '#f7f7f7' }}>
                                        <Row className="w-100">
                                            <Col xs={3} className="d-flex justify-content-center align-items-center">
                                                <Image src={club.image} roundedCircle style={{ width: "70px", height: "70px" }} />
                                            </Col>
                                            <Col xs={7}>
                                                <Card.Body>
                                                    <Card.Title style={{ fontSize: '16px', fontWeight: 'bold' }}>{club.name}</Card.Title>
                                                    <Card.Text style={{ fontSize: '14px', color: '#6c757d' }}>{club.description}</Card.Text>
                                                    <Card.Text style={{ fontSize: '12px', color: '#6c757d' }}>
                                                        <i className="bi bi-chat"></i> {club.members} Members
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>
                                            <Col xs={2} className="d-flex justify-content-center align-items-center">
                                                <Button 
                                                    variant={joinedClubs.includes(club.name) ? "success" : "outline-dark"} 
                                                    onClick={() => handleJoinClub(club.name)}
                                                    style={{ fontSize: '14px', borderRadius: '20px', padding: '5px 20px' }}
                                                >
                                                    {joinedClubs.includes(club.name) ? "Joined" : "Join Club"}
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

export default Clubs;
