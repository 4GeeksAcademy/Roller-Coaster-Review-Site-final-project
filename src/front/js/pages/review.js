import React from "react";
function Review() {
    const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return <div className="container">
        <h2 className="mt-4">Write your review for Millenium Force</h2>
        <div className="d-flex mt-4 align-items-center">
            <p><strong>Score:</strong></p>
                {scores.map(value => <button className="btn btn-primary ms-4">{value}</button>)}
        </div>
        
        <div class="mb-3">
  <label for="scoreexplantion" class="form-label"><h4 className="mt-4">Why did you give it that score?</h4> </label>
  <textarea class="form-control" placeholder="Write your thoughts here..." id="scoreexplantion" rows="10"></textarea>
</div>
<button type="button" class="btn btn-success float-end">Post Review</button>
    </div>
}
export default Review