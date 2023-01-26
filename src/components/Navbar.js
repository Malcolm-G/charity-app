import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand h1" to="/"
                    >Charity-App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 w-50">
                            <li className="nav-item">
                                <Link className="nav-link mx-5" aria-current="page" to="/finder">CHARITY-FINDER</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-5" aria-current="page" to="/my-donations   ">MY-DONATIONS</Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="nav-link navbar-brand" to="/login" >LOGIN</Link>
                </div>
            </nav>
    )
}

export default Navbar