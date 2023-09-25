import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Coaster Critics</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={`/search`}>
                            <p className="mb-0 nav-link">Find Park/Coasters</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            {
                                store.token && store.token.length > 0 ?
                                    (<li><span className="dropdown-item" onClick={()=> actions.logout().then(navigate('/'))}>Logout</span></li>)
                                    : (
                                        <>
                                            <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                            <li><Link className="dropdown-item" to="/signup">Signup</Link></li>
                                        </>
                                    )
                            }
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
