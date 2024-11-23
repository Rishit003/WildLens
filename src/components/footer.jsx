import React from "react";
import githubIcon from '../images/github-icon.png'
import instagramIcon from '../images/instagram-icon.png'

const Footer = () => {
    return(
        <footer>
            <div style = {{display: 'flex', justifyContent: 'space-between'}}>
                <a href="https://www.github.com/Rishit003/WildLens" target="_blank"><img src={githubIcon} style={{border: "2px solid white", borderRadius: "50%"}} height = "50 px" alt="github" /></a>
                <a href="https://www.instagram.com/idk.rishit" target="_blank" ><img src={instagramIcon} style={{border: "3px solid white", borderRadius: "50%"}} height = "50 px" alt="instagram" /></a>
            </div>     
            <p>&copy; 2024 WildLens | All rights reserved.</p>
        </footer>
    );
};
export default Footer;