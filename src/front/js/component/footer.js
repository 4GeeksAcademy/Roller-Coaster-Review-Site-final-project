import React from "react";

export const Footer = () => {
    return (
        <footer className="footer bg-primary">
            <div className="container py-3">
            <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <a href="#"><i className="fab fa-github"></i></a>
                    </div>
                    <div className="col-lg-6 col-md-12 text-right">
                        <a href="#" className="text-white">FAQ</a>
                        <a href="#" className="text-white">Privacy Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}