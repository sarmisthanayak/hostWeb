import React from 'react';
import styled from 'styled-components';

// ... (previous imports and styles)

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1; 
  height: 100vh;
  background: #15212a;
`;

const Card = styled.div`
  background-color: #000;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  margin-top: -50px;
  height: 80%;
  color: #fff;
`;


const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const CardPrice = styled.p`
  font-size: 1.25rem;
  color: #007bff;
  margin: 10px 0;
`;

const CardFeatures = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin: 10px 0;
  }
`;

const CardButton = styled.button`
  background-color: #f0f0f0;
  color: #333;
`;

const PricingCardSection = () => {
  return (
    <CardSection>
      <Card>
        <CardTitle>Basic Plan</CardTitle>
        <CardPrice>$9.99/mo</CardPrice>

        <CardButton>Choose Plan</CardButton>
        <CardFeatures>
          <li>10GB Storage</li>
          <li>100GB Bandwidth</li>
          <li>1 Domain</li>
          <li>Email Support</li>
        </CardFeatures>
        
      </Card>
    </CardSection>
  );
};

export default PricingCardSection;