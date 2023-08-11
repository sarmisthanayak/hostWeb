import React from 'react';
import './design.css';
import { styled } from 'styled-components';


const Header = () => {

  return (
    <header id="header" className="fixed-top">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5 col-6">
            <img src="http://inebur.com/antler/template/assets/img/logo.svg" alt="YourLogo" />
          </div>
          <div className="col-md-7 col-6 text-md-end">
            <label htmlFor="menu">&#9776;</label>
            <input type="checkbox" id="menu" />
            <nav id="navbar" className="navbar">
              <ul className="d-flex justify-content-end">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Menu1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Menu2
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Menu3
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Menu4
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;