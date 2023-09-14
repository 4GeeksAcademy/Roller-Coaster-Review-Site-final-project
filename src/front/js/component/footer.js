import React from "react";

export const Footer = ({adjustHeight}) => {
    return (
        <footer className={`footer bg-primary ${adjustHeight ? "position-absolute bottom-0":""}`}>
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