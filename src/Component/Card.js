import React from 'react';
import styled from 'styled-components';

const CardSection = styled.section`
  display: flex;
  justify-content: center;
  background: #15212a;
  padding: 60px 0;
  height: 100vh;
`;

const Wrapper = styled.div`
  background: linear-gradient(to bottom, #000000, #3b0059);;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  color: #fff;
  padding: 20px;
  position: relative;
  margin-top: -100px;

  @media (max-width: 768px) {
    border-radius: 0;
    box-shadow: none; 
  }
`;

const TopContent = styled.div`
  padding: 10px 0;
  border-radius: 10px 10px 0 0;
`;

const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #F33A6A;
`;

const Price = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #007bff;
`;

const ListInfo = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    margin-right: 10px;
    color: #007bff;
  }
`;

const CardButton = styled.a`
  background-color: #FFD700;
  color: #333;
  display: block;
  padding: 10px 0;
  border-radius: 25px;
  margin-top: 30px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  font-size: 1.5rem;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const PricingCardSection = () => {
  return (
    <CardSection>
      <Wrapper>
        <TopContent>
          <img className="svg mb-3" src="http://inebur.com/antler/template/assets/fonts/svg/cloudfiber.svg" alt="" />
          <Title>Shared Hosting</Title>
          <Price><sup>$</sup>8.19 <span className="period">/month</span></Price>
          <CardButton href="hosting" className="btn btn-default-yellow-fill">
            All plans
          </CardButton>
        </TopContent>
        <ListInfo>
          <ListItem>
            <i className="icon-drives"></i> <span className="c-purple">DISK</span>
            <br /> <span>250GB SSD</span>
          </ListItem>
          <ListItem>
            <i className="icon-speed"></i> <span className="c-purple">DATA</span>
            <br /> <span>1TB Bandwidth</span>
          </ListItem>
          <ListItem>
            <i className="icon-emailopen"></i> <span className="c-purple">EMAIL</span>
            <br /> <span>120 Emails</span>
          </ListItem>
          <ListItem>
            <i className="icon-domains"></i> <span className="c-purple">TLD</span>
            <br /> <span>30 Domains</span>
          </ListItem>
        </ListInfo>
      </Wrapper>
    </CardSection>
  );
};

export default PricingCardSection;