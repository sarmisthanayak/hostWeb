import { Container, Row, Col, Card, Button } from 'react-bootstrap'; 
import React from 'react';

const PricingCardSection = () => {
  return (
    <section className="text-white py-5 "style={{ background: '#15212a'}}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={12} className="mb-4">
            <Card className="border-0 bg-pink text-center" style={{ height: '700px', width: '500px', marginTop: '-100px', background: 'linear-gradient(180deg, #000 55%, #e4007c 45%)'}}>
              <Card.Body className='text-white'>
                <Card.Img src="http://inebur.com/antler/template/assets/fonts/svg/cloudfiber.svg" alt="Cloud Fiber" className="img-fluid" style={{ width: '30%', height: '10%', display: 'block', margin: '0 auto' }} />
                <Card.Title className="font-weight-bold pt-4 display-4">All Plans</Card.Title>
                <Card.Text>Starting at:</Card.Text>
                <Card.Text className="h1">$9.99/mo</Card.Text>
                <Button variant="warning" className="rounded-pill px-3 py-3">Choose Plan</Button>
                <ul className="list-unstyled pl-6 mt-4 pt-5">
                  <li style={{ marginBottom: '10px' }}>10GB Storage</li>
                  <li style={{ marginBottom: '10px' }}>100GB Bandwidth</li>
                  <li style={{ marginBottom: '10px' }}>1 Domain</li>
                  <li style={{ marginBottom: '10px' }}>Email Support</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PricingCardSection;