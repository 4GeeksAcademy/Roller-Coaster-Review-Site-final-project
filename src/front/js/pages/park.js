import React, {useState, useEffect, useContext} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Park = () => {
  const {parkID} = useParams()
  const navigate = useNavigate()
  const {store, actions} = useContext(Context)
  const [park, setPark] = useState({})

  const url = `${process.env.BACKEND_URL}api/parks/${parkID}`
  useEffect(() => {getPark()},[parkID])
  const getPark = () => {
    if (Object.keys(park).length > 0) setPark({})
    fetch(url, {method: 'GET'})
    .then(resp => resp.json())
    .then(park => setPark(park))
  }

  console.log(park)
  return (
      <div className="flex-container d-flex flex-column min-vh-100 mb-4">  
          <div className="container mt-5">
            <div className="d-flex gap-3 justify-content-center">
              <div className="">
                <img id="img" src="https://picsum.photos/500/300?random=1" />
              </div>
              <div className="">
                <div className="d-flex">
                  <h1>{park.name}</h1>
                  <i id="star" className="fa-solid fa-star mt-3 ms-2">
                    <span className="p-1">{park.avg_score === 0 ? "NR" : park.avg_score}</span>
                  </i>
                </div>
                <p><i className="fa-solid fa-location-dot px-2 pt-1"></i>{park.location}</p>
                <p>Year Opened: {park.year_opened}</p>
                <p>Roller Coasters: {!park.coasters ? "N/A" : park.coasters.length}</p>
              </div>
            </div>
          </div>
          <div className="reviews-div container mt-5 mb-3 pt-3 pb-2">
            <table className="table">
              <thead>
                <tr>
                  <th><h3>Roller Coasters</h3></th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {!park.coasters || park.coasters.length === 0 ? <tr><td><h5>Loading...</h5></td></tr> : (
                  park.coasters.map((coaster, idx) => {
                    return (
                      <tr key={idx}>
                        <td><Link to={`/coaster/${coaster.id}`}>
                          <p className="mb-0 text-black">{coaster.name}</p></Link>
                          </td>
                        <td>{coaster.avg_score === 0 ? "N/A" : coaster.avg_score} <i className="fas fa-star"></i></td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
          <div className="reviews-div container mt-3 mb-5 pt-3 pb-2">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Reviews</h3>
              <button 
              className="btn btn-success" 
              onClick={() => navigate(`/review/park/${parkID}`)}
              disabled={!store.token}
              >Write Review</button>
            </div>
            <hr />
            {/*<div className="mt-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <i className="fas fa-user"></i> <span>User 1</span>
                </div>
                <div>7 <i className="fas fa-star"></i></div>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat velit, sed condimentum nisi. Nulla facilisi.
              </p>
            </div>*/}
            {!park.reviews || park.reviews.length === 0 ? (<h4 className="text-center">There are no reviews for this park. Why don't you be the first?</h4>) : (
              park.reviews.map((review, idx) => {
                return (
                  <div key={idx} className="mt-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to={`/userprofile/${review.user_id}`}>
                        <div className="text-black">
                          <i className="fas fa-user me-1"></i><span>{review.username}</span>
                        </div>
                      </Link>
                      <div>{review.score} <i className="fas fa-star"></i></div>
                    </div>
                    <p className="mt-3">{review.review_text}</p>
                  </div>
                )
              })
            )}
          </div>
      </div>  
  );
}
