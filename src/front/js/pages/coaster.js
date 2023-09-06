import React from "react";
export default function Coaster(){
    return(
        <div className="text-auto">
            <div className="top-container d-flex">
                <div className="coaster-picture">
                    <img src="https://picsum.photos/500/300?random=1"/> 
                </div>
                <div className="coaster-info">
                    <div className="coaster-info-title d-flex flex-column">
                        <h1>Millennium Force</h1>
                        <span className="bg-primary rounded-circle p-1">9.4</span>
                        <p>Manufacturer: Intamin</p>
                    </div>

                </div>
            </div>
            <div className="bottom-container mx-auto w-75 bg-light mt-5 p-3">
                <div className="review-header d-flex justify-content-between border-bottom-0 mb-3">
                    <h1>Review</h1>
                    <button className="btn btn-success">write review</button>
                </div>
                <div className="review-content">
                    <div className="review-user d-flex justify-content-between">
                        <div className="d-flex">
                            <img className="rounded-circle" height="50px" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
                            <h4 className="mt-1 mx-2">User 1</h4>
                        </div>
                        <div>
                            <h4 className="rating-num">10</h4>
                        </div>
                    </div>
                    <div className="review-comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                    </div>
                    <div className="review-rating d-flex justify-content-end">
                        <p>72</p>
                        <i className="fa-solid fa-thumbs-up mx-1"></i>
                        <i className="fa-solid fa-thumbs-down mx-1"></i>
                        <p>45</p>
                    </div>
                </div>
            </div>
        </div>
    )
}