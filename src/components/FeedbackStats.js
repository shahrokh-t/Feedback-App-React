import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)


    let ratingsAverage = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    ratingsAverage = ratingsAverage.toFixed(1).replace(/[.,]0$/, "")

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(ratingsAverage) ? 0 : ratingsAverage }</h4>
        </div>
    )
}

export default FeedbackStats;