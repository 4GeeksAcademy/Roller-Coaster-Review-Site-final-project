import React from "react";
import { Context } from "../store/appContext";

export const Park = () => {
  return (
      <div className="flex-container d-flex flex-column min-vh-100 mb-4">  
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
              <img id="img" src="https://picsum.photos/500/300?random=1" />
              </div>
              <div className="col-md-6 mt-5">
                <h1>The Park at OWA</h1>
                <p><i class="fa-solid fa-location-dot px-2 pt-1"></i>Foley, Alabama, USA</p>
                <p>Year Opened: 2017</p>
                <p>Roller Coasters: 3</p>
              </div>
            </div>
          </div>
          <div className="container mt-4">
            <table className="table">
              <thead>
                <tr>
                  <th>Roller Coasters</th>
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





          <div className="reviews-div container mt-5 mb-5 pt-2 pb-2">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Reviews</h3>
              <button className="btn btn-success">Write Review</button>
            </div>
            <hr />
            <div className="mt-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <i className="fas fa-user"></i> <span>User 1</span>
                </div>
                <div>7 <i className="fas fa-star"></i></div>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat velit, sed condimentum nisi. Nulla facilisi.
              </p>
              <div className="d-flex justify-content-end">
                <p>32 <i className="fas fa-thumbs-up" style={{ marginRight: '5px' }}></i>
                <i className="fas fa-thumbs-down"></i>19</p>
              </div>
            </div>
          </div>
      </div>  
  );
}
