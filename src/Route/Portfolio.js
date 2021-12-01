// import React, { useEffect, useState } from "react";
// import Cart from "../Cart/Cart";
// import Cook from "../Cook/Cook";
// import Details from "../Details/Details";



// const Portfolio = () => {
//     const [Portfolios, setChefs] = useState([]);
//     const [cart, setCart] = useState([]);
//     const [cook, setCook] = useState([]);

//     useEffect(() => {
//         fetch('../../public/Portfolio.JSON')
//             .then(res => res.json())
//             .then(data => setChefs(data))

//     }, [])

//     // const handleHire = (chefdetail) => {
//     //     const newCart = [...cart, chefdetail];
//     //     setCart(newCart);
//     //     const newCook = [...cook, chefdetail.name];
//     //     setCook(newCook);
//     // }
//     return (
//         <div className="chef-container">
//             <div className="name-container">
//                 {
//                     Portfolios.map(Portfolio => <Details
//                         key={Portfolio.key}
//                         chefdetail={chef}
//                     // handleHire={handleHire}
//                     >
//                     </Details>)
//                 }
//             </div>
//             <div className="cart-container">
//                 <Cart cart={cart}></Cart>
//                 <Cook cook={cook}></Cook>
//             </div>
//         </div>

//     );
// };

// export default Portfolio;

import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";


const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./Portfolio.JSON', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
            .then((res) => res.json())
            .then((data) => setProjects(data));

    }, []);


    return (
        <div>
            {/* <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> */}
            <div className="p-3 text-white">
                <h1>All Projects</h1>
                <div className="projects">
                    <div className="row p-5 m-5">
                        {projects?.map((pd) => (
                            <div className="col-md-4">
                                <div className="service border border p-3">
                                    <div className="img-fluid pt-2" >
                                        <img className="w-100" src={pd?.img} alt="" />
                                    </div>

                                    <h6 className="pt-3">Project Name: <span className="text-warning">{pd?.name}</span></h6>
                                    <h6><span className="text-danger">{pd?.Title}</span></h6>

                                    <p>{pd?.desc}</p>
                                    {/* <h3 className="text-danger"> Cost :{pd?.price}$</h3>
                                    <Link to={`/booking/${pd._id}`}>
                                        <button className="btn btn-success">Booking</button>
                                    </Link> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Portfolio;
