import React from "react";
import TwitterIcon from "../images/Twitter-Icon.svg";
import FacebookIcon from "../images/Facebook-Icon.svg";
import InstagramIcon from "../images/Instagram-Icon.svg";
import GithubIcon from "../images/GitHub-Icon.svg";

export default function Footer() {
    return (
        <div className="footer--container">
            <a href="https://twitter.com/maxkdavis" target="_blank" rel="noreferrer">
                <img src={TwitterIcon} className="social twitter-icon" alt="twitter logo" />
            </a>
            <img src={FacebookIcon} className="social facebook-icon" alt="facebook logo" />
            <img src={InstagramIcon} className="social instagram-icon" alt="instagram logo" />
            <a href="https://github.com/maxkdavis" target="_blank" rel="noreferrer">
                <img src={GithubIcon} className="social github-icon" alt="github logo" />
            </a>
        </div>
    );
}
