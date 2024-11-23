import React from 'react';
import logo from '../images/logo.png'
import search from '../images/search.png'

const Logo = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img src={logo} height = "80px" alt="logo" />
      <h1 style={{fontSize: '70px', color: 'white', fontWeight: 'bold', margin : '10px'}}>
        Wild<img src={search} height = "40px" alt="search" />Lens
      </h1>
    </div>
  );
};
export default Logo;