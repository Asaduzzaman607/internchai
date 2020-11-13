import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import JobItems from './JobItems/JobItems';
import NewsLetter from './NewsLetter/NewsLetter';

const Home = () => {
    
            
    
    return (
        <div>
            <Header></Header>
            <div style={{backgroundColor:'#F3F4F6'}} >
            <JobItems></JobItems>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;