import React from 'react';
import styled from 'styled-components';


const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1500px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;


  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
`;

const HeroWrapper = styled.div`
  padding: 10px;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    padding: 50px;
    justify-content: center;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 0; 
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;

   @media (max-width: 768px){
    text-align: justify;
    padding: 10px;
   }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Description = styled.p`
  margin: 10px 0;
  font-size: 1.5rem;
`;

const Buttons = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
`;

const Button = styled.button`
  padding: 30px 30px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 15px;
  border-radius: 25px;
  font-size: 16px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    padding: 20px 20px;
    font-size: 14px;
  }
`;

const Image = styled.div`
  img {
    max-width: 100%;
    height: 80%;
   
    @media (max-width: 768px) {
      display: none;
  }
}
`;

const HeroSection = () => {
  return (
      <Row>
        <VideoBackground autoPlay loop muted>
            <source src="http://inebur.com/antler/template/assets/videos/planet.mp4" type="video/mp4" />
          </VideoBackground>
        <HeroWrapper>
          
          <Overlay />
          <HeroContent>
            <Text>
              <Title>Welcome to Flup.in Hosting Website</Title>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla tincidunt urna, at tempor libero.
              </Description>
              <Buttons>
                <Button>Learn More</Button>
                <Button>Get Started</Button>
              </Buttons>
            </Text>
            <Image>
              <img src="https://inebur.com/antler/template/assets/patterns/domainmanage.svg" alt="Hero" />
            </Image>
          </HeroContent>
        </HeroWrapper>
      </Row>
  );
};

export default HeroSection;