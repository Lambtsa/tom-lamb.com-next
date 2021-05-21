import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMediaIcons = () => (
  <div className="social">
    <a className="social__icons" target="_blank" rel="noreferrer" href="https://github.com/lambtsa">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a className="social__icons" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lambtsa-tomlamb/">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a className="social__icons" target="_blank" rel="noreferrer" href="https://www.instagram.com/lambtsa/">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  </div>
);

export default SocialMediaIcons;
