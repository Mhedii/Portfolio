import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FirstPageProjects = () => {
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
            <h1 className="p-3 text-white">Projects</h1>
            <div className="services">
                <div className="container">
                    {projects.slice(0, 3)?.map((pd, index) => (
                        <div className="">
                            <div className="">
                                <div className="service-img img-fluid pt-2">
                                    <img className="w-50" src={pd?.img} alt="" />
                                </div>
                                <h2 className="pt-2 text-white">Project Name: <span className="text-warning">{pd?.name}</span></h2>
                                <h3><span className="text-danger pt-2">{pd?.Title}</span></h3>

                                <p className="pt-2 text-white mb-3">{pd?.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FirstPageProjects;
