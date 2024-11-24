import React from 'react';
import logo from '../images/logo.png'
import search from '../images/search.png'

const Logo = () => {
  return (
    <header>
      <img src={logo} height = "80px" alt="logo" />
      <h1 class='logo-text'>
        WILD<img src={search} height = "40px" alt="search" />LENS
      </h1>
    </header>
  );
};
export default Logo;