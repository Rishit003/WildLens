import React from "react";
import githubIcon from '../images/github-icon.png'
import instagramIcon from '../images/instagram-icon.png'

const Footer = () => {
    return(
        <footer>
            <div class='social-links'>
                <a href="https://www.github.com/Rishit003/WildLens" target="_blank"><img src={githubIcon} alt="github" class='social-icon'  /></a>
                <a href="https://www.instagram.com/idk.rishit" target="_blank" ><img src={instagramIcon} alt="instagram" class='social-icon' /></a>
            </div>     
            <div>
                <p>&copy; 2024 WildLens | All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;