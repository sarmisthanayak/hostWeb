import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeaderContainer = styled.div`
  background-color: #15212a;
  color: #fff;
  padding: 25px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const LogoImg = styled.img`
  height: 30px;
`;

const MenuContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(Link)`
  color: inherit;
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  margin: 0 10px;
`;

const LoginContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerIcon = styled(MenuIcon)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const DrawerContainer = styled.div`
  background-color: #15212a;
  padding: 10px;
  margin-top: 10px;
  display: none;

  @media (max-width: 768px) {
    display: ${props => (props.showDrawer ? 'block' : 'none')};
  }
`;

const DrawerItem = styled(Link)`
  color: #fff;
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  display: block;
  margin: 10px 0;
`;

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const menuItems = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <HeaderContainer>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={2}>
            <Logo>
              <LogoImg src="http://inebur.com/antler/template/assets/img/logo.svg" alt="YourLogo" />
            </Logo>
          </Col>
          <Col md={5}>
            <MenuContainer>
              {menuItems.map((item, index) => (
                <MenuItem key={index} to={index === 0 ? '/' : `/menu${index + 1}`}>
                  {item}
                </MenuItem>
              ))}
            </MenuContainer>
          </Col>
          <Col md={5}>
            <LoginContainer>
              <Button>Login</Button>
            </LoginContainer>
            <HamburgerIcon onClick={toggleDrawer} />
          </Col>
        </Row>
      </Container>
      <DrawerContainer showDrawer={showDrawer}>
        {menuItems.map((item, index) => (
          <DrawerItem key={index} to={index === 0 ? '/' : `/menu${index + 1}`}>
            {item}
          </DrawerItem>
        ))}
        <DrawerItem>Login</DrawerItem>
      </DrawerContainer>
    </HeaderContainer>
  );
};

export default Header;