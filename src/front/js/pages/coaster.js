import React from "react";
export default function Coaster() {
    return (
        <div className="coaster-container bg-light">
            <div className="top-container d-flex gap-3 justify-content-center">
                <div className="coaster-picture">
                    <img id="img" src="https://picsum.photos/500/300?random=1" />
                </div>
                <div className="coaster-info">
                    <div className="coaster-info-title d-flex">
                        <h1>Millennium Force</h1>
                        <i id="star" class="fa-solid fa-star mt-3 ml-2"> <span className=" p-1">9.4</span></i>
                        {/* <i id="star" class="fa-solid fa-star mt-3 ml-2"style={coaster-reating>7?{"color":"green"}:coaster-rating>4{"color":"yellow"}:{"color":"red"}}> <span className=" p-1">9.4</span></i> */}
                    </div>
                    <div className="coaster-locoation d-flex">
                        <i class="fa-solid fa-location-dot px-2 pt-1"></i>
                        <p>Cedar Point (Sandusky, Ohio, USA)</p>
                    </div>
                    <div>
                        <ul className="general-info">
                            <li>Manufacturer: Intamin</li>
                            <li>Ride Type: Steel, Sit-down</li>
                            <li>Year Opened: 2000</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="coaster-stats">
                            <li>Length: 6,595 ft</li>
                            <li>Height/Drop: 310 ft / 300 ft</li>
                            <li>Drop Angle: 80 degrees</li>
                            <li>Max Speed: 93 mph</li>
                            <li>Inversions: 0</li>
                            <li>Ride Duration: 2:20</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="bottom-container bg-white mt-5 p-3 ">
                <div className="review-header d-flex justify-content-between border-bottom border-secondary pb-1 mb-3">
                    <h1>Review</h1>
                    <button className="btn btn-success">write review</button>
                </div>
                <hr/>
                <div className="review-content">
                    <div className="review w-100">
                       <div className="review-post w-100 my-2">
                        <div className="review-user d-flex justify-content-between">
                            <div className="d-flex">
                                <img className="rounded-circle" height="50px" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                                <h4 className="mt-1 mx-2">User 1</h4>
                            </div>
                            <div>
                            <i id="star" class="fa-solid fa-star"> <span className="rating-num">10</span> </i>
                            </div>
                        </div>
                        <div className="review-comment">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                        </div>
                        <div className="review-rating d-flex justify-content-end">
                        <h5>72</h5>
                            <i className="fa-solid fa-thumbs-up mx-1 fa-xl "></i>
                            <i className="fa-solid fa-thumbs-down mx-1 fa-xl"></i>
                            <h5>45</h5>
                        </div>
                        </div>
                        <div className="review-post w-100 my-2">
                        <div className="review-user d-flex justify-content-between">
                            <div className="d-flex">
                                <img className="rounded-circle" height="50px" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                                <h4 className="mt-1 mx-2">User 1</h4>
                            </div>
                            <div>
                            <i id="star" class="fa-solid fa-star"> <span className="rating-num">10</span> </i>
                            </div>
                        </div>
                        <div className="review-comment">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                        </div>
                        <div className="review-rating d-flex justify-content-end">
                            <h5>72</h5>
                            <i className="fa-solid fa-thumbs-up mx-1 fa-xl "></i>
                            <i className="fa-solid fa-thumbs-down mx-1 fa-xl"></i>
                            <h5>45</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>)
}