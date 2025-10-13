import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ava from '../assets/images/ava.jpeg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ava} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/krestianin" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ivan-postolov-b2a342289" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ivan Postolov</h1>
          <p>C++ Software Developer | Gamedev Enthusiast</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/krestianin" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ivan-postolov-b2a342289" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;