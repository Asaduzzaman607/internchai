import React from 'react';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main className="container header-main mt-10">
            <div className="row">
                <div className="col-md-4">
                    <h1 className="font-weight-bold" >Get your dream Internship!</h1>
                    <p>Use our curated list of employers to find your own place at an internship as a developer.</p>
                    <button className="btn btn-primary">Find yours</button>
                </div>
            </div>

        </main>
    );
};

export default HeaderMain;