import React from 'react';
import './Footer.css'
import facebookLogo from '../../../images/facebook (1).svg';
import linkedInLogo from '../../../images/linkedin-logo.svg';
import githubLogo from '../../../images/github-sign.svg';
const Footer = () => {
    return (
        <footer>
          <div className="footer-links">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Post an Internship</li>
                    <li>Be a Contributor</li>
                  </ul>
                </div>
                <div className="col-4">
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Post an Internship</li>
                        <li>Be a Contributor</li>
                        </ul>
                </div>
                <div className="col-2"></div>
                <div className="col-2">
                  <div className="logos">
                  <img src={facebookLogo} alt=""/>
                  <img src={linkedInLogo} alt=""/>
                  <img src={githubLogo} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
};

export default Footer;