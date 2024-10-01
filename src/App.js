import React from 'react';
import MainPage from './components/MainPage';
import Login from "./components/Login";
import { Container, Row, Col } from "react-bootstrap";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Feed from './components/Feed/Feed';
import Clubs from './components/Feed/Clubs';
import Groups from './components/Feed/Groups';
import Courses from './components/Feed/Courses';
import Friends from './components/Feed/Friends';

function App() {
  return (
    <UserAuthContextProvider>
        
        <Container>
          <Row>
          <Col>
            <Router>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/clubs" element={<Clubs />} />
                <Route path="/groups" element={<Groups />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/friends" element={<Friends />} />
              </Routes>
              </Router>
            </Col>
          </Row>
        </Container>
      
    </UserAuthContextProvider>
    
      
    
  );
}

export default App;
