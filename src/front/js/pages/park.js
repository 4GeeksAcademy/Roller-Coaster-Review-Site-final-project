import React from "react";

export const Park = () => {
    return (
        <div className="park-container bg-light p-4">
            
            <div className="park-info d-flex flex-column align-items-center mb-4">
                <h1>The Park at OWA</h1>
                <div className="park-location d-flex align-items-center">
                    <i className="fa-solid fa-location-dot px-2"></i>
                    <p>Foley, Alabama, USA</p>
                </div>
                <p>Roller Coasters: 3</p>
            </div>
            
            <div className="coaster-table-container bg-white p-3 mb-4">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Rollin Thunder</td>
                            <td><i className="fa-solid fa-star"></i> 7</td>
                        </tr>
                        <tr>
                            <td>Crazy Mouse</td>
                            <td><i className="fa-solid fa-star"></i> 5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="reviews-container bg-white p-3">
                <div className="review-header d-flex justify-content-between border-bottom border-secondary pb-1 mb-3">
                    <h1>Reviews</h1>
                    <button className="btn btn-success">Write Review</button>
                </div>
                <div className="review-content">
                    <div className="review w-100 my-2">
                        <div className="review-user d-flex justify-content-between">
                            <div className="d-flex">
                                <img className="rounded-circle" height="50px" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                                <h4 className="mt-1 mx-2">User 1</h4>
                            </div>
                            <div>
                                <i className="fa-solid fa-star"> <span className="rating-num">10</span> </i>
                            </div>
                        </div>
                        <div className="review-comment">
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                        <div className="review-rating d-flex justify-content-end">
                            <h5>72</h5>
                            <i className="fa-solid fa-thumbs-up mx-1 fa-xl"></i>
                            <i className="fa-solid fa-thumbs-down mx-1 fa-xl"></i>
                            <h5>45</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
