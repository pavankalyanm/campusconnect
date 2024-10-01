import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';



const InfoSection = () => {
  return (
    <Container className="mt-5">
        <Col md={12}>
          <Card className="p-1 border-1 mb-3 h-100" style={{backgroundColor:'#F7F4ED',borderRadius:'10px'}} >
            <Card.Body>
              <Card.Text>
              meet is designed through behavioural principles to help you build your interests with like minded people
            </Card.Text>
            <div class="container mt-4">

              <div class="row">
                <div class="col-2">
                <img src={one} alt="one" style={{ width:'46px',height:'93px'}}/>        
                </div>
                <div class="col-10" style={{display: 'flex', alignItems: 'center'}}>
                   <h3>It’s easy, intuitive and made for<br></br> humans</h3>
                </div>
              </div>
            </div>    
            <div class="container mt-4">

              <div class="row">
                <div class="col-2">
                <img src={two} alt="two" style={{ width:'46px',height:'93px'}}/>        
                </div>
                <div class="col-10" style={{display: 'flex', alignItems: 'center'}}>
                   <h3>behavioural principles help you<br></br> overcome subconscious biases</h3>
                </div>
              </div>
             </div>  
            <div class="container mt-4">

              <div class="row">
                <div class="col-2">
                <img src={three} alt="three" style={{ width:'46px',height:'93px'}}/>        
                </div>
                <div class="col-10" style={{display: 'flex', alignItems: 'center'}}>
                   <h3>It’s made for everyone</h3>
                </div>
            </div>
            
            </div>           
            </Card.Body>
          </Card>
        </Col>
        
    </Container>
  );
}

export default InfoSection;
