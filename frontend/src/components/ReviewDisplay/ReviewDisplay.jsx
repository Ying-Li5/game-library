import React from "react";
import style from './ReviewDisplay.css'
import MockImage from '../../public/images/Alax.jpg'

const ReviewDisplay = (props) => {
    const { reviews } = props
    return (
        <div className="review-container" style={ style }>
            {reviews.map((review) => {
                return (
                    <div className="reviewer-container">
                        <div className="reviewer">
                            <div className="profile-img">
                                <img src={ MockImage } alt="Avatar" class='avatar' />

                                <div className="reviewer-info">
                                    <p className="content-reviewer">
                                        { review.author_id } 
                                        <br />
                                        Score: { review.score }
                                    </p>
                                </div> 
                            </div>
                        
        
                            <div className="reviewer-description">
                                <p className="content-title">{ review.title }</p>
                                <p className="content">{ review.content }</p>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default ReviewDisplay