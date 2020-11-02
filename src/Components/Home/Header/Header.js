import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <section>
            <div>
                <NavBar></NavBar>
                <HeaderMain></HeaderMain>
            </div>
        </section>
    );
};

export default Header;