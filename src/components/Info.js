import React from "react";
import Profile from "../images/profile.png";

export default function Info() {
    return (
        <div className="info--container">
            <img src={Profile} className="info--image" alt="headshot of max" />
            <h1>Max Davis</h1>
            <h3>Frontend Developer</h3>
            <h5>maxkdavis.website</h5>
            <div className="social-buttons">
                <button className="email-btn">Email</button>
                <a href="https://www.linkedin.com/in/maxkdavis/" target="_blank" rel="noreferrer">
                    <button className="linkedin-btn">LinkedIn</button>
                </a>
            </div>
        </div>
    );
}
