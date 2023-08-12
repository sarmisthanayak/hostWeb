import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 25px;
  background-color: #000;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  justify-self: start;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const LogoImg = styled.img`
  height: 30px; /* Adjust the height as needed */
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;

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
  justify-self: end;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerIcon = styled(MenuIcon)`
  display: none;
  justify-self: end;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const DrawerContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #333;
    padding: 10px;
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
    <>
      <HeaderContainer>
        <Logo>
          <LogoImg src="http://inebur.com/antler/template/assets/img/logo.svg" alt="YourLogo" />
        </Logo>
        <MenuContainer>
          {menuItems.map((item, index) => (
            <MenuItem key={index} to={index === 0 ? '/menu1' : index === 1 ? '/menu2' : index === 2 ? '/menu3' : '/'}>
              {item}
            </MenuItem>
          ))}
        </MenuContainer>
        <LoginContainer>
          <button>Login</button>
        </LoginContainer>
        <HamburgerIcon onClick={toggleDrawer} />
      </HeaderContainer>
      {showDrawer && (
        <DrawerContainer>
          {menuItems.map((item, index) => (
            <DrawerItem key={index} to={index === 0 ? '/menu1': index === 1 ? '/menu2' : index === 2 ? '/menu3' : '/'}>
              {item}
            </DrawerItem>
          ))}
          <DrawerItem to="/menu2">Menu 2</DrawerItem>
          <DrawerItem to="/menu3">Menu 3</DrawerItem>
          <DrawerItem>Login</DrawerItem>
        </DrawerContainer>
      )}
    </>
  );
};

export default Header;