import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <section>
            <div className="header-section">
                <NavBar></NavBar>
                <HeaderMain></HeaderMain>
            </div>
        </section>
    );
};

export default Header;