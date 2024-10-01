import React from 'react';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import { useUserAuth } from "../../context/UserAuthContext"; // Assuming you're using Firebase for auth

const FeedHeader = () => {
    let navigate = useNavigate();
    const { user, signOut } = useUserAuth(); // Getting user and signOut from context

    const handleSignOut = async () => {
        try {
            await signOut();
            navigate("/login"); // Redirect to login after signing out
        } catch (error) {
            console.error("Sign-out error:", error);
        }
    };

    return (
        <Navbar expand="lg" style={{backgroundColor: "#F7F4ED"}}>
            <Navbar.Brand href="#" className="mx-2">
                <img
                    src={logo}
                    alt="Logo"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
            <span style={{ marginLeft: '10px', fontSize: '1rem', fontWeight: 'bold' }}>Campus Connect</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav>
                    <Nav.Link href="/feed">Home</Nav.Link>
                    <Nav.Link href="/clubs">Clubs</Nav.Link>
                    <Nav.Link href="/groups">General Groups</Nav.Link>
                    <Nav.Link href="/Courses">Courses</Nav.Link>
                    <Nav.Link href="/friends">Friends</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
            <div className="d-flex">
                {user ? (
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" className="mx-2">
                            {user.email} {/* Display user's email */}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                ) : (
                    // Only render Log In and Sign Up buttons when user is not authenticated
                    <>
                        <Button onClick={() => navigate("/login")} variant="dark" className="mx-2">Log In</Button>
                        <Button onClick={() => navigate("/signup")} variant="dark" className="mx-2">Sign Up</Button>
                    </>
                )}
            </div>
        </Navbar>
    );
};

export default FeedHeader;
