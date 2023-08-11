import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const menuItems = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            alt="YourLogo"
            src="http://inebur.com/antler/template/assets/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          {menuItems.map((item, index) => (
            <Nav.Link key={index} href="#">
              {item}
            </Nav.Link>
          ))}
        </Nav>
        <Nav>
          <Nav.Link>Login</Nav.Link>
        </Nav>
        <MenuIcon onClick={toggleDrawer} />
      </Navbar>
      {showDrawer && (
        <div className="position-absolute top-0 end-0 bg-dark p-2">
          {menuItems.map((item, index) => (
            <div key={index} className="text-white mb-2 d-block">
              {item}
            </div>
          ))}
          <div className="text-white">Login</div>
        </div>
      )}
    </>
  );
};

export default Header;