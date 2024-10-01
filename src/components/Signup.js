import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button, Container } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';
//import Footer from "../Footer";
import Header from "../Header";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [topic, setTopic] = useState("");
  const [topics, setTopics] = useState([]);
  const [interest, setInterest] = useState("");
  const [interests, setInterests] = useState([]);
  const { signUp } = useUserAuth();
  let navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(1);

  // Function to check if Card 1 (Basic Info) is valid
  const isCard1Valid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return (
      fname.trim() !== '' &&
      lname.trim() !== '' &&
      email.trim() !== '' &&
      emailRegex.test(email) &&
      password.trim().length >= 8
    );
  };

  // Function to check if Card 2 (Topics) is valid
  const isCard2Valid = () => {
    return topics.length > 0;
  };

  // Function to check if Card 3 (Interests) is valid
  const isCard3Valid = () => {
    return interests.length > 0;
  };

  // Function to handle card change
  const handleCardChange = (cardNumber) => {
    if (cardNumber === 2 && !isCard1Valid()) {
      setError("Please fill out all fields cottectly to proceed and ensure your password is at least 8 characters long.");
      return;
    }
    if (cardNumber === 3 && !isCard2Valid()) {
      setError("Please add at least one topic of interest to proceed.");
      return;
    }
    setActiveCard(cardNumber);
    setError(""); // Clear any previous errors when moving to the next card
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate all fields again before submission
    if (!isCard1Valid() || !isCard2Valid() || !isCard3Valid()) {
      setError("Please complete all steps before submitting.");
      return;
    }

    try {
      const userCredential = await signUp(email, password);
      const user = userCredential.user;
      const uid = user.uid;

      const docRef = doc(db, "users", uid);
      await setDoc(docRef, {
        fname: fname,
        lname: lname,
        email: user.email,
        topics: topics,
        interests: interests,
      });
      console.log("Document written with ID: ", docRef.id);
      navigate("/feed");
    } catch (err) {
      setError(err.message);
    }
  };

  // Function to handle adding a topic
  const handleAddTopic = (e) => {
    if (e.key === "Enter" && topic.trim() !== "") {
      e.preventDefault();
      setTopics([...topics, topic.trim()]);
      setTopic("");
    }
  };

  // Function to handle removing a topic
  const handleRemoveTopic = (index) => {
    setTopics(topics.filter((_, i) => i !== index));
  };

  // Function to handle adding an interest
  const handleAddInterest = (e) => {
    if (e.key === "Enter" && interest.trim() !== "") {
      e.preventDefault();
      setInterests([...interests, interest.trim()]);
      setInterest("");
    }
  };

  // Function to handle removing an interest
  const handleRemoveInterest = (index) => {
    setInterests(interests.filter((_, i) => i !== index));
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
      <Header />
      {activeCard === 1 && (
        <>
          <div style={{ marginTop: "62px", marginLeft: '66px' }}>
            <h2>Good decision, <br />Join the like minds</h2>
          </div>
          <Container className="card border-dark mb-3" style={{ marginTop: "62px", width: "940px", height: '400px', backgroundColor: "#F7F4ED", borderRadius: '10px', border: '1px #D7D7D7', display: 'flex', alignItems: 'center' }}>
            <Container style={{ width: "400px" }}>
              <div className="p-4 box">
                {error && <Alert variant="danger">{error}</Alert>}
                <Form>
                  <Form.Group className="mb-3" controlId="formrole">
                    <Form.Control
                      type="fname"
                      placeholder="First Name"
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formrole">
                    <Form.Control
                      type="lname"
                      placeholder="Last Name"
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </Form.Group>
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
                </Form>
              </div>
            </Container>
          </Container>
          <center>
            <div className="d-grid gap-2" style={{ marginTop: '20px', width: '200px' }}>
              <Button onClick={() => handleCardChange(2)} variant="dark" type="button">
                Proceed
              </Button>
            </div>
            <div className="p-2 text-center">
              Already have an account? <Link to="/login">Log In</Link>
            </div>
          </center>
        </>
      )}
      {activeCard === 2 && (
  <>
    <div style={{ marginTop: "62px", marginLeft: '66px' }}>
      <h2>Great to have you here, tell us some <br />more about you</h2>
    </div>
    <Container className="card border-dark mb-3" style={{ marginTop: "62px", width: "940px", height: '400px', backgroundColor: "#F7F4ED", borderRadius: '10px', border: '1px #D7D7D7' }}>
      <div className="p-4 box">
        {error && <Alert variant="danger">{error}</Alert>}
        <h4>Complete your profile</h4>
        <div style={{ marginLeft: '30px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '12px' }}>Please add some interests, so we can suggest clubs based on it.</p>

          {/* Topic options */}
          <div className="mb-3">
            {[
              'Technology', 'Science', 'Music', 'Art', 'Sports', 'Movies',
              'Programming', 'Data Science', 'Artificial Intelligence', 
              'Career Guidance', 'Internships', 'Job Search', 
              'Mental Health', 'Networking', 'Time Management',
              'Scholarships', 'Entrepreneurship', 'Public Speaking', 
              'Leadership', 'Study Techniques', 'Exam Preparation', 
              'College Life', 'Social Skills', 'Volunteer Work', 
              'Extracurricular Activities', 'Personal Finance', 
              'Resume Building', 'Interview Skills'
            ].map((hobby, index) => (
              <div key={index} style={{ display: 'inline-block', margin: '5px' }}>
                <Button
                  variant={topics.includes(hobby) ? "dark" : "outline-dark"}
                  onClick={() => {
                    if (topics.includes(hobby)) {
                      setTopics(topics.filter(topic => topic !== hobby));
                    } else {
                      setTopics([...topics, hobby]);
                    }
                  }}
                >
                  {hobby}
                </Button>
              </div>
            ))}
          </div>
          
          {/* Display selected topics */}
          
        </div>
      </div>
    </Container>
    <center>
      <div className="d-grid gap-2" style={{ marginTop: '20px', width: '200px' }}>
        <Button onClick={() => handleCardChange(3)} variant="dark" type="button">
          Proceed
        </Button>
      </div>
    </center>
  </>
)}

{activeCard === 3 && (
  <>
    <div style={{ marginTop: "62px", marginLeft: '66px' }}>
      <h2>Great to have you here, tell us some <br />more about you</h2>
    </div>
    <Container className="card border-dark mb-3" style={{ marginTop: "62px", width: "940px", height: '400px', backgroundColor: "#F7F4ED", borderRadius: '10px', border: '1px #D7D7D7' }}>
      <div className="p-4 box">
        {error && <Alert variant="danger">{error}</Alert>}
        <h4>What are the job roles you're aiming for?</h4>
        <div style={{ marginLeft: '30px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '12px' }}>These are the roles that you’re interested in pursuing after graduation. You can select up to 3 roles.</p>

          {/* Desired Job Roles Options */}
          <div className="mb-3">
            {[
              'Software Developer', 'Data Scientist', 'Data Analyst', 'Machine Learning Engineer', 
              'Project Manager', 'AI Researcher', 'Cloud Engineer', 
              'DevOps Engineer', 'Product Manager', 'UI/UX Designer', 
              'Business Analyst', 'Network Engineer', 'Full Stack Developer', 
              'Mobile App Developer', 'Game Developer', 'Systems Engineer', 
              'Backend Developer', 'Front-end Developer', 'Database Administrator', 
              'IT Support Specialist', 'Digital Marketer', 'Quality Assurance Engineer', 
              'Technical Writer', 'Research Scientist', 'Sales Engineer'
            ].map((role, index) => (
              <div key={index} style={{ display: 'inline-block', margin: '5px' }}>
                <Button
                  variant={interests.includes(role) ? "dark" : "outline-dark"}
                  onClick={() => {
                    if (interests.includes(role)) {
                      setInterests(interests.filter(i => i !== role)); // Remove role if already selected
                    } else if (interests.length < 3) {
                      setInterests([...interests, role]); // Add role if less than 3 selected
                    } else {
                      setError("You can only select up to 3 roles.");
                    }
                  }}
                  disabled={interests.length >= 3 && !interests.includes(role)} // Disable if 3 roles already selected
                >
                  {role}
                </Button>
              </div>
            ))}
          </div>

          {/* Display selected job roles */}
         
        </div>
      </div>
    </Container>
    <center>
      <div className="d-grid gap-2" style={{ marginTop: '20px', width: '200px' }}>
        <Button onClick={handleSubmit} variant="dark" type="button">
          Sign Up
        </Button>
      </div>
    </center>
  </>
)}
    </>
  );
};

export default Signup;