import React from 'react';
import styled from 'styled-components';

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  background: #15212A;
  margin-top: -88.2px;
  height: 100vh;


  @media (max-width: 768px) {
    align-items: center;
    margin-top: 0;

  }
`;

const Card = styled.div`
  background: linear-gradient(180deg, #000 60%, #e4007c 40%);
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  margin-top: -20px;
  height: 80%;

  @media (max-width: 768px) {
    width: 100px;
    margin-top: -400px;
  }
`;

const Image = styled.div`
    height: 20%;
    img{
        height: 50%;
    }
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  margin: 10px 0;
  color: #e4007c;
`;

const Text = styled.p`
    font-size: 1rem;
`

const CardPrice = styled.p`
  font-size: 2rem;
  color: #fff;
  margin: 20px 0;
  font-weight: bold;
`;

const CardFeatures = styled.ul`
  list-style: none;
  padding: 10px;

  li {
    margin: 10px 0;
    font-size: 1rem;
  }
`;

const CardButton = styled.button`
  background-color: #e4007c;
  color: #333;
  padding: 10px 10px;
  border-radius: 25px;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;

const PricingCardSection = () => {
  return (
    <CardSection>
      <Card>
        <Image>
            <img src = "http://inebur.com/antler/template/assets/fonts/svg/cloudfiber.svg"></img>
        </Image>
        <CardTitle>All Plans</CardTitle>
        <Text>Starting at: </Text>
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