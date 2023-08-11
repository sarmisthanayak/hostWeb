import React from 'react';
import './design.css';

const Header = () => {

  return (
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center justify-content-between">
      <img src="http://inebur.com/antler/template/assets/img/logo.svg" alt="YourLogo" />
      <label for="menu">&#9776;</label>
      <input type="checkbox" id="menu"/>
      <nav id="navbar" class="navbar">
        
              <ul>
                <li>
                  <a class="nav-link active" aria-current="page" href="#">Menu1</a>
                </li>
                <li>
                  <a class="nav-link" href="#">Menu2</a>
                </li>
                <li>
                  <a class="nav-link" href="#">Menu3</a>
                </li>
                <li>
                  <a class="nav-link" href="#">Menu4</a>
                </li>
                <li>
                  <a class="nav-link" href="#">Login</a>
                </li>
              </ul>
            </nav>
          </div>
        
        </header>
  );
};

export default Header;