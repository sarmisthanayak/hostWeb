import React from 'react';
import styled from 'styled-components';


const HeroSec = styled.section`
background-color: #15212a !important;
padding: 135px 0;
z-index: 0;
position: relative;
`;

const HeroWrapper = styled.div`
font-family: sans-serif !important;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.5;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: -1; 
`;



const Title = styled.h1`
margin-top: 0!important;
margin-bottom: 20px!important;
text-transform: capitalize!important;
position: relative!important;
display: inline-block!important;
line-height: 60px!important;
color: #fff;
font-size: 3rem;
`;

const Description = styled.p`
position: relative!important;
color: #fff;
font-size: 20px!important;
line-height: 34px!important;
text-align: center;
font-size: 2rem;
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
background-color: #F33A6A;
border: 2px solid blue;
border-radius: 50px 20px;
color: white;
padding: 10px 30px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 50px 10px;
cursor: pointer;
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
      <HeroSec>
        <VideoBackground autoPlay loop muted>
            <source src="http://inebur.com/antler/template/assets/videos/planet.mp4" type="video/mp4" />
          </VideoBackground>
        <HeroWrapper>
          
          <Overlay />
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 pt-5 pb-1 text-center'>
              <Title>Welcome to Flup.in Hosting Website</Title>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla tincidunt urna, at tempor libero.
              </Description>
              <Buttons>
                <Button>Learn More</Button>
                <Button>Get Started</Button>
              </Buttons>
              </div>
              <div className='col-md-6 text-center'>
                <Image>
                  <img src="https://inebur.com/antler/template/assets/patterns/domainmanage.svg" alt="Hero" />
                </Image>
              </div>
            </div>
            
          </div>
        </HeroWrapper>
      </HeroSec>
  );
};

export default HeroSection;