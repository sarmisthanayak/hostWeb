import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

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

const MenuItem = styled.button`
  color: inherit;
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
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

const DrawerItem = styled.button`
  color: #fff;
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
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
        <Logo><LogoImg src="http://inebur.com/antler/template/assets/img/logo.svg" alt="YourLogo" /></Logo>
        <MenuContainer>
          {menuItems.map((item, index) => (
            <MenuItem key={index}>{item}</MenuItem>
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
            <DrawerItem key={index}>{item}</DrawerItem>
          ))}
          <DrawerItem>Login</DrawerItem>
        </DrawerContainer>
      )}
    </>
  );
};

export default Header;