import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #101920!important;
  color: #fff;
  padding: 20px 0;
`;

const FooterDescription = styled.p`
  font-size: 14px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 10px;
`;

const LogoImg = styled.img`
  height: 30px;
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const SocialIconLink = styled.a`
  font-size: 1.5rem;
  color: #F33A6A;
  margin: 0 10px;
  transition: color 0.5s ease-in-out;

  &:hover {
    font-size: 2rem;
  }
`;

const FacebookIcon = styled(FaFacebook)`
  color: #3b5998; 
`;

const TwitterIcon = styled(FaTwitter)`
  color: #1da1f2; 
`;

const InstagramIcon = styled(FaInstagram)`
  color: #e1306c; 
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col md={3} className="mb-3 text-center">
            <Logo>
          <LogoImg src="http://inebur.com/antler/template/assets/img/logo.svg" alt="YourLogo" />
        </Logo>
          </Col>
          <Col md={6} className="mb-3">
            <FooterDescription>
              Your small description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </FooterDescription>
          </Col>
          <Col md={3} className="text-center">
            <SocialIconsWrapper>
              <Row>
                <Col>
                  <SocialIconLink href="#">
                    <FacebookIcon />
                  </SocialIconLink>
                </Col>
                <Col>
                  <SocialIconLink href="#">
                    <TwitterIcon />
                  </SocialIconLink>
                </Col>
                <Col>
                  <SocialIconLink href="#">
                    <InstagramIcon />
                  </SocialIconLink>
                </Col>
              </Row>
            </SocialIconsWrapper>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;