import React from "react";
import Bannerimg from "../img/Bannerimage.jpg"
import Product from "./Product";
function Home() {

    return (
        <>
            <div className="hero">
                <div className="card text-bg-dark border-0">
                    <img src={Bannerimg} className="card-img" alt="Background" height="550px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                            <p className="card-text"><small>Check Out All The Trends</small></p>
                        </div>

                    </div>
                </div>
                <Product/>
            </div>
        </>
    )
}
export default Home;