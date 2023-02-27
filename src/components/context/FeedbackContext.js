import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from "../../data/FeedbackData";


const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData)

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])

    }

    // Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete the feedback?")) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // Update feedback item
    const updateFeedback = (id, updItem) => {
       setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item));
       setFeedbackEdit({
        item: {},
        edit: false
       })
    }

    return <FeedbackContext.Provider value={{
        // feedback: feedback,
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
export { FeedbackProvider };