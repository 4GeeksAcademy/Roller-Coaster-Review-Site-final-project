import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function Coaster() {
    const {coasterID} = useParams()
    const navigate = useNavigate()
    const { store, actions } = useContext(Context)

    const [coaster, setCoaster] = useState({})

    const url = `${process.env.BACKEND_URL}api/coasters/${coasterID}`
    useEffect(() => {getCoaster()}, [coasterID])
    const getCoaster = () => {
        if (Object.keys(coaster).length > 0 ) setCoaster({})
        fetch(url, {method: 'GET'})
        .then(response => response.json())
        .then(ride => setCoaster(ride))
    }


    useEffect(() => {console.log(coaster)}, [coaster])

    console.log("Token: ", store.token)
    return (
        <div className="coaster-container mb-4">
            <div className="top-container d-flex gap-3 justify-content-center">
                <div className="coaster-picture">
                    <img id="img" src="https://picsum.photos/500/300?random=1" />
                </div>
                <div className="coaster-info">
                    <div className="coaster-info-title d-flex">
                        <h1>{coaster.name}</h1>
                        <i id="star" className="fa-solid fa-star mt-3 ms-2">
                            <span className="p-1">{coaster.avg_score === 0 ? "NR" : coaster.avg_score}</span>
                        </i>
                        {/* <i id="star" class="fa-solid fa-star mt-3 ml-2"style={coaster-reating>7?{"color":"green"}:coaster-rating>4{"color":"yellow"}:{"color":"red"}}> <span className=" p-1">9.4</span></i> */}
                    </div>
                    <div className="coaster-locoation d-flex">
                        <i className="fa-solid fa-location-dot px-2 pt-1"></i>
                        <Link to={`/park/${coaster.park_id}`}>
                            <p className="text-black">{coaster.park_name} ({coaster.location})</p>
                        </Link>
                    </div>
                    <div>
                        <ul className="general-info">
                            <li>Manufacturer: {coaster.manufacturer}</li>
                            <li>Ride Type: {coaster.ride_type}</li>
                            <li>Year Opened: {coaster.year_opened}</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="coaster-stats">
                            <li>Length: {coaster.track_length}</li>
                            <li>Height/Drop: {coaster.height} / {coaster.tallest_drop}</li>
                            <li>Drop Angle: {coaster.drop_angle}</li>
                            <li>Max Speed: {coaster.max_speed}</li>
                            <li>Inversions: {coaster.inversions}</li>
                            {/*<li>Ride Duration: 2:20</li>*/}
                        </ul>
                    </div>

                </div>
            </div>
            <div className="bottom-container bg-white mt-5 p-3 ">
                <div className="review-header d-flex justify-content-between border-bottom border-secondary pb-1">
                    <h1>Review</h1>
                    <button 
                    className="btn btn-success" 
                    onClick={() => navigate(`/review/coaster/${coasterID}`)}
                    disabled={!store.token ? true : false}
                    >Write Review</button>
                </div>
                <hr/>
                <div className="review-content">
                    <div className="review w-100">
                        {!coaster.reviews || coaster.reviews.length === 0 ? (<h4 className="text-center">There are no reviews for this coaster. Why don't you be the first</h4>) : (
                            coaster.reviews.map((review, idx) => {
                                return (
                                    <div key={idx} className="review-post w-100 mb-3">
                                        <div className="review-user d-flex justify-content-between">
                                            <div className="d-flex">
                                                <img className="rounded-circle" height="50px" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                                                <Link to={`/userprofile/${review.user_id}`}>
                                                    <h4 className="mt-1 mx-2 text-black">{review.user_name}</h4>
                                                </Link>
                                            </div>
                                            <div>
                                                <i id="star" className="fa-solid fa-star">
                                                    <span className="rating-num ms-1">{review.score}</span> 
                                                </i>
                                            </div>
                                        </div>
                                        <div className="review-comment">
                                            <p>{review.review_text}</p>
                                        </div>
                                    </div>
                                )
                            })
                        )}
                        {/*<div className="review-post w-100 mb-3">
                            <div className="review-user d-flex justify-content-between">
                                <div className="d-flex">
                                    <img className="rounded-circle" height="50px" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                                    <h4 className="mt-1 mx-2">User 1</h4>
                                </div>
                                <div>
                                    <i id="star" className="fa-solid fa-star">
                                        <span className="rating-num">10</span> 
                                    </i>
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
                        <div className="review-post w-100 mb-3">
                            <div className="review-user d-flex justify-content-between">
                                <div className="d-flex">
                                    <img className="rounded-circle" height="50px" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                                    <h4 className="mt-1 mx-2">User 1</h4>
                                </div>
                                <div>
                                    <i id="star" className="fa-solid fa-star">
                                        <span className="rating-num">10</span> 
                                    </i>
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
                        </div>*/}
                    </div>
                </div>
            </div>
    </div>)
}