import React from 'react';
import './Footer.css'
import {FaFacebook,FaFacebookSquare,FaLinkedin,FaGithubSquare} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='main-footer' style={{backgroundColor:'black'}}>
            <div className='container footer-texts'>
                <div className='row'>
                    <div className="col-md-3 col-sm-3">
                        <h4>Lorem Iosum</h4>
                        <ul className='list-unstyled'>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lofrem ipsum</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <h4>Lorem Iosum</h4>
                        <ul className='list-unstyled'>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lofrem ipsum</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        
                    </div>
                    
                    
                    <div className="col-md-3 col-sm-3  mt-5 pt-5  d-flex justify-content-start">
                        <div className='icons'>
                            <div className='icon'>
                            <FaFacebookSquare></FaFacebookSquare>
                            </div>
                            <div  className='icon'>
                            <FaLinkedin></FaLinkedin>
                            </div>
                            <div  className='icon'>
                            <FaGithubSquare></FaGithubSquare>
                            </div>
                        
                        
                        </div>
                    </div>
                    
                </div>

                

            </div>
        </div>
    );
};

export default Footer;