import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #101920!important;
  color: #fff;
  padding: 20px 0;
`;

const FooterTop = styled.div`
    padding: 40px 0 20px;
`;

const Haeding = styled.div`
font-size: 1.5rem;
  text-align: center;
  margin-bottom: 10px;
`;

const FooterMenu = styled.ul`
font-size: 1.5rem;
text-align: center;
margin-bottom: 10px;
`;

const Menuitem = styled.li`
  list-style-type: none;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 10px;

  a {
    color: #aaa;
    text-decoration: none;

    &:hover {
      color: #F33A6A;
    }
  }
`;


const Logo = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 10px;
`;

const LogoImg = styled.img`
  height: 30px;
`;

const Copywrite = styled.div`
    font-weight: 400;
    font-size: 12px;
    color: #aaa;
    line-height: 28px;
    padding-top: 10px;
    padding-bottom: 30px;
    text-align: center;
`;

const SocialIcons = styled.div`
padding-top: 0;
padding-left: 0;
border-radius: 50px!important;
text-align: center;
`;

const SocialIconLink = styled.a`
  font-size: 1.5rem;
  margin: 0 10px;
  

  
`;

const FacebookIcon = styled(FaFacebook)`
  color: #3b5998; 
  transition: color font-size 0.5s ease-in-out;

  &:hover {
    color: #F33A6A;

  }
`;

const TwitterIcon = styled(FaTwitter)`
  color: #1da1f2; 
  transition: color font-size 0.5s ease-in-out;

  &:hover {
    color: #8B8000;

  }
`;

const InstagramIcon = styled(FaInstagram)`
  color: #e1306c; 
  transition: color font-size 0.5s ease-in-out;

  &:hover {
    color: #FFBF00;
    
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
            <Row>
            <Col xs={12} sm={6} md={3} lg={3}>
                    <Haeding>Menu 2</Haeding>
                    <FooterMenu>
                        <Menuitem>
                        <a href="#">All Plans</a></Menuitem>
                    </FooterMenu>
                </Col>

                <Col xs={12} sm={6} md={3} lg={3}>
                    <Haeding>Menu 3</Haeding>
                    <FooterMenu>
                        <Menuitem>
                        <a href="#">Lorem ipsum</a></Menuitem>
                    </FooterMenu>
                </Col>

                <Col xs={12} sm={6} md={3} lg={3}>
                    <Haeding>Menu 4</Haeding>
                    <FooterMenu>
                        <Menuitem>
                        <a href="#">Lorem ipsum</a>
                        </Menuitem>
                    </FooterMenu>
                </Col>
                <Col sm={6} md={3}>
                <Logo>
                    <LogoImg src="http://inebur.com/antler/template/assets/img/logo.svg" alt="YourLogo" />
                </Logo>
                <Copywrite>
                © Copyright 2019 - 2023 | Antler Hosting Provider & WHMCS Template by INEBUR All rights reserved
                </Copywrite>
                <SocialIcons>
                
                  <SocialIconLink href="#">
                    <FacebookIcon />
                  </SocialIconLink>
                
                  <SocialIconLink href="#">
                    <TwitterIcon />
                  </SocialIconLink>
                  <SocialIconLink href="#">
                    <InstagramIcon />
                  </SocialIconLink>
                </SocialIcons>
                </Col>

            </Row>
        </FooterTop>
        
      </Container>
    </FooterWrapper>
  );
};

export default Footer;