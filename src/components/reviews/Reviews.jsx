import React from "react";
import './Reviews.css';

const ReadMoreButton = () => {
    return (
        <div className="read-more-button-container">
                <button className="read-more-text" onClick={() => {
                    window.open("https://search.google.com/local/reviews?placeid=ChIJsQ51m9wPDTkRTj4-X1Yyk8k")
                }}>
                    Read More
                </button>
        </div>
    )
}

const ReviewText = () => {
    return (
        <div className="review-text-block">
            <div className="review-text" style={{ marginBottom: '80px' }}>
                Reviews
                <hr className="review-line"/>
            </div>
            <ReadMoreButton />
        </div>
    )
}

const ReviewCard = ({ text, author }) => {
    return (
        <div className="review-card-container">
            <div className="review-card">
                <div className="review-card-text">
                    {`"${text}"`}
                </div>
                <div className="review-card-author" style={{ textAlign: 'right' }}>
                    - &nbsp;&nbsp;{author}
                </div>
            </div>
        </div>
    )
}

function Reviews () {
    return (
        <div className="review" id="reviews">
            <div className="review-main">
                <ReviewText />
                <div className="review-main-cards" style={{
                    display: "flex",
                    justifyContent: 'space-between',
                }}>
                <ReviewCard 
                    text={"The food was yummy. And the staff was also welcoming. The aura inside is good. Very greatfully done sitting arrangement. Best place to give your taste buds an amazing experience. Hope to visit again soon."}
                    author={"Megha V."}
                />
                <ReviewCard 
                    text={"Nice Family restaurant and The atmosphere, the taste of food,, meals, dining experience, and price of food were all amazing. In addition to this, the accommodation services offered by the restaurant was good"}
                    author={"Mukul G."}
                />
                <ReviewCard 
                    text={"Nyc place to have some slicy instant snacks with tasty tangy flavours and awesome dine in experience"}
                    author={"Technical T."}
                />
                </div>
            </div>
        </div>
        
    )
}

export default Reviews;
