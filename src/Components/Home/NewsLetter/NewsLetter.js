import React from 'react';
import './NewsLetter.css'
const NewsLetter = () => {
    return (
        <div className="newsLetter-holder">
        <section className='container newsletter'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='content'>
                        <h2>Stay ahead of the curve!</h2>
                        <p>Subscribe to our newsletter to get updates on new postings</p>
                        <div className='input-group'>
                            <input type="email" className="form-control" placeholder="Enter you email"/>
                            <span className='input-group-btn'> 
                                <button className='btn' type='submit'>Subscribe Now!</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
        </div>
    );
};

export default NewsLetter;