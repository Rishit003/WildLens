import React from 'react';

const Logo = () => {
  return (
    <div style={styles.logoContainer}>
      <img src="./src/images/icon.png" height = "45" alt="logo" />
      <h1 style={styles.logoText}>WildLens</h1>
    </div>
  );
};

const styles = {
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',  // Adds some space between the logo and uploader
  },
  logoText: {
    fontSize: '32px',
    color: 'white',  // You can change the color to match your brand
    fontWeight: 'bold',
  },
};

export default Logo;