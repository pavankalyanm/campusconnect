import { Container, Card, Row, Col, Button, Image } from "react-bootstrap";
import FeedHeader from "./FeedHeader";
import { useState, useEffect } from "react";

// Sample groups data (with images)
const groups = [
    {
        name: "Housing Search",
        description: "Join to find housing and room mates",
        image: "https://www.whatcomabc.org/wp-content/uploads/housing-search-icon-2-800x800.png", // Placeholder image URL (replace with actual image)
        members: 213
    },
    {
        name: "Lost and Found",
        description: "Find your lost items here ",
        image: "https://goprattgo.com/images/2023/8/3/AdobeStock_386457753.jpeg", // Placeholder image URL (replace with actual image)
        members: 400
    },
    {
        name: "Study Buddies",
        description: "Find your study mate",
        image: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-1/301693522_385237467102508_5639871648711055129_n.png?stp=dst-png_s480x480&_nc_cat=101&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=ap5oAE3fdQsQ7kNvgEU62-g&_nc_ht=scontent-hou1-1.xx&_nc_gid=AN_tjX8JaQEuOzul5HglrU7&oh=00_AYCS4LQpWPHYP4RnDcPujgKu1cbmU50X6Poof8AZAT9cYQ&oe=67020E9B", // Placeholder image URL (replace with actual image)
        members: 690
    },
    {
        name: "Book Exchange",
        description: "Place to exchange books",
        image: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-1/412468003_1069572317726015_1790890649712962096_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=QhsveqrkddoQ7kNvgELslt2&_nc_ht=scontent-hou1-1.xx&oh=00_AYA7FuvVjB_vAeEvqZZCxSEedbPKDIkURSLob_CuIxakew&oe=67021744", // Placeholder image URL (replace with actual image)
        members: 900
    }
];

const Groups = () => {
    const [joinedGroups, setJoinedGroups] = useState([]);
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

    // Function to handle joining a group
    const handleViewGroup = (groupName) => {
        if (!joinedGroups.includes(groupName)) {
            setJoinedGroups([...joinedGroups, groupName]);
        }
    };

    return (
        <>
            <FeedHeader />
            <h3 style={{ marginTop: '30px' }}>Hello.<br />These are general groups everyone is a part of.</h3>
            <Container className="card border-dark mb-3" style={{ marginTop: "30px", width: "90%", height: 'auto', backgroundColor: "#F7F4ED", borderRadius: '10px', border: '1px #D7D7D7', display: 'flex', alignItems: 'center' }}>
                <Container style={{ width: "100%", marginTop: '20px' }}>

                    {/* Scrollable Div for Groups */}
                    <div style={{ height: '640px', overflowY: 'scroll', padding: '10px', backgroundColor: "#fff", borderRadius: '8px' }}>
                        <Row>
                            {groups.map((group, index) => (
                                <Col key={index} xs={12} className="mb-4">
                                    <Card className="d-flex align-items-center" style={{ borderRadius: '15px', padding: '10px', backgroundColor: '#f7f7f7' }}>
                                        <Row className="w-100">
                                            <Col xs={3} className="d-flex justify-content-center align-items-center">
                                                <Image src={group.image} roundedCircle style={{ width: "70px", height: "70px" }} />
                                            </Col>
                                            <Col xs={7}>
                                                <Card.Body>
                                                    <Card.Title style={{ fontSize: '16px', fontWeight: 'bold' }}>{group.name}</Card.Title>
                                                    <Card.Text style={{ fontSize: '14px', color: '#6c757d' }}>{group.description}</Card.Text>
                                                    <Card.Text style={{ fontSize: '12px', color: '#6c757d' }}>
                                                        <i className="bi bi-chat"></i> {group.members} Members
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>
                                            <Col xs={2} className="d-flex justify-content-center align-items-center">
                                                <Button 
                                                    variant={joinedGroups.includes(group.name) ? "success" : "outline-dark"} 
                                                    onClick={() => handleViewGroup(group.name)}
                                                    style={{ fontSize: '14px', borderRadius: '20px', padding: '5px 20px' }}
                                                >
                                                    {joinedGroups.includes(group.name) ? "Viewed" : "View Group"}
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

export default Groups;
