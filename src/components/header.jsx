import React from 'react';

const Logo = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img src="./src/images/logo.png" height = "80px" alt="logo" />
      <h1 style={{fontSize: '70px', color: 'white', fontWeight: 'bold', margin : '10px'}}>
        Wild<img src="./src/images/search.png" height = "40px" alt="search" />Lens
      </h1>
    </div>
  );
};
export default Logo;