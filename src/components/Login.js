import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button,Container } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';
import logo from '../assets/logo.jpeg';
import Header from "../Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {

      const userCredential = await logIn(email, password);
      const user = userCredential.user
      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnapshot = await getDoc(userDocRef);
      console.log("docu", userDocSnapshot.data().role);
      navigate("/feed");
      
    } catch (err) {
      setError(err.message);
    }
  };
  

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .logo {
            animation: fadeIn 2s ease-in-out;
          }
          .box {
            animation: fadeIn 2s ease-in-out;
          }
        `}
      </style>
      <Header/>
      <Container className="card border-dark mb-3" style={{ marginTop: "62px", width: "940px", height: '400px', backgroundColor: "#F7F4ED", borderRadius: '10px', border: '1px #D7D7D7', display: 'flex', alignItems: 'center' }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <div className="logo text-center">
            <img src={logo} alt="Logo" style={{marginTop:'15px', width: '100px', height: 'auto'}}/>
          </div>
          <div className="p-4 box">
            <h4 className="mb-3 text-center">Login</h4>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="dark" type="submit" className="w-100">
                Log In
              </Button>
            </Form>
          
            <hr />
            <div className="text-center">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
