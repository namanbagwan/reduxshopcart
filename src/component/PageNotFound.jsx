import React from "react";
import page404 from '../img/404page.gif';

function PageNotFound() {

    return (
        <div className="container">
            <img src={page404} alt="Page Not Found" />
        </div>
    );
}

export default PageNotFound;
