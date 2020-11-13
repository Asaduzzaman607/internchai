import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';
import './Header.css';
import Wave from '../../../images/Wave.svg';
import hero from '../../../images/hero.svg'

const Header = () => {
    // <div className="col-4">
    //                   <img className="hero" src={hero} alt=""/>
    //                 </div>
    
    return (
        <section>
        <NavBar></NavBar>
            <div className="header-section d-flex justify-content-center">
              <div className="header-main-section ">
                 <div className="header-text-section">
                 <div className="container">
                 <div className="row">
                    <div className="col-6">
                        <h1 className="font-weight-bold" >Get your dream Internship!</h1>
                        <p>Use our curated list of employers to find your own place at an internship as a developer.</p>
                        <button className="btn btn-primary">Find yours</button>
                    </div>
                    </div>
                </div>
                 </div>
              </div>
            </div>
        </section>
    );
};

export default Header;