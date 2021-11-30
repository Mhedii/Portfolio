import React from 'react';

const Home = () => {
    return (
        <div className="" style={{ backgroundColor: "#212520" }}>
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

                </div>
                <div className=" mx-5 my-5 col-lg-3">

                    {/* <img src={"../Images/mehedi.jpg"} className="img-fluid" alt="..." /> */}
                    <img src={require('../Images/mehedi.jpg').default} className="img-fluid" style={{ borderRadius: "50%" }} alt="Mehedi" />

                </div>
            </div>
        </div>

    );
};

export default Home;