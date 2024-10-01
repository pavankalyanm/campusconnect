import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import logo from './assets/logo.png';

const Header = () => {
    let navigate = useNavigate();
    return (
        <Navbar expand="lg" style={{ backgroundColor: "#F7F4ED" }}>
            <Navbar.Brand href="#" className="mx-2 d-flex align-items-center">
                {/* Logo Image */}
                <img
                    src={logo}
                    alt="Logo"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {/* Campus Connect Text */}
                <span style={{ marginLeft: '10px', fontSize: '1rem', fontWeight: 'bold' }}>Campus Connect</span>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Use Cases</Nav.Link>
                    <Nav.Link href="#">Guidelines</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
            <div className="d-flex">
                <Button onClick={() => navigate("/login")} variant="dark" className="mx-2">Log In</Button>
                <Button onClick={() => navigate("/signup")} variant="dark" className="mx-2">Sign Up</Button>
            </div>
        </Navbar>
    );
};

export default Header;
