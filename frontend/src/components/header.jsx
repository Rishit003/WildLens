import React from 'react';

const Logo = () => {
  return (
    <div style={styles.logoContainer}>
      <img src="./src/images/logo.png" height = "80px" alt="logo" />
      <h1 style={styles.logoText}>Wild<img src="./src/images/search.png" height = "15px" alt="search" />Lens</h1>
      
    </div>
  );
};

const styles = {
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: '50px',
    color: 'white',  
    fontWeight: 'bold',
    margin : '10px'
  },
};

export default Logo;