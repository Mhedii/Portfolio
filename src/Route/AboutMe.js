import React from 'react';
import Education from '../Education/Education';

const AboutMe = () => {
    return (
        <div>
            <h3 className="card-title text-warning fs-1">Few Words About Me</h3>
            <div className="text-white align-items-center row">
                <div className=" mx-5 my-5 col-md-3">

                    <img src={require('../Images/mehedi.jpg').default} className="img-fluid" style={{ borderRadius: "50%" }} alt="Mehedi" />


                </div>
                <div className="text-white col-md-6">
                    <h1 > I'M <span className="text-danger">MD.MEHEDI HASAN</span></h1>
                    <h2 className="text-warning">React Developer</h2>
                    <h2>Hello There,</h2>
                    Welcome to My Website. I Am An Junior React Developer, Working on Many Kinds of Websites & Functionalities.I Can Build Business,ECommerce,Travel,Personal & All kinds Of Websites.

                    I am an Passionate JavaScript Developer With Knowing Some Framework for the Frontend and Backend.I am also familiar with php and MySQL but comfortable with MongoDB
                    <h5 className="text-warning"> My Expertise fields are React, Node JSand Mongo Db etc</h5>
                </div>
            </div>
            <Education></Education>
        </div>

    );
};

export default AboutMe;