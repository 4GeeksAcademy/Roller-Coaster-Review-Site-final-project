import React from "react";

export const Navbar = () => {
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
                    <a className="nav-link" href="#">Find Park/Coasters</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fas fa-user"></i></a>
                </li>
            </ul>
        </div>
    </nav>
  );
}
