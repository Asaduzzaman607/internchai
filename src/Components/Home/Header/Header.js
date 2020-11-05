import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <section>
            <div className="header-section">
                <NavBar></NavBar>
                <div className='header-main'><HeaderMain></HeaderMain></div>
            </div>
        </section>
    );
};

export default Header;