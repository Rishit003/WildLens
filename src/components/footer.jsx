import React from "react";

const Footer = () => {
    return(
        <footer>
            <div style = {{display: 'flex', justifyContent:'space-evenly'}}>
                <a href="https://www.github.com/Rishit003/WildLens" target="_blank"><img src="./src/images/github-icon.png" style={{border: "2px solid white", borderRadius: "50%"}} height = "50 px" alt="github" /></a>
                <a href="https://portfolio-website-henna-two.vercel.app/" target="_blank"><img src="./src/images/portfolio-icon.png" style={{border: "2px solid white", borderRadius: "50%"}} height = "50 px" alt="portfolio" /></a>
                <a href="https://www.instagram.com/idk.rishit" target="_blank" ><img src="./src/images/instagram-icon.png" style={{border: "3px solid white", borderRadius: "50%"}} height = "50 px" alt="instagram" /></a>
            </div>     
            <p>&copy; 2024 WildLens | All rights reserved.</p>
        </footer>

    );
};

export default Footer;