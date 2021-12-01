import React from 'react';
import Education from '../Education/Education';

import AboutMe from './AboutMe';
import { Contact } from './Contact';

const Home = () => {
    // var link = document.createElement('a');
    // link.href = "./Resume.pdf";
    // link.download = 'Resume.pdf';
    // link.dispatchEvent(new MouseEvent('click'));
    return (
        <div className="" >

            <div className="text-white align-items-center row">
                <div className="col-lg-6 justify-content-center">


                    <p className="fw-bold fs-1">
                        Hi, This is MD. MEHEDI HASAN
                    </p>

                    <p className="fs-6">
                        I am an Passionate JavaScript Developer With Knowing Some
                        Framework for the Frontend and Backend.<br />
                        I am also familiar with php, MySQL but i am comfortable with MongoDB
                        My expertise field in (MongoDB, Express JS,React JS & Node JS)
                    </p>
                    {/* <button type="button" class="btn btn-warning" href="../Resume/Resume.pdf" download="Resume.pdf">Download Resume</button> */}
                    {/* <a className="btn btn-danger" role="button" href="./Resume.pdf" download="Resume.pdf" >
                        Download Resume
                    </a> */}
                    {/* <a className="btn btn-danger" role="button" href="https://drive.google.com/file/d/1kIUzcGbJdQBUeYxIDYToMByJDsUE52SE/view?usp=sharing" download="MD.MEHEDI_HASAN.pdf" >
                        Download Resume
                    </a> */}
                    <a className="btn btn-danger" role="button" href="https://drive.google.com/u/2/uc?id=1kIUzcGbJdQBUeYxIDYToMByJDsUE52SE&export=download" download="MD.MEHEDI_HASAN.pdf" >
                        Download Resume
                    </a>
                </div>
                <div className=" mx-5 my-5 col-lg-3">

                    {/* <img src={"../Images/mehedi.jpg"} className="img-fluid" alt="..." /> */}
                    <img src={require('../Images/mehedi.jpg').default} className="img-fluid" style={{ borderRadius: "50%" }} alt="Mehedi" />

                </div>
            </div>
            <Education></Education>
            <AboutMe></AboutMe>
            <Contact></Contact>

        </div >

    );
};

export default Home;