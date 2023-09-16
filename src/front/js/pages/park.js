import React from "react";
import { Context } from "../store/appContext";

export const Park = () => {
  return (
      <div className="flex-container d-flex flex-column min-vh-100">  
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <img src="/mnt/data/Screenshot 2023-09-15 at 8.05.47 PM.png" alt="The Park at OWA" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h1>The Park at OWA</h1>
                <p>Foley, Alabama, USA</p>
                <p>Roller Coasters: 3</p>
              </div>
            </div>
          </div>
          <div className="container mt-4">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rollin Thunder</td>
                  <td>7 <i className="fas fa-star"></i></td>
                </tr>
                <tr>
                  <td>Crazy Mouse</td>
                  <td>5 <i className="fas fa-star"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Reviews</h3>
              <button className="btn btn-success">Write Review</button>
            </div>
            <hr />
            <div className="mt-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <i className="fas fa-user"></i> <span>(Username Placeholder)</span>
                </div>
                <div>(Rating Placeholder) <i className="fas fa-star"></i></div>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat velit, sed condimentum nisi. Nulla facilisi.
              </p>
              <div className="text-right">
                <i className="fas fa-thumbs-up"></i> <i className="fas fa-thumbs-down"></i>
              </div>
            </div>
          </div>
      </div>  
  );
}
