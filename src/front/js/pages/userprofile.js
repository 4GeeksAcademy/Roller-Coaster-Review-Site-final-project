import React, { useContext } from "react";
import { Context } from "../store/appContext";

<script src="https://kit.fontawesome.com/95543ac58e.js" crossorigin="anonymous"></script>

export const UserProfile = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="userprofile-container">
                <div className="userinfo">
                    <img src="data:image/jpeg;base64,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" />
                    <div>
                        <h3>User Name</h3>
                        <p>There are many variations of passages of Lorem Ipsum avaid fjkbfbvjk fkbpiw uerpuf.dfvwiehnkjwe rigwerhjbivewgow.dknijebdv efhwou.</p>
                    </div>
                </div>
            </div>


            <div className="review-container">
                <h3>User Reviews:</h3>
            </div>
            <div className="park-review-container review-container">
                <div className="park-review">
                    <strong>Amusement Parks:</strong>
                    <hr>    
                    </hr>
                    <div className="review-top">
                        <strong>Cedar Point</strong>
                        <div className="review-top-text">   
                        <i className="fa-solid fa-location-dot fa-xs"></i><p>Sandusky, Ohio, USA</p>
                            <i className="fa-solid fa-star star-symbol"></i>
                            <p>10 stars</p>
                        </div>

                    </div>

                    <div className="review-mid">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>

                    <div className="review-bot">
                        <i className="fa-solid fa-thumbs-up fa-xl p-1"></i>
                        <p>152</p>
                        <i className="fa-solid fa-thumbs-down fa-xl p-1"></i>
                        <p>10</p>
                    </div>

                    <div className="review-top">
                        <strong>Kings Island</strong>
                        <div className="review-top-text">                           
                        <i className="fa-solid fa-location-dot fa-xs"></i><p>Mason, Ohio, USA</p>
                            <i className="fa-solid fa-star star-symbol"></i>
                            <p>9.5 stars</p>
                        </div>

                    </div>

                    <div className="review-mid">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>

                    <div className="review-bot">
                        <i className="fa-solid fa-thumbs-up fa-xl p-1"></i>
                        <p>78</p>
                        <i className="fa-solid fa-thumbs-down fa-xl p-1"></i>
                        <p>6</p>
                    </div>
                </div>
            </div>

            <div className="park-review-container review-container">
                <div className="park-review">
                    <strong>Roller Coasters:</strong>
                    <hr>    
                    </hr>
                    <div className="review-top">
                        <strong>Steel Vengeance</strong>
                        <div className="review-top-text">
                        <i className="fa-solid fa-location-dot fa-xs"></i><p>Cedar Point</p>
                            <i className="fa-solid fa-star star-symbol"></i>
                            <p>10 stars</p>
                        </div>

                    </div>

                    <div className="review-mid">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>

                    <div className="review-bot">
                        <i className="fa-solid fa-thumbs-up fa-xl p-1"></i>
                        <p>152</p>
                        <i className="fa-solid fa-thumbs-down fa-xl p-1"></i>
                        <p>6</p>
                    </div>

                    <div className="review-top">
                        <strong>Intimidator 305</strong>
                        <div className="review-top-text">
                        <i className="fa-solid fa-location-dot fa-xs"></i><p>Kings Island</p>
                            <i className="fa-solid fa-star star-symbol"></i>
                            <p>9.5 stars</p>
                        </div>

                    </div>

                    <div className="review-mid">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>

                    <div className="review-bot">
                        <i className="fa-solid fa-thumbs-up fa-xl p-1"></i>
                        <p>73</p>
                        <i className="fa-solid fa-thumbs-down fa-xl p-1"></i>
                        <p>8</p>
                    </div>

                </div>
            </div>
        </div>


    );
};